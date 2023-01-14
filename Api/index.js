const express = require("express");
const path = require("path");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require('jsonwebtoken');
const { CosmosClient } = require("@azure/cosmos");
const nodemailer = require("nodemailer");

dotenv.config();
const PORT = process.env.PORT || 3001;
const secret = process.env.SECRET_CHAR;
const expiration = '30m';
const key = process.env.COSMOS_KEY;
const endpoint = process.env.COSMOS_URI;
const databaseName = "portfolio"

const app = express();

const client = new CosmosClient({ endpoint, key });

const cosmosConnection = async () => {
    const { database } = await client.databases.createIfNotExists({ id: databaseName });
    // const { container } = await database.containers.createIfNotExists({ id: "Teachers" });
    // console.log(container.id);
}
cosmosConnection();

const containers = {
    Users: client.database(databaseName).container("Users"),
    Posts: client.database(databaseName).container("Posts"),
}


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
    express.json({
        verify: (req, res, buf) => {
            req.rawBody = buf;
        },
    })
);

const Auth = {
    authMiddleware: function ({ req }) {
        // allows token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // We split the token string into an array and return actual token
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        // return the request object so it can be passed to the resolver as `context`
        return req;
    },
    signToken: function (data) {
        return jwt.sign(data, secret, { expiresIn: expiration });
    }
}

const matchPassword = async function (userPassword, dbPassword) {
    return await bcrypt.compare(userPassword, dbPassword);
};


app.post("/inquire", async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.email,
          pass: process.env.password,
        },
      });
    
    
      const mailOptions = {
        from: "evan.woods.dev@gmail.com",
        to: "evan.woods.dev@gmail.com",
        subject: `Enquiry from ${req.body.FirstName} ${req.body.LastName}`,
        text: `${req.body.Message} \n\n Phone: ${req.body.Phone}`,
      };
    
    
      const response = await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          res.send(err);
        } else {
          console.log(`Email sent! ${info.response}`);
          res.send("Success");
        }
      });
});

app.post("/login", async (req, res) => {
    try {
        const sqlQuery = `SELECT * FROM c WHERE c.Email = '${req.body.Email}'`;
        const user = await containers.Users.items.query(sqlQuery).fetchAll();
        const isCorrectPassword = await matchPassword(req.body.Password, user.resources[0].Password);
        // Get the user data to be only safe data for the frontend to access.
        const userData = await user.resources[0];

        if (user && isCorrectPassword) {
            const token = await Auth.signToken(userData);
            await res.status(200).json({ token });
        } else {
            await res.status(400).json({ Message: "Login Invalid" });
        }
    } catch (err) {
        console.log(err);
    }
});

app.post("/create-post", async (req, res) => {
    try {
        const post = {
            title: req.body.title,
            subtitle: req.body.subtitle,
            body: req.body.body,
            thumbnail: req.body.thumbnail,
            thumbnailAlt: req.body.thumbnailAlt,
            createdAt: new Date(),
            tags: req.body.tags.split("/")
        }
        await containers.Posts.items.create(post);
        res.status(200).json("Success")
    } catch (err) {
        res.status(500).json(err);
    }
});
app.get("/posts", async (req, res) => {
    try {
        const sqlQuery = `SELECT * FROM c`;
        const data = await containers.Posts.items.query(sqlQuery).fetchAll();
        res.status(200).json(data.resources);
    } catch (err) {
        res.status(500).json(err);
    }
});
app.post("/posts", async (req, res) => {
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

    try {
        const filteredResponse =  [];
        const sqlQuery = `SELECT * FROM c`;
        const data = await containers.Posts.items.query(sqlQuery).fetchAll();
        data.resources.filter((post) => post.tags.find(tag => {
            if (tag.includes(req.body.filter)) {
                filteredResponse.push(post);
            }
        }));
        res.status(200).json(filteredResponse.filter(onlyUnique));
    } catch (err) {
        res.status(500).json(err);
    }
});
app.post("/get-post", async (req, res) => {
    try {
        const sqlQuery = `SELECT * FROM c WHERE c.id = '${req.body.postId}'`;
        const data = await containers.Posts.items.query(sqlQuery).fetchAll();
        res.status(200).json(data.resources[0]);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}!`);
});

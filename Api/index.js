const express = require("express");
const path = require("path");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require('jsonwebtoken');
const { CosmosClient } = require("@azure/cosmos");

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
            body: req.body.body
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

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}!`);
});

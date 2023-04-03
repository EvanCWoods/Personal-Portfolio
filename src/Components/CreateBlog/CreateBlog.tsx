import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
var parse = require('html-react-parser');

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [thumbnailAlt, setThumbnailAlt] = useState("");
    const [tags, setTags] = useState("");


    const handleChange = () => {
        setTitle((((document.querySelector(".blog-title-input") as HTMLElement).childNodes[1] as HTMLInputElement).childNodes[0] as HTMLInputElement).value);
        setSubtitle((((document.querySelector(".blog-subtitle-input") as HTMLElement).childNodes[1] as HTMLInputElement).childNodes[0] as HTMLInputElement).value);
        setBody((((document.querySelector(".blog-body-input") as HTMLElement).childNodes[1] as HTMLInputElement).childNodes[0] as HTMLInputElement).value);
        setThumbnail((((document.querySelector(".blog-thumbnail-input") as HTMLElement).childNodes[1] as HTMLInputElement).childNodes[0] as HTMLInputElement).value);
        setThumbnailAlt((((document.querySelector(".blog-thumbnailAlt-input") as HTMLElement).childNodes[1] as HTMLInputElement).childNodes[0] as HTMLInputElement).value);
        setTags((((document.querySelector(".blog-tags-input") as HTMLElement).childNodes[1] as HTMLInputElement).childNodes[0] as HTMLInputElement).value);
    }


    const handleSubmit = async () => {
        const obj = {
            title: title,
            subtitle: subtitle,
            body: body,
            thumbnail: thumbnail,
            thubmnailAlt: thumbnailAlt,
            tags: tags
        }

        const response = await fetch("/create-post", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(obj)
        });
    }

    return (
        <Box sx={{ width: "100%" }}>
            <Box>
                <Typography variant="h4">Create A New Post</Typography>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <TextField
                        className="blog-title-input"
                        label="Title"
                        onChange={handleChange}
                    />
                    <TextField
                        className="blog-subtitle-input"
                        label="Subtitle"
                        onChange={handleChange}
                    />
                    <TextField
                        className="blog-thumbnail-input"
                        label="Thumbnail"
                        onChange={handleChange}
                    />
                    <TextField
                        className="blog-thumbnailAlt-input"
                        label="Thumbnail Alt"
                        onChange={handleChange}
                    />
                </Box>
                <TextField
                    className="blog-tags-input"
                    label="Tags"
                    sx={{ width: "50%" }}
                    onChange={handleChange}
                />
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <TextField
                        className="blog-body-input"
                        label="Multiline"
                        multiline
                        rows={10}
                        sx={{ width: "60%" }}
                        onChange={handleChange}
                        type="code"
                    />
                </Box>
                <button onClick={handleSubmit}>Submit</button>
            </Box>

            <Box sx={{ mt: "5%" }}>
                <Box sx={{ width: "80%", mx: "10%", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                    <Box sx={{ background: "var(--grey-background)", color: "var(--white-text)", pb: "70px" }}>
                        <img src={thumbnail} alt={thumbnailAlt} style={{ width: "90%", margin: "5%", maxWidth: "900px", maxHeight: "500px" }} />
                        <Box sx={{ margin: "0 5%", maxWidth: "900px" }}>
                            <Typography variant="h4">{parse(title)}</Typography>
                            <Typography variant="subtitle1">{parse(subtitle)}</Typography>
                            <br></br>
                            <Box>{parse(body)}</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default CreateBlog
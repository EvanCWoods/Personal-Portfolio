import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CreateBlog = () => {
    const handleSubmit = async () => {
        const title = (((document.querySelector(".blog-title-input") as HTMLElement).childNodes[1] as HTMLInputElement).childNodes[0] as HTMLInputElement).value;
        const subtitle = (((document.querySelector(".blog-subtitle-input") as HTMLElement).childNodes[1] as HTMLInputElement).childNodes[0] as HTMLInputElement).value
        const body = (((document.querySelector(".blog-body-input") as HTMLElement).childNodes[1] as HTMLInputElement).childNodes[0] as HTMLInputElement).value
        const thumbnail = (((document.querySelector(".blog-thumbnail-input") as HTMLElement).childNodes[1] as HTMLInputElement).childNodes[0] as HTMLInputElement).value
        const thumbnailAlt = (((document.querySelector(".blog-thumbnailAlt-input") as HTMLElement).childNodes[1] as HTMLInputElement).childNodes[0] as HTMLInputElement).value


        const obj = {
            title: title,
            subtitle: subtitle,
            body: body,
            thumbnail: thumbnail,
            thubmnailAlt: thumbnailAlt
        }

        const response = await fetch("/create-post", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(obj)
        });
        const data = await response;
    }
    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", height: "100vh" }}>
            <Typography variant="h4">Create A New Post</Typography>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <TextField
                    className="blog-title-input"
                    label="Title"
                />
                <TextField
                    className="blog-subtitle-input"
                    label="Subtitle"
                />
                <TextField
                    className="blog-thumbnail-input"
                    label="Thumbnail"
                />
                <TextField
                    className="blog-thumbnailAlt-input"
                    label="Thumbnail Alt"
                />
            </Box>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <TextField
                    className="blog-body-input"
                    label="Multiline"
                    multiline
                    rows={10}
                    sx={{ width: "60%" }}
                />
            </Box>
            <button onClick={handleSubmit}>Submit</button>
        </Box>
    )
}

export default CreateBlog
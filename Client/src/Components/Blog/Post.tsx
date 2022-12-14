import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";

const Post = () => {
    const [post, setPost] = useState<any>();
    const urlParams = window.location.href.split("/");
    const postId = urlParams[urlParams.length - 1];

    const getPost = async (id: string) => {
        const response = await fetch("/get-post", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ postId: id })
        });
        const data = await response.json();
        setPost(data);
    }

    useEffect(() => {
        getPost(postId);
    }, []);

    return (
        <Box sx={{}}>
            {post
                ? <Box sx={{ width: "80%", mx: "10%", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                    <Box sx={{ background: "var(--grey-background)", color: "var(--white-text)", pb: "70px" }}>
                        <img src={post.thumbnail} alt={post.thumbnailAlt} style={{ width: "90%", margin: "5%", maxWidth: "900px", maxHeight: "500px" }} />
                        <Box sx={{ margin: "0 5%" }}>
                            <Typography variant="h4">{post!.title}</Typography>
                            <Typography variant="subtitle1">{post!.subtitle}</Typography>
                            <br></br>
                            <Typography variant="body1">{post!.body}</Typography>
                        </Box>
                    </Box>
                </Box>
                : null}
        </Box>
    )
}

export default Post;
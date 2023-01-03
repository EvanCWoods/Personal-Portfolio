import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";

const Blog = () => {
    const [posts, setPosts] = useState<any[]>();

    const getPosts = async () => {
        const response = await fetch("/posts", {
            method: "GET"
        });
        const data = await response.json();
        setPosts(data);
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <Box sx={{ height: "100vh" }}>
            {posts
                ? <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                    {posts!.map(post => (
                        <Box sx={{ width: "250px", height: "300px", p: 1, background: "var(--grey-background)", color: "var(--white-text)", borderRadius: "10px", m: 3 }}>
                            <Typography>{post.title}</Typography>
                            <Typography>{post.subtitle}</Typography>
                            <Typography>{post.body}</Typography>
                        </Box>
                    ))}
                </Box>
                : <Typography>Check back again later!</Typography>}
        </Box>
    )
}

export default Blog;
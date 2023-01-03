import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
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
                        <Box sx={{ width: "350px", height: "400px", background: "var(--grey-background)", color: "var(--white-text)", borderRadius: "10px", m: 3 }}>
                            <Box sx={{ height: "90%" }}>
                                <img src={post.thumbnail} alt={post.thumbnailAlt} style={{ width: "100%", borderRadius: "10px 10px 0 0" }} />
                                <Typography variant="h6" sx={{ m: 1 }}>{post.title}</Typography>
                                <Typography variant="subtitle1" sx={{ m: 1 }}>{post.subtitle}</Typography>
                            </Box>
                            <Box>
                                <Link className="link-tag" to={`/blog/${post.id}`}
                                    style={{ margin: "0 0 5% 5%", display: "flex", alignItems: "center" }}>
                                    Read The Article
                                    <KeyboardArrowRightIcon />
                                </Link>
                            </Box>
                        </Box>
                    ))}
                </Box>
                : <Typography>Check back again later!</Typography>
            }
        </Box>
    )
}

export default Blog;
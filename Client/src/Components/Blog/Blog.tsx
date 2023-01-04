import { Link } from "react-router-dom";
import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React, { useState, useEffect } from "react";
import TextInputField from "../Landing/Components/Work/Components/TextInputField";

const Blog = () => {
    const [posts, setPosts] = useState<any[]>();
    const [isPosts, setIsPosts] = useState<boolean>(false);

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
    useEffect(() => {
        posts!.length >= 1 ? setIsPosts(true) : setIsPosts(false);
    }, [posts]);

    const handleChange = async (e: any) => {
        const filter = e.target.value;
        // request to api to get posts that have matching tags
        const response = await fetch("/posts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ filter: filter })
        })
        const data = await response.json();
        console.log(data);
        //update posts state to be filtered posts
        setPosts(data);
    }


    return (
        <Box sx={{ height: "100vh" }}>
            <TextField
                className="search-for-blogs"
                label="Search For Blogs"
                sx={{ width: "400px", position: "fixed", left: "calc(100% - 400px)", border: "none" }}
                onChange={handleChange}
            />
            {isPosts
                ? <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", py: "7%" }}>
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
                : <Box sx={{ display: "flex", justifyContent: "center", pt: "10%" }}>
                    <Typography variant="h4" sx={{ color: "white" }}>Hmmm... It looks like I haven't gotten to learning that yet. <br></br><br></br> Try something else, like 'Cosmos'</Typography>
                </Box>
            }
        </Box>
    )
}

export default Blog;
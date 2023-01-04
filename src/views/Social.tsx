import React from 'react';
import { Typography } from '@mui/material';
import Post from "../components/post";
import Grid from '@mui/material/Grid';


const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    }
];

const Dashboard = () => (
    <Grid container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={4}>
        <Typography variant="h1">
        Liens sociaux.
        </Typography>
        {featuredPosts.map((post) => (
            <Post key={post.title} post={post} />
        ))}
    </Grid>
);

export default Dashboard;

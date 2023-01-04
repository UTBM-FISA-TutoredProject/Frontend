import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import {Box, Grid, Container} from "@mui/material";

interface FeaturedPostProps {
    post: {
        date: string;
        description: string;
        image: string;
        imageLabel: string;
        title: string;
    };
}

export default function Post(props: FeaturedPostProps) {
    const { post } = props;

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: 1 }}>
                            <Container>
                                <Typography component="h2" variant="h5">
                                    {post.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    {post.date}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {post.description}
                                </Typography>
                            </Container>
                        </CardContent>
                        <Container>
                            <Typography variant="subtitle1" color="primary">
                                Continue reading...
                            </Typography>
                        </Container>
                    </Box>

                    <CardMedia
                        component="img"
                        sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                        image={post.image}
                        alt={post.imageLabel}
                    />
                </Card>
            </CardActionArea>
        </Grid>
    );
}
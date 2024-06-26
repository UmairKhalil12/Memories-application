import React, { useEffect } from 'react';
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import memories from "../image/memories.png"
import Posts from '../components/Posts/Posts';
import useStyles from '../style'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { getPostById } from '../actions/posts';
import axios from 'axios'
import Navbar from '../components/Navbar/Navbar';

const PostById = () => {
    const auth = useSelector((state) => state.auth);
    const userId = auth.user.user._id
    const userName = auth.user.user.Name;
    console.log(auth.user.user._id);
    console.log("userName", userName);
    console.log(userId, "posting");

    const token = useSelector(state => state.auth.user.token); // Added ?. to safely access nested properties
    console.log('app.js', token);
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    });

    const dispatch = useDispatch();
    useEffect(() => {
        if (userId) {
            dispatch(getPostById(userId));
        }
    }, [userId, dispatch]);

    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Container maxidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">
                        Memories
                    </Typography>
                    <img className={classes.image} src={memories} alt="memories" height="60" />
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid
                            className={classes.maincontainer}
                            container
                            justify="space-between"
                            alignItems="stretch"
                            spacing={3}
                        >
                            <Grid style={{ width: "100%" }}>
                                <Posts />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </>
    );
}

export default PostById;

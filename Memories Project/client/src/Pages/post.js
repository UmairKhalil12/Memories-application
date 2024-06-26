import React, { useEffect } from 'react';
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import memories from "../image/memories.png"
import Posts from '../components/Posts/Posts';
// import Form from '../components/Form/Form';
import useStyles from '../style'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { getposts } from '../actions/posts';

const Post = () => {
    const auth = useSelector((state) => state.auth);
    // const user = auth.user;
    const userId = auth.user.user._id
    const userName = auth.user.user.Name;
    console.log(auth.user.user._id);
    console.log("userName", userName);
    console.log(userId, "posting");

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getposts(userId))
    }, [dispatch])

    const classes = useStyles();
    return (
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
                        <Grid xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        {/* <Grid xs={12} sm={4}>
                            <Form />
                        </Grid> */}
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default Post;

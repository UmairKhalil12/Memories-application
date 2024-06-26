import React from 'react';
import Post from '../Post/Post.js';
import useStyles from "./Style.js";
import { useSelector } from 'react-redux';
import { Grid, Typography } from "@material-ui/core";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log("posts",posts); 
  const classes = useStyles();
  console.log(posts);

  return (
    <div>
      {!posts.length ? (
        <Typography variant="h6" style={{ color: 'white' }}>No posts found</Typography>
      ) : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Posts;

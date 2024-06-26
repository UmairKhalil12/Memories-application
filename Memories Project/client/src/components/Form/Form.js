import React, { useState, useEffect } from "react";
import useStyles from "./Style.js";
import { Button, Typography, TextField, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64'
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";
import { setid } from "../../actions/id.js";
import { useSelector } from "react-redux";
import axios from 'axios';

const Form = () => {
  const id = useSelector(state => state.id)
  const post = useSelector((state) => id ? state.posts.find((p) => p._id === id) : null);

  const auth = useSelector((state) => state.auth);
  // const user = auth.user;
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

  useEffect(() => {
    if (post) { setpostData(post) }
  }, [post])

  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      dispatch(updatePost(id, postData))

    }
    else {
      dispatch(createPost(postData))

    }
    clear();
    // console.log("id: "id)
  };


  const clear = () => {
    dispatch(setid(null));
    setpostData({
      userId: '',
      creator: '',
      title: "",
      message: "",
      tags: "",
      selectedfile: "",
    });
  }
  const classes = useStyles();

  const [postData, setpostData] = useState({
    userId: userId,
    creator: userName,
    title: "",
    message: "",
    tags: "",
    selectedfile: "",
  });


  return (
    <>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.form} ${classes.root}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">{!id ? "Create" : "Update"} A Memory</Typography>

          <TextField
            name="title "
            fullWidth
            variant="outlined"
            label="Title"
            value={postData.title}
            onChange={(e) =>
              setpostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="message"
            fullWidth
            variant="outlined"
            label="Message"
            value={postData.message}
            onChange={(e) =>
              setpostData({ ...postData, message: e.target.value })
            }
          />
          <TextField
            name="tags"
            fullWidth
            variant="outlined"
            label="Tags"
            value={postData.tags}
            onChange={(e) =>
              setpostData({ ...postData, tags: e.target.value.split(",") })
            }
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setpostData({ ...postData, selectedFile: base64 })}
            />

          </div>
          <Button className={classes.buttonSubmit} variant="contained" size="large" color="primary" type="submit" fullWidth>
            Submit
          </Button>
          <Button variant="contained" size="small" color="secondary" onClick={clear} fullWidth>
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Form;

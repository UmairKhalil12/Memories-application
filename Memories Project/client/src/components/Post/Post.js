import React from 'react'
import useStyles from "./Style.js"
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core"
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setid } from "../../actions/id.js"
import { deletePost, likePost } from '../../actions/posts.js';
// import  * as bindActionCreators  from 'redux';


const Post = ({ post }) => {
  const dispatch = useDispatch();
  console.log('Debugger');
  // const {setid} = bindActionCreators(setid,dispatch)
  const auth = useSelector((state) => state.auth);
  const userId = auth.user.user._id;
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card} style={{ color: "black" }}>
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">{moment(post.createdat).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
          {post.userId === userId ? <button size="small" onClick={() => { dispatch(setid(post._id)) }}>
            <i class="fa-solid fa-pen"></i>
          </button> : null}
        </div>

        <div className={classes.details} >
          <Typography variant="body2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
        <CardContent>
          <Typography variant="body2" color='textSecondary' component="p">{post.message}</Typography>
        </CardContent>
        <CardActions className={classes.CardActions}>
          <Button size="small" color="primary" onClick={() => { dispatch(likePost(post._id)) }}>
            <i className="fa-solid fa-thumbs-up">
              Like {post.likecount}
            </i>
          </Button>
          {post.userId === userId ? <Button size="small" color="primary" onClick={() => { dispatch(deletePost(post._id)) }}>
            <i class="fa-solid fa-trash">
              Delete
            </i>
          </Button> : null}
        </CardActions>



      </Card>
    </>
  )
}

export default Post

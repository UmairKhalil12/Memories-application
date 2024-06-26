import { FETCH,CREATE,UPDATE,LIKE,DELETE } from "../constants/actionTypes.js";
import * as api from "../api/index.js"

export const getposts = () => async (dispatch) => {
  try {
    const {data}  = await api.fetchnotes();
    dispatch({ type:FETCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

   
export const createPost = (post) => async (dispatch) => {
  try {
    const {data}  = await api.createpost(post);
    dispatch({ type: CREATE, payload: data});
    console.log("post created sucessfully");
  } catch (error) {
    console.log(error.message);
    console.log("error creating post" , error.message); 
  }
};

export const updatePost = (id,post)=> async (dispatch)=>{
  try {
     const {data} = await api.updatepost(id,post)
     dispatch({type:UPDATE,payload:data})
  } catch (error) {
    console.log(error.message)
  }
}

export const deletePost = (id)=> async (dispatch)=>{
  try {
    await api.deletepost(id)
     dispatch({type:DELETE,payload:id})
  } catch (error) {
    console.log(error)
  }
}


export const likePost = (id)=> async (dispatch)=>{
  try {
    const {data} = await api.likepost(id)
    dispatch({type:LIKE,payload:data})
  } catch (error) {
    console.log(error)
  }
}






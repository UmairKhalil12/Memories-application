import axios from "axios";

const host ="http://localhost:5000/posts"

const user = "http://localhost:5000"

export const fetchnotes = () => axios.get(`${host}/getall`);
export  const createpost =  (newpost) => axios.post(`${host}/create`,newpost );
export  const updatepost =  (id,newpost) => axios.patch(`${host}/${id}`,newpost);
export const deletepost=(id)=>axios.delete(`${host}/${id}`)
export const likepost=(id)=>axios.patch(`${host}/${id}/likepost`)

export const  login = (userData) =>axios.post(`${user}/login` , userData);
export const signup = (userData) => axios.post(`${user}/signup` , userData); 

export default {createpost,fetchnotes , login , signup};
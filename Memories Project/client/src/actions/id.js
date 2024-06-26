import { setId  } from "../constants/actionTypes"

export const setid = (id)=>(dispatch)=>{
    dispatch({
        type:setId,
        payload:id
    })
}
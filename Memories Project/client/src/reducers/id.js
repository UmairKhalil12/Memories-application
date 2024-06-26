import { setId  } from "../constants/actionTypes"
const reducers = (id=null, action) => {
    switch (action.type) {
      case setId:
        return action.payload
  
  
      default:
          return id
  
    }
  };
export default reducers
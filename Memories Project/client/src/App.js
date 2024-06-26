import React from "react";
import Routing from "./Routing/routing.js";
// import { useSelector } from "react-redux";
// import axios from "axios";

const App = () => {
  // const token = useSelector(state => state.auth.user.token);
  // console.log('app.js', token);

  // useEffect(() => {
  //   if (token) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  //   } else {
  //     delete axios.defaults.headers.common['Authorization'];
  //   }
  // });

  return (
    <div>
      <Routing />
    </div>
  );
};

export default App;

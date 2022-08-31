import React, { Fragment } from "react";
import loader from "./loader1.gif";
const Loader = () => (
  <Fragment>
    <img
      src={loader}
      alt="Loading..."
      style={{ width: "200px",height:"200px", margin: "auto", display: "grid", padding: "2px"}}
    />
    <p style={{textAlign:"center" , color: "black" , fontSize:"30px"}}>Please Wait ......
    </p>
  </Fragment>
);
export default Loader;
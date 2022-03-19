import React from "react";
import {Link} from "react-router-dom";

const NonReact = () => {
  return (
      <>
        <Link to="/tuiter">
          Tuiter
        </Link> |
        <Link to="/labs">
          Labs
        </Link> |
        <Link to="/hello">
          Hello
        </Link>
        <h1>Non React.js Assignments</h1>
        <ul>
          <li><Link to="../../../public/labs/a2/index.html">Assignment 2</Link></li>
          <li><Link to="../../../public/labs/a3/index.html">Assignment 3</Link></li>
          <li><Link to="../../../public/labs/a4/index.html">Assignment 4</Link></li>
          <li><Link to="../../../public/labs/a5/js/index.html">Assignment 5</Link></li>
        </ul>
      </>
  );
}

export default NonReact;
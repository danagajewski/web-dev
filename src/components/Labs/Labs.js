import React from "react";
import Classes from "./Classes/index";
import Styles from "./Styles/index";
import ConditionalOutput from "./ConditionalOutput/index";
import TodoList from "./Todo/TodoList"
import {Link} from "react-router-dom";
import NonReact from "../NonReact";
import ReduxExamples from "./redux-examples";
const Labs = () => {
  return(
      <div>
        <Link to="/tuiter">
          Tuiter
        </Link> |
        <Link to="/hello">
          Hello
        </Link>
        <h1>Labs</h1>
        <ReduxExamples/>
        <Styles/>
        <Classes/>
        <ConditionalOutput/>
        <TodoList/>
        <NonReact/>
      </div>
  )
};

export default Labs;

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/helloworld";
import Labs from "./components/Labs/Labs";
import Index from "./components/Tuiter";
import NonReact from "./components/NonReact/index"
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/hello"
                   exact={true}
                   element={<HelloWorld/>}/>
            <Route path="/labs"
                   exact={true}
                   element={<Labs/>}/>
            <Route path="/tuiter"
                   exact={true}
                   element={<Index/>}/>
            <Route path='/'
                   exact={true}
                   element={<NonReact/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;


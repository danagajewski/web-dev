import HelloWorld from "./components/helloworld";
import Labs from "./components/Labs/Labs";
import Index from "./components/Tuiter";
import NonReact from "./components/NonReact/index"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ExploreComponent from "./components/Tuiter/Explore/ExploreComponent";


import HomeScreen from './components/Tuiter/Homepage/HomeScreen';
import NotificationsScreen from './components/Tuiter/Notifications/NotificationsScreen.js';

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/">
              <Route path="hello"
                     exact={true}
                     element={<HelloWorld/>}/>
              <Route path="labs"
                     exact={true}
                     element={<Labs/>}/>
              <Route path='nonreact'
                     exact={true}
                     element={<NonReact/>}/>
              <Route path="tuiter"
                     element={<Index/>}>
                <Route index
                       element={<HomeScreen/>}/>
                <Route path="explore"
                       element={<ExploreComponent/>}/>
                <Route path="notifications"
                       element={<NotificationsScreen/>}/>
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;


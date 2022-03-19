import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar/NavigationSidebar";
import WhoToFollowList from "./WhoToFollow/WhoToFollowList";
import ExploreComponent from "./Explore/ExploreComponent";
import './explore.css';

const Index = () => {
  return (
      <>
        <Link to="/hello">
          Hello
        </Link> |
        <Link to="/labs">
          Labs
        </Link>
        <div className='row'>
          <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar/>
          </div>
          <div className="col-lg-6 col-md-10 col-10">
            <ExploreComponent/>
          </div>
          <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList/>
          </div>
        </div>
      </>
  )
};

export default Index;

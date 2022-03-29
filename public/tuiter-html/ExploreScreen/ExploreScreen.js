import NavigationSidebar from "./Navigation/NavigationSidebar.js";
import ExploreComponent from "./Explore/ExploreComponent.js";
import WhoToFollowList from "./WhoToFollow/WhoToFollowList.js";

(function ($) {
$('#wd-explore').append(`
      <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
          ${NavigationSidebar()}
        </div>
        <div class="col-lg-6 col-md-10 col-10"
          ${ExploreComponent()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          ${WhoToFollowList()}
        </div>
      </div>
      
  `);

})($);


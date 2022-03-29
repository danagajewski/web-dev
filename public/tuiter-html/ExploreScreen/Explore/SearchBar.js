const SearchBar = () => {
  return (`
  <container>
         <div class="row flex-nowrap margin-bottom-override">
          <div class="col-sm-11">
            <div class="input-group mb-3">
          <span class="input-group-text border-right-0 search-start-override"><i
              class="fa fa-lg fa-search wd-search-mag"></i></span>
              <input type="text" class="form-control rounded-override border-left-0"
                     placeholder="Search Twitter">
            </div>
          </div>
          <div class="col-sm-1 d-flex justify-content-center">
            <a href="explore-settings.html"
               class="wd-explore-profile align-middle"><i class="fa fa-2x fa-cog wd-explore-profile align-middle wd-center-cog"></i></a>
          </div>
        </div>
      </container>`);
}

export default SearchBar;
const Follow = (follow) => {
  return(`
          <li class="list-group-item">
            <div class="container p-0 m-0">
              <div class="row m-0">
                <div class="col-2 p-0 m-0">
                  <img
                      src="${follow.image}"
                      class="wd-round-image"/>
                </div>
                <div class="col-7">
                  <p class="wd-content">${follow.name} <i class="fa-solid fa-check-circle"></i></p>
                  <p class="wd-content-ends">${follow.tag}</p>
                </div>
                <div class="col-3 m-0 p-0 d-flex justify-content-end">
                  <button type="button"
                          class="btn btn-primary btn-lg w-100 wd-rounded-button wd-float-right m-0 p-0">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </li>
  `)
}

export default Follow;
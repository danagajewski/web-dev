const BigPicture = (image_link) => {
  return (`
  <div class="container border p-0 mt-2 border-0">
          <div class="card bg-white text-white border-0">
            <img class="wd-whole-width"
                 src="${image_link}">
            <div class="card-img-overlay h-100 d-flex flex-column justify-content-end">
              <h2 class="card-title" style="color:white;">SpaceX's Starship</h2>
            </div>
          </div>
        </div>`);
}

export default BigPicture;
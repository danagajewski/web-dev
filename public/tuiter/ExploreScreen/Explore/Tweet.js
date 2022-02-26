const Tweet = (tweet) => {
  let card_style = "card wd-middle";
  if (tweet.first) {
    card_style = "card mt-1 wd-top";
  }
  if (tweet.last) {
    card_style = "card mb-3 wd-bottom";
  }

  return (`<div class="${card_style}">
            <div class="row card-body p-1 m-1 ">
              <div class="col-9">
                <p class="wd-content-ends"> ${tweet.category}</p>
                <p class="wd-content">${tweet.account} <i class="fa-solid fa-check-circle"></i><span
                    class="wd-content-ends"> - ${tweet.age}</span></p>
                <p class="wd-content">${tweet.content}</p>
              </div>
              <div class="col-3"><img
                  src="${tweet.image}"
                  class="wd-square-image wd-float-right"/>
              </div>
            </div>
          </div>`);
}

export default Tweet;
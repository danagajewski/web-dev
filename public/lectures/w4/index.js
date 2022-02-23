
function hidep1() {
  $('p').hide()
}

function showp1() {
  $('p').show()
}

const addItemHandler = () => {
  const text = $("input").val();
  const newItem = $(`<li><p>${text}</p><li/>`);

  $("ul").append(newItem)
}

function init() {
  //alert("hello from jquery")
  //jQuery('h1').remove()
  //$('h1').css('color', 'red')
  //$('h1').css('background-color', 'blue')

  const heading1 = $('h1')

  heading1.css('color', 'red').css('background-color', 'blue')

  const hideParagraph = $("#hidep");
  const showParagraph = $("#showp");
  const addItem = $("#additem");

  hideParagraph.click(hidep1)
  showParagraph.click(showp1)
  addItem.click(addItemHandler)

}


jQuery(init); //run init when doc is done loading.
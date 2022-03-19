import React from 'react'

const NavigateItemSm = ({
    nav = {
      "icon" : "fa-brands fa-twitter",
      "content" : "",
      "active" : true
    }
}) => {
  return (
    <button className="list-group-item list-group-item-action">
      <i className={`${nav.icon}`}/>
    </button>
  );
}
export default NavigateItemSm;
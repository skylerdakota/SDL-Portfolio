import React from "react";


//****update header return
function Header(props) {
  return <div className="row">{props.children}</div>;
}

export default Header;
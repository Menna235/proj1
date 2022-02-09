import React from "react";

const Header = (props) => {
  //we use {} for javascript html (jsx)
  //we use() for writing html inside javascript
  return (
    <div className="App">
      <header className="App-header">{props.children}</header>
    </div>
  );
};

export default Header;

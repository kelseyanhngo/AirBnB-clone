import React from "react";
import "./header.scss";
// import '../Assets'

function Header(props) {
  return (
    <div className="header-container">
      <div className="header-container__logo">
        <img
          src="https://ohpartners.com/wp-content/uploads/2019/02/logo-airbnb-white-600x187.png"
          alt="logo"  />
      </div>

      <div className="header-container__choices">
          
      </div>

      <div className="header-container__last"></div>
    </div>
  );
}

export default Header;

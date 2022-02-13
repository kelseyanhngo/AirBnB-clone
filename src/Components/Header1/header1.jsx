import React from 'react';
import './header1.scss'
function Header1(props) {
    return (
        <div className="header1-container">
        <div className="header1-container__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
            alt="logo"
          />
        </div>
  
      <div header1-container__search>
            <input/>
      </div>
  
        <div className="header1-container__last">
          <div className="become-host">
            <h4>Become a Host</h4>
          </div>
          <div className="header1-translate">
            <i class="far fa-globe"></i>
          </div>
          <div className="header1-login">
            <i class="far fa-bars"></i>
            <i class="fal fa-user-circle"></i>
          </div>
        </div>
      </div>
    );
}

export default Header1;
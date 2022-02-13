import React, { useEffect } from "react";
import Header1 from "../Header1/header1";
import "./header.scss";

function Header(props) {
  useEffect(() => {
    // const  = document.querySelector('.header-container');
    const choice = document.querySelector(".header-container__choices");
    const choiceSearch = document.querySelector(
      ".header-container__choices-search"
    );

    window.onscroll = () => {
      if (window.scrollY > 0) {
        choiceSearch.classList.remove("none");
        choice.classList.add("none");
      } else {
        choice.classList.remove("none");
        choiceSearch.classList.add("none");
      }
    };
  }, []);
  return (
    <div className="header-container">
      <div className="header-container__logo">
        <img
          src="https://ohpartners.com/wp-content/uploads/2019/02/logo-airbnb-white-600x187.png"
          alt="logo"
        />
      </div>

      <div className="header-container__choices">
        <div className="choices-title">
          <h4>Places to stay</h4>
          <h4>Experiences</h4>
          <h4>Online Experiences</h4>
        </div>
        <div className="choices-search">
          <div className="part1">
            <h5>Location</h5>
            <p>Where are you going?</p>
          </div>
          <div className="part2">
            <h5>Check in</h5>
            <p>Add dates</p>
          </div>
          <div className="part3">
            <h5>Check out</h5>
            <p>Add dates</p>
          </div>
          <div className="part4">
            <h5>Guest</h5>
            <p>Add guests</p>
          </div>
          <div className="part5">
            <i class="fas fa-search"></i>
          </div>
        </div>
      </div>

      <div className="header-container__choices-search none">
        {/* <input 
        /> */}
       <form class="search-container">
      <input placeholder="Search here"/>
      <label  for="search">
      <i class="fal fa-search"></i>

        </label>
    </form>
      </div>
      <div className="header-container__last">
        <div className="become-host">
          <h4>Become a Host</h4>
        </div>
        <div className="header-translate">
          <i class="far fa-globe"></i>
        </div>
        <div className="header-login">
          <i class="far fa-bars"></i>
          <i class="fal fa-user-circle"></i>
        </div>
      </div>
      {/* <Header1/> */}
    </div>
  );
}

export default Header;

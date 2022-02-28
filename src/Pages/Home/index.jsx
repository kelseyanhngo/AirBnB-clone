import React from "react";
import Flexible from "../../Components/Flexible/flexible";
import Header from "../../Components/Header";
import "./home.scss";
import Insperation from "./../../Components/Insperation/insperation";
import DestinationList from './../../Components/DestinationList/index';
import Footer from "../../Components/Footer";

function Home(props) {
  return (
    <div>
      <Header />
      <Flexible />
      <Insperation />
      <div className="discover-container">
        <div className="discover-title">
          <h3>Discover Airbnb Experiences</h3>
        </div>

        {/* Discover part */}
        <div className="discover-main">
          <div className="discover-main__left">
            <img
              src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/IMG_9818.max-1000x1000.jpg"
              alt=""
            />
            <p>
              Things to do
              <br />
              on your trip
            </p>
            <button>Experiences</button>
          </div>
          <div className="discover-main__right">
            <img
              src="https://kenh14cdn.com/thumb_w/620/2019/6/2/6-1559463458875974530821.jpg"
              alt=""
            />
            <p>
              Things to do
              <br />
              from home
            </p>
            <button>Online Experiences</button>
          </div>
        </div>

        {/* Shop gift card part */}
        <div className="shopGiftCard-container">
          <div className="shopGiftCard-container__part1">
          <div className="gift-title">
          Shop Airbnb gift cards
          </div>
          <div className="gift-button">
          <button>
            Learn more
          </button>
          
          </div>
          </div>
          <div className="shopGiftCard-container__part2"> 
          <img src="https://a0.muscache.com/im/pictures/1ca4a497-ba40-4429-be1c-ac6abe4209c6.jpg?im_w=1200" alt="" />
          </div>
        </div>
        {/* Question about hosting */}
        <div className="question-container">
        <img src="https://wallpapercave.com/wp/wp4098870.jpg" alt=""/>
        <p>Question <br/> about <br/>  hosting?</p>
        <button>Ask a Superhost</button>

        </div>

        {/* Destinations */}
        <DestinationList/>

        {/* Footer */}
        <Footer/>
      </div>
    </div>
  );
}

export default Home;

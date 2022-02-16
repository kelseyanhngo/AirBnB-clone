import React from "react";
import Flexible from "../../Components/Flexible/flexible";
import Header from "../../Components/Header";
import "./home.scss";
import Insperation from "./../../Components/Insperation/insperation";

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

        <div className="discover-main">
          <div className="discover-main__left">
            <img
              src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/IMG_9818.max-1000x1000.jpg"
              alt=""
            />
            <p>Things to do on your trip</p>
          </div>
          <div className="discover-main__right">
            <img
              src="https://kenh14cdn.com/thumb_w/620/2019/6/2/6-1559463458875974530821.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

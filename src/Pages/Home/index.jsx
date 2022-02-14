import React from "react";
import Flexible from "../../Components/Flexible/flexible";
import Header from "../../Components/Header";
import "./home.scss";
import Insperation from './../../Components/Insperation/insperation';

function Home(props) {
  return (
    <div>
      <Header />
      <Flexible />
      <Insperation/>
    </div>
  );
}

export default Home;

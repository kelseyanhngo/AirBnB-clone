import React, { useEffect, useState } from "react";
import "./styles.scss";
import data from "./data";
import DestinationFeatures from "../DestinationFetures";

function DestinationList(props) {
  const [filteredDes, setFilteredDes] = useState("LD"); // mặc định là FC
  const [filteredData, setFilteredData] = useState(); //state để filter data

  useEffect(() => {
    // listen lien tuc, nếu có một prop hoặc state thay đổi thì nó sẽ chạy lại liên tục
    console.log(filteredDes);
    const newArray = data.filter((item) => item.type === filteredDes);
    setFilteredData(newArray); //update array
  }, [filteredDes]); //nêú ko truyền tham số thì chỉ chạy một lần duy nhất,
  //nếu filter này thay đổi thì uêfect này sẽ chạy lại một lần

  const lakeDes = () => {
    setFilteredDes("LD");
  };
  const mountainDes = () => {
    setFilteredDes("MD");
  };
  const coastalDes = () => {
    setFilteredDes("CD");
  };
  const islandDes = () => {
    setFilteredDes("ID");
  };
  const outdoorDes = () => {
    setFilteredDes("OD");
  };
  const otherDes = () => {
    setFilteredDes("PD");
  };
  return (
    <div className="destination">
        <div className="destination__title">
            <h3>
            Inspiration for future getaways
            </h3>
        </div>
      <div className="menu-list">
        <div className="type-pro" onClick={lakeDes}>
          <div
            className={`img_bg ${filteredDes === "LD" ? "active" : ""} `}
          ></div>
          <p> Lake Destinations </p>
        </div>

        <div className="type-pro" onClick={mountainDes}>
          <div
            className={`img_bg ${filteredDes === "MD" ? "active" : ""} `}
          ></div>
          <p> Mountain Destinations </p>
        </div>
        
        <div className="type-pro" onClick={coastalDes}>
          <div
            className={`img_bg ${filteredDes === "CD" ? "active" : ""} `}
          ></div>
          <p> Coastal Destinations </p>
        </div>

        <div className="type-pro" onClick={islandDes}>
          <div
            className={`img_bg ${filteredDes === "ID" ? "active" : ""} `}
          ></div>
          <p> Island Destinations </p>
        </div>
        <div className="type-pro" onClick={outdoorDes}>
          <div
            className={`img_bg ${filteredDes === "OD" ? "active" : ""} `}
          ></div>
          <p> Outdoor Destinations</p>
        </div>

        <div className="type-pro" onClick={otherDes}>
          <div
            className={`img_bg ${filteredDes === "PD" ? "active" : ""} `}
          ></div>
          <p> Other Popular Destinations </p>
        </div>
      </div>
      <DestinationFeatures feature={filteredData} />

    </div>
  );
}

export default DestinationList;

import React from "react";
import "./styles.scss";
import InsperationItem from "./../InsperationItem/index";

function InsperationList({ insprationList }) {
  return (
    <ul className="insperation-list">
      {insprationList.map((item) => (
        <li key={item.id}>
          <InsperationItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default InsperationList;

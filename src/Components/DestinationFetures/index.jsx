import classNames from "classnames";
import React from "react";
import DestinationDetail from "../DestinationDetail";
import "./styles.scss";

function DestinationFeatures({ feature, onItemClick }) {
  const handleClick = (item, idx) => {
    if (!onItemClick) return;
    onItemClick(item, idx);
  };
  return (
    <ul className="des__feature">
      {feature && feature.map((item,idx //feature đầu tiên dùng để kiêmr tra xem có data hay không, kiểu như if(feature). nếu có thì mới chạy, ko thì ko chạy.
) => (
            <li
              key={item.id}
              className={classNames({
                lakeDes: item.type === "LD",
                mountainDes: item.type === "MD",
                coastalDes: item.type === "CD",
                islandDes: item.type === "ID",
                outdoorDes: item.type === "OD",
                otherDes: item.type === "PD",
              })}
              onClick={() => {
                handleClick(item, idx);
              }}
            >
              <DestinationDetail detail={item} />
            </li>
          )
        )}
    </ul>
  );
}

export default DestinationFeatures;

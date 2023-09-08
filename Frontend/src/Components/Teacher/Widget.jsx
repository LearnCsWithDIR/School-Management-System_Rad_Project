import React from "react";
import "./Widget.css";
export default function Widgets({ type, count, precent }) {
  var data;

  switch (type) {
    case "Students":
      data = {
        title: type,
        itemCount: count,
        precentage: precent,
        icon: <ion-icon name="person-outline" color="blue" ></ion-icon>,
        // background : rgb(190, 44, 209)
      };
      break;
    case "Assigments":
      data = {
        title: type,
        itemCount: count,
        precentage: precent,
        icon: <ion-icon name="book-outline" color="blue"></ion-icon>,
        // background : rgb(190, 44, 209)
      };
      break;
    case "Submited":
      data = {
        title: type,
        itemCount: count,
        precentage: precent,
        icon: <ion-icon name="hourglass-outline" color="blue" ></ion-icon>,
        // background : rgb(190, 44, 209)
      };
      break;
    case "Fees Payed":
      data = {
        title: type,
        itemCount: count,
        precentage: precent,
        icon: <ion-icon name="cash-outline" color="blue" ></ion-icon>,
        // background : rgb(190, 44, 209)
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.itemCount}</span>
        {/* <span className="link">21,158</span> */}
      </div>
      <div className="right">
        <span className="precentage">
          <ion-icon name="chevron-up-outline"></ion-icon>
          {/* <ion-icon name="chevron-down-outline"></ion-icon> */}
          {data.precentage}
        </span>

        <span className="Dash-icon" >
          {data.icon}
        </span>
      </div>
    </div>
  );
}

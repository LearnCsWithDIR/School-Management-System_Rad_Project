import React from "react";
import "./Update.css";
import { Link } from "react-router-dom";

export default function Update() {
  //   const [title, children, openPopUp, setOpenPopUp] = props;

  return (
    <form>
      <Link>
        <ion-icon name="close-outline"></ion-icon>
      </Link>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <button type="submit">Update</button>
    </form>
  );
}

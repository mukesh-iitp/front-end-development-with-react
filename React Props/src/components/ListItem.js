import React, { Component } from "react";
import List from "./List";

// Complete this Component
const ListItem = (props) => {

  console.log(props);
  const{ name, link, icon, bgColor} = props.listitem;

  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: bgColor
      }}
    >
      <img src={icon} alt={name} />
      <a href={link}></a>
    </div>
  );
};

export default ListItem;

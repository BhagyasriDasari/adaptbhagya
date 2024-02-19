import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

class NavigationBar extends Component {
  render() {
    return (
      <div className="header">
      <div>
        <h1>Dashbord</h1>
      </div>
        <div className="menu">
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </div>
    );
  }
}

export default NavigationBar;
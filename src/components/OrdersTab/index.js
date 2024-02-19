import React, { Component } from "react";

import "./index.css";

class OrdersTab extends Component {
 
  handleStatusChange = (key) => {
    this.props.onStatusChange(key);
  };

  render() {
    return (
      <div className="tabs">
      <div
          className={`tab ${
            this.props.status === "Dashbord" ? "active" : ""
          }`}
          onClick={() => this.handleStatusChange("Dashbord")}
        >
        Dashbord
        </div>
        <div
          className={`tab ${
            this.props.status === "Inventory" ? "active" : ""
          }`}
          onClick={() => this.handleStatusChange("Inventory")}
        >
          Inventory
        </div>
        <div
          className={`tab ${this.props.status === "Orders" ? "active" : ""}`}
          onClick={() => this.handleStatusChange("Orders")}
        >
          Orders
        </div>
        <div
          className={`tab ${this.props.status === "Shipping" ? "active" : ""}`}
          onClick={() => this.handleStatusChange("Shipping")}
        >
          Shipping
        </div>
        <div
          className={`tab ${
            this.props.status === "Channels" ? "active" : ""
          }`}
          onClick={() => this.handleStatusChange("Channels")}
        >
          Channels
        </div>
      </div>
    );
  }
}

export default OrdersTab;
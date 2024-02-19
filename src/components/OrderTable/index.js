import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEdit,
  faCheck,
  faTimes,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";

class OrderTable extends Component {

  handleImportOrders = () => {
    
    alert("Import orders");
  };

  handleRefresh = () => {
   
    alert("Refresh");
  };

  
  handleActions = (order) => {
    
    alert(`Actions for order ${order.id}`);
  };

  render() {
    
    const filteredOrders = this.props.orders.filter(
      (order) => order.status === this.props.status
    );

    return (
      <div>
        <div className="filters">
          <div
            className={`filter ${
              this.props.status === "Pending" ? "active" : ""
            }`}
            onClick={() => this.props.onStatusChange("Pending")}
          >
            Pending
          </div>
          <div
            className={`filter ${
              this.props.status === "Accepted" ? "active" : ""
            }`}
            onClick={() => this.props.onStatusChange("Accepted")}
          >
            Accepted
          </div>
          <div
            className={`filter ${
              this.props.status === "AWB Created" ? "active" : ""
            }`}
            onClick={() => this.props.onStatusChange("AWB Created")}
          >
            AWB Created
          </div>
          <div
            className={`filter ${
              this.props.status === "Ready to Ship" ? "active" : ""
            }`}
            onClick={() => this.props.onStatusChange("Ready to Ship")}
          >
            Ready to Ship
          </div>
          <div
            className={`filter ${
              this.props.status === "Shipped" ? "active" : ""
            }`}
            onClick={() => this.props.onStatusChange("Shipped")}
          >
            Shipped
          </div>
          <div
            className={`filter ${
              this.props.status === "Cancelled" ? "active" : ""
            }`}
            onClick={() => this.props.onStatusChange("Cancelled")}
          >
            Cancelled
          </div>
          <div className="buttons">
            <button onClick={this.handleImportOrders}>Import Orders</button>
            <button onClick={this.handleRefresh}>Refresh</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Channel ID</th>
              <th>Order No.</th>
              <th>Order Date</th>
              <th>City</th>
              <th>Customer Name</th>
              <th>Order Value</th>
              <th>Status</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{order.userId}</td>
                <td>{order.id}</td>
                <td>{order.title}</td>
                <td>{order.body}</td>
                <td>{order.userId}</td>
                <td>{order.value}</td>
                <td className={order.status.toLowerCase()}>{order.status}</td>
                <td>
                  <div className="icons">
                    <FontAwesomeIcon icon={faEdit} />
                    <FontAwesomeIcon icon={faCheck} />
                    <FontAwesomeIcon icon={faTimes} />
                    <FontAwesomeIcon icon={faEllipsisV} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <span>1 / 20 PAGE</span>
        </div>
      </div>
    );
  }
}

export default OrderTable;
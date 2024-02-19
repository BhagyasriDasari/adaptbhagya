import React, { Component } from "react";

import NavigationBar from "../NavigationBar";
import OrdersTab from "../OrdersTab";
import OrderTable from "../OrderTable";
import './index.css'

class OrderManagement extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      status: "Pending",
    };
  }

 
  componentDidMount() {
   
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        
        const statuses = [
          "Pending",
          "Accepted",
          "AWB Created",
          "Ready to Ship",
          "Shipped",
          "Cancelled",
        ];
        const values = [100, 200, 300, 400, 500];
        const ordersWithStatus = data.map((order) => ({
          ...order,
          status: statuses[Math.floor(Math.random() * statuses.length)],
          value: values[Math.floor(Math.random() * values.length)],
        }));
        this.setState({ orders: ordersWithStatus });
      })
      .catch((error) => {
        console.error(error);
      });
  }

 
  handleStatusChange = (key) => {
    this.setState({ status: key });
  };

  
  render() {
    return (
      <div className="container">
        
        <NavigationBar />
        <div className="content-details">
        
        <OrdersTab
          status={this.state.status}
          onStatusChange={this.handleStatusChange}
        />
        
        <OrderTable
          orders={this.state.orders}
          status={this.state.status}
          onStatusChange={this.handleStatusChange}
        />
      </div>
      </div>
    );
  }
}

export default OrderManagement;
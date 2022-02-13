import React, { Component } from "react";
export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Pott",
        phone: "123-456",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Scatt",
        phone: "123-123",
        address: { city: "New Jersey" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Boot",
        phone: "123-234",
        address: { city: "New York" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "Scoville",
        phone: null,
        address: { city: "New Hampshire" },
        photo: "https://picsum.photos/id/1013/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info m-1" onClick={this.onRefreshClick}>
            Refresh
          </button>
          <button className="btn btn-info m-1" onClick={this.onAddClick}>
            Add
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  // Executes when the user slicks on Refresh button
  onRefreshClick = () => {
    console.log("Refresh clicked");
    this.setState({ customersCount: 0 });
  };

  // Executes when the user slicks on Add button
  onAddClick = () => {
    console.log("Add clicked");
    var count = this.state.customersCount;
    count = count + 1;
    this.setState({ customersCount: count });
  };

  getPhoneToRender = (phone) => {
    if (phone) {
      return phone;
    } else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  //Executes when the user clicks on "Change Picture" button in the grid
  //Receives the "customer" object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {
    //Generate a random number and update the img url
    const rndInt = Math.floor(Math.random() * 100) + 1;
    var imgurl = "https://picsum.photos/id/" + rndInt + "/60";

    //Get the existing customers
    var custArr = this.state.customers;
    custArr[index].photo = imgurl;

    //Update "customers" array in the state
    this.setState({ customers: custArr });
  };
}

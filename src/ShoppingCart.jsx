import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor(props) {
    console.log("constructor - Shopping Cart");
    super(props); //calling super class's constructor (Component)
    //initialize the state
    this.state = {
      products: [
        { id: 1, productName: "iPhone1", price: 1900, quantity: 0 },
        { id: 2, productName: "iPhone2", price: 2900, quantity: 0 },
        { id: 3, productName: "iPhone3", price: 3900, quantity: 0 },
        { id: 4, productName: "iPhone4", price: 4900, quantity: 0 },
        { id: 5, productName: "iPhone5", price: 5900, quantity: 0 },
        { id: 6, productName: "iPhone6", price: 6900, quantity: 0 },
        { id: 7, productName: "iPhone7", price: 7900, quantity: 0 },
      ],
    };
  }

  render() {
    console.log("render - Shopping Cart");
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  // render ends here

  //Executes after constructor and render method (includes life cycle
  // of child components, if any) of current component.
  // This is a good place to make any http requests or fetch data from a data source
  componentDidMount() {
    //fetch data from data source
    console.log("componentDidMount - Shopping Cart");
  }

  componentDidUpdate(prevProps, prevState) {
    //fetch data from data source
    console.log(
      "componentDidUpdate - Shopping Cart - Previous",
      prevProps,
      prevState
    );
    console.log(
      "componentDidUpdate - Shopping Cart - Current",
      this.props,
      this.state
    );
  }

  //executes when user clicks the + button
  // The spread operator does not provide a deep copy
  //  Need to use map to copy each element in the array
  handleIncrement2 = (prod, maxValue) => {
    if (prod.quantity >= maxValue) return;

    let allProducts = this.state.products.slice();
    let index = allProducts.indexOf(prod);
    allProducts[index].quantity++;
    this.setState({ products: allProducts });
    console.log("allProducts", allProducts);
  };

  handleIncrement = (prod, maxValue) => {
    //if (prod.quantity >= maxValue) return;

    const { products } = this.state;
    const index = products.indexOf(prod);
    const newProducts = products.map((p, i) => {
      if (i === index) {
        return {
          ...p,
          quantity: p.quantity + 1,
        };
      }
      return p;
    });

    this.setState({ products: newProducts });
    console.log("productss", this.state.products);
  };

  //executes when user clicks the - button
  handleDecrement2 = (prod, minValue) => {
    if (prod.quantity <= minValue) return;

    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(prod);
    allProducts[index].quantity--;
    this.setState({ products: allProducts });
    console.log("Decrement", index, this.state.products);
  };

  handleDecrement = (prod, minValue) => {
    if (prod.quantity <= minValue) return;

    const { products } = this.state;
    const index = products.indexOf(prod);
    const newProducts = products.map((p, i) => {
      if (i === index) {
        return {
          ...p,
          quantity: p.quantity - 1,
        };
      }

      return p;
    });
    this.setState({ products: newProducts });
  };

  //executes when user clicks the x button
  handleDelete = (prod) => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(prod);
    allProducts.splice(index, 1);
    this.setState({ products: allProducts });
  };
}

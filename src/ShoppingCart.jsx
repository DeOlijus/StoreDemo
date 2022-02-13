import * as React from "react";
import { compact } from 'lodash';
import Product from "./Product";

const ShoppingCart = () => {
  const [products, setProducts] = React.useState([
    { id: 1, productName: "iPhone1", price: 1900, quantity: 0 },
    { id: 2, productName: "iPhone2", price: 2900, quantity: 0 },
    { id: 3, productName: "iPhone3", price: 3900, quantity: 0 },
    { id: 4, productName: "iPhone4", price: 4900, quantity: 0 },
    { id: 5, productName: "iPhone5", price: 5900, quantity: 0 },
    { id: 6, productName: "iPhone6", price: 6900, quantity: 0 },
    { id: 7, productName: "iPhone7", price: 7900, quantity: 0 },
  ]);

  return (
    <div className="container-fluid">
      <h4>Shopping Cart</h4>
      <div className="row">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onIncrement={(prod, maxValue) => {
              const newProducts = products.map((p, i) => {
                if (p.id === prod.id) {
                  return {
                    ...p,
                    quantity: p.quantity + 1,
                  };
                }
                return p;
              });

              setProducts(newProducts);
            }}
            onDecrement={(prod, minValue) => {
              if (prod.quantity <= minValue) return;

              const newProducts = products.map((p, i) => {
                if (p.id === prod.id) {
                  return {
                    ...p,
                    quantity: p.quantity - 1,
                  };
                }

                return p;
              });

              setProducts(newProducts);
            }}
            onDelete={(prod) => {
              if (!window.confirm("Are you sure you want to delete?")) return;

              const newProducts = compact(products.map((p, i) => {
                if (p.id === prod.id) {
                  return null;
                }

                return p;
              }));

              setProducts(newProducts);
            }}
          >
            <button className="btn btn-primary">Buy Now</button>
          </Product>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;

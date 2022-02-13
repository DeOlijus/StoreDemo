import React from "react";

const Product = ({ children, onIncrement, onDecrement, onDelete, product }) => (
  <div className="col-lg-6">
    <div className="card m-2 border">
      <div className="card-body">
        <div className="text-muted">
          #{product.id}
          <span
            className="pull-right hand-icon"
            onClick={() => {
              onDelete(product);
            }}
          >
            <i className="fa fa-times"></i>
          </span>
        </div>

        <h5 className="pt-2 border-top">
          {product.productName}
        </h5>
        <div>${product.price}</div>
      </div>
      {/*card body ends here*/}

      <div className="card-footer">
        <div className="float-start">
          <span className="badge text-dark">
            {product.quantity}
          </span>
          <div className="btn-group">
            <button
              className="btn btn-outline-success"
              onClick={() => {
                onIncrement(product, 10);
              }}
            >
              +
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                onDecrement(product, 0);
              }}
            >
              -
            </button>
          </div>
        </div>
        {/*float start ends here*/}

        <div className="float-end">{children}</div>
      </div>
      {/*footer ends here*/}
    </div>
  </div>
);

export default Product;
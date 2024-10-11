import React from "react";
import Table from "./table.jsx";

const TableProducts = ({
  deleteProduct,
  setView,
  products,
  setSelectedProduct,
}) => {
  return (
    <>
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <Table
                deleteProduct={deleteProduct}
                setView={setView}
                product={product}
                setSelectedProduct={setSelectedProduct}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableProducts;

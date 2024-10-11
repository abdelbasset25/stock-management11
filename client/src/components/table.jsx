import React from "react";

const Table = ({ product, deleteProduct, setView, setSelectedProduct }) => {
  return (
    <>
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.brand}</td>
        <td>{product.category}</td>
        <td>${product.price}</td>
        <td>
          <img className="img" src={product.image} alt={product.name} />
        </td>
        <td>{product.created_at}</td>
        <td>
          <button
            onClick={() => {
              setSelectedProduct(product);
              setView("update", product);
            }}
          >
            Edit
          </button>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default Table;

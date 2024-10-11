import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import TableProducts from "./components/tableproducts.jsx";
import CreateProduct from "./components/createtable.jsx";
import UpdateProduct from "./components/updateProduct.jsx";

const App = ({
  setView,
  deleteProduct,
  updatePro,
  View,
  setSelectedProduct,
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    $.ajax({
      url: "http://localhost:3000/api/products/",
      type: "GET",
      success: (data) => {
        setProducts(data);
      },
      error: (error) => {
        console.error("Error fetching products:", error);
      },
    });
  }, [View]);

  return (
    <div>
      <button onClick={() => setView("create", null)}>Add Product</button>
      <TableProducts
        deleteProduct={deleteProduct}
        setView={setView}
        products={products}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  );
};

function Root() {
  const [View, setView] = useState("list");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addProduct = (newProduct) => {
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/api/products/",
      data: newProduct,
      success: () => {
        console.log("Product added");
        setView("list", null);
      },
      error: (err) => {
        console.log("Error adding product:", err);
      },
    });
  };

  const deleteProduct = (id) => {
    $.ajax({
      type: "DELETE",
      url: `http://localhost:3000/api/products/${id}`,
      success: () => {
        console.log("deleted");
        setView("list", null);
      },
      error: (err) => {
        console.log("err");
      },
    });
  };

  const updatePro = (updatedProduct) => {
    $.ajax({
      type: "PUT",
      url: `http://localhost:3000/api/products/${updatedProduct.id}`,
      data: JSON.stringify(updatedProduct),
      contentType: "application/json",
      success: () => {
        console.log("Product updated");
        setView("list", null);
      },
      error: (err) => {
        console.log("Error updating product:", err);
      },
    });
  };

  const setViewWithProduct = (view, product) => {
    setView(view);
    setSelectedProduct(product);
  };

  if (View === "list") {
    return (
      <App
        deleteProduct={deleteProduct}
        setView={setViewWithProduct}
        View={View}
        updatePro={updatePro}
        setSelectedProduct={setSelectedProduct}
      />
    );
  } else if (View === "create") {
    return (
      <CreateProduct
        View={View}
        addProduct={addProduct}
        setView={setViewWithProduct}
      />
    );
  } else if (View === "update") {
    return (
      <UpdateProduct
        View={View}
        updatePro={updatePro}
        setView={setViewWithProduct}
        product={selectedProduct}
      />
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("app"));

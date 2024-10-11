const express = require("express");
const db = require("./database-mysql");
const cors = require("cors");
const {
  selectAll,
  insert,
  deleteProduct,
  updateProduct,
} = require("./database-mysql");

const app = express();
const PORT = 3000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.get("/api/products", function (req, res) {
  selectAll((err, products) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(products);
    }
  });
});

app.post("/api/products", (req, res) => {
  insert(req.body, (err, result) => {
    if (err) {
      console.error("Error inserting product:", err);
      res.status(500).send("Error inserting product");
    } else {
      res
        .status(201)
        .json({ message: "Product added successfully", id: result.insertId });
    }
  });
});

app.delete("/api/products/:id", (req, res) => {
  const id = req.params.id;
  deleteProduct(id, (err, result) => {
    if (err) {
      console.error("Error deleting product:", err);
      res.status(500).send("Error deleting product");
    } else {
      res.status(200).json({ message: "Product deleted successfully" });
    }
  });
});

app.put("/api/products/:id", function (req, res) {
  const { id } = req.params;
  updateProduct(id, req.body, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ message: "Product updated successfully" });
    }
  });
});

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`);
});

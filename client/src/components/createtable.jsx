import React, { useState } from "react";

const CreateProduct = ({ setView, addProduct, View }) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const changeName = (event) => setName(event.target.value);
  const changeBrand = (event) => setBrand(event.target.value);
  const changePrice = (event) => setPrice(event.target.value);
  const changeCategory = (event) => setCategory(event.target.value);
  const changeImage = (event) => setImage(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      name,
      brand,
      price,
      category,
      image,
    };
    addProduct(newProduct);
    setName("");
    setBrand("");
    setPrice("");
    setCategory("");
    setImage("");
    setView("list", null);
  };

  return (
    <form>
      <input
        onChange={changeName}
        value={name}
        type="text"
        placeholder="Product Name"
        required
      />
      <input
        onChange={changeBrand}
        value={brand}
        type="text"
        name="brand"
        placeholder="Brand"
        required
      />
      <input
        onChange={changeCategory}
        value={category}
        type="text"
        name="category"
        placeholder="Category"
        required
      />
      <input
        onChange={changePrice}
        value={price}
        type="number"
        name="price"
        placeholder="Price"
        required
      />
      <input
        onChange={changeImage}
        value={image}
        type="text"
        name="image"
        placeholder="Image URL"
        required
      />

      <button onClick={handleSubmit}>Add Product</button>
    </form>
  );
};

export default CreateProduct;

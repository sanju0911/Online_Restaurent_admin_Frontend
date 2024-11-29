import React, { useState } from "react";
import "./Styles/Add_FoodItems.css";

const Add_FoodItems = () => {
  const [foodItem, setFoodItem] = useState({
    productName: "",
    price: "",
    category: "",
    bestseller: false,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFoodItem({
      ...foodItem,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="add-food-item-container">
      <h1>Add Food Item</h1>
      <form className="add-food-item-form">
        <label>Product Name:</label>
        <input
          type="text"
          name="productName"
          value={foodItem.productName}
          placeholder="Enter product name"
          onChange={handleChange}
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={foodItem.price}
          placeholder="Enter price"
          onChange={handleChange}
        />

        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={foodItem.category}
          placeholder="Enter category"
          onChange={handleChange}
        />

        <label>Bestseller:</label>
        <input
          type="checkbox"
          name="bestseller"
          checked={foodItem.bestseller}
          onChange={handleChange}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={foodItem.description}
          placeholder="Enter description"
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Add Food Item
        </button>
      </form>
    </div>
  );
};

export default Add_FoodItems;

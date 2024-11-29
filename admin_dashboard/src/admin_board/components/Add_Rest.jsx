import React, { useState } from "react";
import "./Styles/Add_Rest.css";

const Add_Rest = () => {
  const [restaurantType, setRestaurantType] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleRadioChange = (e) => {
    setRestaurantType(e.target.value);
  };

  return (
    <div className="add-rest-container">
      <h1> Restaurent </h1>
      <form className="add-rest-form">
        <label>Restaurant Name:</label>
        <input type="text" placeholder="Enter restaurant name" />

        <label>Address:</label>
        <input type="text" placeholder="Enter address" />

        <label>Category:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="Veg"
              checked={restaurantType === "Veg"}
              onChange={handleRadioChange}
            />
            Veg
          </label>
          <label>
            <input
              type="radio"
              value="Non-Veg"
              checked={restaurantType === "Non-Veg"}
              onChange={handleRadioChange}
            />
            Non-Veg
          </label>
          <label>
            <input
              type="radio"
              value="Both"
              checked={restaurantType === "Both"}
              onChange={handleRadioChange}
            />
            Both
          </label>
        </div>

        <label>Restaurant Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && (
          <div className="image-preview">
            <img src={image} alt="Restaurant" />
          </div>
        )}

        <label>Phone Number of Owner:</label>
        <input type="text" placeholder="Enter owner's phone number" />

        <button type="submit" className="submit-btn">
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default Add_Rest;

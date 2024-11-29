import React from "react";
import "../Styles/Admin_Login.css";
const Admin_Register = () => {
  return (
    <div className="admin-login">
      <h1>Admin Register</h1>
      <form>
        <label>UserName:</label>
        <input type="text" name="UserName" placeholder="Enter UserName" />
        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter Yout Email" />
        <label>Password:</label>
        <input type="password" name="password" />
        <label>Confirm Password:</label>
        <input type="password" name="password" />
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Admin_Register;

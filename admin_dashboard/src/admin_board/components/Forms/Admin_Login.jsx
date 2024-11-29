import React from "react";
import "../Styles/Admin_Login.css";

const Admin_Login = () => {
  return (
    <div className="admin-login">
      <h1>Admin Login</h1>
      <form>
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Password:</label>
        <input type="password" name="password" />
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Admin_Login;

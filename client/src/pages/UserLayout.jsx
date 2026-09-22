//import React from "react";
import "./UserLayout.css";
export default function UserLayout() {
  return (
    <div>
      <h2 id="heading">My Shopping Cart</h2>
      <nav>
        <a href="/mycart">MyCart</a>
        <a href="/myorders">MyOrders</a>
        <a href="/settings"></a>Setting<a href="/profile">Proffile</a>
        <a href="/logout">LogOut</a>
      </nav>
    </div>
  );
}

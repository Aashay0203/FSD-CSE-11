//import { useState } from "react";
//import heroImg from "./assets/hero.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserLayout from "./pages/UserLayout.jsx";
import ItemStore from "./pages/ItemStore.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <UserLayout />
                <ItemStore />
              </>
            }
          />
          <Route path="/mycart" element={<h2>Mycart</h2>} />
          <Route path="/profile" element={<h2>Profile</h2>} />
          <Route path="/setting" element={<h2>Setting</h2>} />
          <Route path="/admin" element={<h2>Admin</h2>} />
          <Route path="/logout" element={<h2>Mycart</h2>} />
          <Route path="/element" element={<h2>Element</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route, NavLink } from "react-router-dom"; // <-- No Router here
import ShoppingCart from "./components/ShoppingCart";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  return (
    <div className="app-background">
      <div className="app-container">

        {/* Header */}
        <header className="app-header">
          <h1 className="app-title">Shopping & To-Do App</h1>

          {/* Navigation */}
          <nav className="app-nav">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Shopping Cart
            </NavLink>

            <NavLink
              to="/todo"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              To-Do App
            </NavLink>
          </nav>
        </header>

        {/* Main Content */}
        <main className="app-main">
          <Routes>
            <Route
              path="/"
              element={
                <h2 style={{ textAlign: "center", opacity: 0.8 }}>
                  Click a menu option to begin
                </h2>
              }
            />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/todo" element={<TodoList />} />
            <Route
              path="*"
              element={
                <h2 style={{ textAlign: "center", opacity: 0.6 }}>
                  Page not found
                </h2>
              }
            />
          </Routes>
        </main>

      </div>
    </div>
  );
}

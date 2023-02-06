import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/" style={{ textDecoration: 'none' }}>
        <h1>SongNotes</h1>
        </a>
      </div>
      <div className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/log-in">Log In</a>
          /
            <a href="/sign-up">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

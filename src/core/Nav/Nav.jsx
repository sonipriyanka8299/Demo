import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";


function template() {
  return (
    <div className="nav">
      <h1>Nav</h1>
      <nav>
      <ul>
        <li><Link  exact activeClassName="active" to="/home">Aaaa</Link></li>
        <li><Link activeClassName="active" to="/about">Bbbb</Link></li>
        <li><Link  activeClassName="active" to="/contact">Ccccc</Link></li>
      </ul>
      </nav>
    </div>
  );
};

export default template;

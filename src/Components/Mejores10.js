import React, { Component, component } from "react";
import axios from "axios";

const Mejores10 = ({ Best10 }) => {
    
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Plataforma</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {Best10.map((item) => (
          <tr key={item.name}>
            <th>{item.name}</th>
            <th>{item.platform}</th>
            <th>{item.meta_score}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Mejores10;
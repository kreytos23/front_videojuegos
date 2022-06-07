import React, { Component, component } from "react";
import axios from "axios";

const ListGames = ({ Games }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Consola</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {Games.map((Games) => (
          <tr key={Games.Consola}>
            <th>{Games.Consola}</th>
            <th>{Games.Cuantity}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListGames;

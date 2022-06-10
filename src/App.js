import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import{
  BrowserRouter,
  Route,
  Routes
}from "react-router-dom";

import TJuegosPorPlataforma from "./Components/TJuegosPorPlataforma";
import GJuegosPorPlataforma from "./Components/GJuegosPorPlataforma";
import TJuegosPorYear from "./Components/TJuegosPorYear";
import GJuegosPorYear from "./Components/GJuegosPorYear";
import TJuegosMetaScore from "./Components/TJuegosMetaScore";
import GJuegosMetaScore from "./Components/GJuegosMetaScore";
import T10mejores from "./Components/T10mejores";
import TJuegosUserScore from "./Components/TJuegosUserScore";
import T10Peores from "./Components/T10Peores";
import GJuegosUserScore from "./Components/GJuegosUserScore";





function App() {
  return (
  
      <BrowserRouter>
        
        <Routes>
          <Route path="/TJuegosPorPlataforma" element={<TJuegosPorPlataforma />}/>
          <Route path="/GJuegosPorPlataforma" element={<GJuegosPorPlataforma />}/>
          <Route path="/TJuegosPorYear" element={<TJuegosPorYear />}/>
          <Route path="/GJuegosPorYear" element={<GJuegosPorYear/>}/>
          <Route path="/TJuegosMetaScore" element={<TJuegosMetaScore />}/>
          <Route path="/GJuegosMetaScore" element={<GJuegosMetaScore />}/>
          <Route path="/T10mejores" element={<T10mejores />}/>
          <Route path="/T10Peores" element={<T10Peores />}/>
          <Route path="/TJuegosUserScore" element={<TJuegosUserScore />}/>
          <Route path="/GJuegosUserScore" element={<GJuegosUserScore />}/>
         
          
        </Routes>
       
      </BrowserRouter>
  );
}

export default App;

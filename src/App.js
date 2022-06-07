import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import ListGames from "./Components/ListGames";
import Mejores10 from "./Components/Mejores10";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

import Playstation4 from "./Components/Playstation4";
import Juegosporaño from "./Components/Juegosporaño";
import Plataforma2bd from "./Components/Plataforma2bd";
import Listad from "./Components/Listad";

function App() {
  const [plataforma, setplataforma] = useState([]);
  const [cantidad, setcantidad] = useState([]);

  const data = {
    labels: plataforma,
    datasets: [
      {
        label: "Cantidad",
        /*
      backgroundColor:'rgba(0,255,0,1)',
      borderColor: 'black',
      borderwidth: 1,
      hoverBackgroundColor: 'rgba(0,255,0,0.2)',
      hoverBorderColor:'#FF0000',
      */
        backgroundColor: ["green"],
        data: cantidad,
      },
    ],
  };

  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
  };

  const peticionAPI = async () => {
    await axios
      .get("https://backend-games-mysql.herokuapp.com/getgame/platform")
      .then((response) => {
        var respuesta = response.data;
        var auxplataforma = [],
          auxcantidad = [];

        respuesta.map((elemento) => {
          auxplataforma.push(elemento.Consola);
          auxcantidad.push(elemento.Cuantity);
        });
        setplataforma(auxplataforma);
        setcantidad(auxcantidad);
      });
  };

  useEffect(() => {
    peticionAPI();
  }, []);

  const [Fecha, setFecha] = useState([]);
  const [cantidad1, setcantidad1] = useState([]);

  const data1 = {
    labels: Fecha,
    datasets: [
      {
        label: "Cantidad",
        /*
    backgroundColor:'rgba(0,255,0,1)',
    borderColor: 'black',
    borderwidth: 1,
    hoverBackgroundColor: 'rgba(0,255,0,0.2)',
    hoverBorderColor:'#FF0000',
    */
        //backgroundColor:[''],
        data: cantidad1,
      },
    ],
  };

  const opciones1 = {
    maintainAspectRatio: false,
    responsive: true,
  };

  const peticionAPI1 = async () => {
    await axios
      .get("https://backend-games-mysql.herokuapp.com/getGame")
      .then((response) => {
        var respuesta1 = response.data;
        var auxfecha = [],
          auxcantidad1 = [];

        respuesta1.map((elemento1) => {
          auxfecha.push(elemento1.Date);
          auxcantidad1.push(elemento1.Cuantity);
        });
        setFecha(auxfecha);
        setcantidad1(auxcantidad1);
      });
  };

  useEffect(() => {
    peticionAPI1();
  }, []);

  /*

const [dropdown, setdropdown]=useState(false);

const abrircerrardropdown=()=>{
  setdropdown(!dropdown);
}

*/

  const [Games, setGames] = useState([]);

  useEffect(() => {
    const getGames = () => {
      fetch("https://backend-games-mysql.herokuapp.com/getgame/platform")
        .then((res) => res.json())
        .then((res) => setGames(res));
    };

    getGames();
  }, []);

  const [PS4, setPS4] = useState([]);

  useEffect(() => {
    const getPS4 = () => {
      fetch("https://backend-games-mysql.herokuapp.com/mongo/get/playstation4")
        .then((res) => res.json())
        .then((res) => setPS4(res));
    };

    getPS4();
  }, []);

  const [GAMESFORYEAR, setGAMESFORYEAR] = useState([]);

  useEffect(() => {
    const getGAMESFORYEAR = () => {
      fetch("https://backend-games-mysql.herokuapp.com/mongo/get/date/count")
        .then((res) => res.json())
        .then((res) => setGAMESFORYEAR(res));
    };

    getGAMESFORYEAR();
  }, []);

  ////////////////////////////////////////////////////////////////

  const [array1, setarray1] = useState([]);

  useEffect(() => {
    const getarray1 = () => {
      fetch("https://backend-games-mysql.herokuapp.com/mysql/count/year")
        .then((res) => res.json())
        .then((res) => setarray1(res));
    };

    getarray1();
  }, []);

  const [array2, setarray2] = useState([]);

  useEffect(() => {
    const getarray2 = () => {
      fetch("https://backend-games-mysql.herokuapp.com/mongo/count/year")
        .then((res) => res.json())
        .then((res) => setarray2(res));
    };

    getarray2();
  }, []);

  const array3 = array1.concat(array2);
  ////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////

  const [PlataformaD, setPlataformaD] = useState([]);

  useEffect(() => {
    const getPlataformaD = () => {
      fetch("https://backend-games-mysql.herokuapp.com/mysql/count/platform")
        .then((res) => res.json())
        .then((res) => setPlataformaD(res));
    };

    getPlataformaD();
  }, []);

  const [PlataformaD2, setPlataformaD2] = useState([]);

  useEffect(() => {
    const getPlataformaD2 = () => {
      fetch("https://backend-games-mysql.herokuapp.com/mongo/count/platform")
        .then((res) => res.json())
        .then((res) => setPlataformaD2(res));
    };

    getPlataformaD2();
  }, []);

  let [Best10Mongo, setBest10Mongo] = useState([]);

  useEffect(() => {
    const getBest10Mongo = () => {
      fetch("https://backend-games-mysql.herokuapp.com/mongo/best")
        .then((res) => res.json())
        .then((res) => setBest10Mongo(res));
    };

    getBest10Mongo();
  }, []);

  let [Best10MySql, setBest10MySql] = useState([]);

  useEffect(() => {
    const getBest10MySql = () => {
      fetch("https://backend-games-mysql.herokuapp.com/mysql/best")
        .then((res) => res.json())
        .then((res) => setBest10MySql(res));
    };

    getBest10MySql();
  }, []);

  function sumarConsolas() {
    let nuevo = [];
    PlataformaD.map((item) => {
      for (let index = 0; index < PlataformaD2.length; index++) {
        if (
          item.Consola ==
          PlataformaD2[index].Platform.substring(
            1,
            PlataformaD2[index].Platform.length
          )
        ) {
          let aux = {
            Consola: item.Consola,
            Cuantity: item.Cuantity + PlataformaD2[index].Cuantity,
          };
          nuevo.push(aux);
        }
      }
    });
    return nuevo;
  }

  function ordenarAsc(array1,array2,key, orden) {
    let aux = array1.concat(array2);
    console.log(aux);
    return aux.sort(function (a, b) {
      var x = a[key],
        y = b[key];

      if (orden === "asc") {
        return x < y ? -1 : x > y ? 1 : 0;
      }

      if (orden === "desc") {
        return x > y ? -1 : x < y ? 1 : 0;
      }
    });
  }

  //////////////////////////////////////////////////////////////////

  return (
    /*
    <div className="App" style={{width: '30%', heigth: '100px'}}>
      <h2>Poblacion</h2>
       <Bar data={data} />
    </div>
*/
    <Fragment>
      <Navbar brand="Juegos" />

      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: "center" }}>Lista de Juegos</h2>
            <ListGames Games={Games} />
            <Pie data={data} />
            <Juegosporaño GAMESFORYEAR={GAMESFORYEAR} />
            <Plataforma2bd array3={array3} />
            <Listad PlataformaD={sumarConsolas()} />
            <Mejores10 Best10={ordenarAsc(Best10Mongo, Best10MySql, "meta_score", 'desc')}/>
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: "center" }}>PS4</h2>
            <Playstation4 PS4={PS4} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

import React, {useState, useEffect} from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

const GJuegosPorYear= () => {

    let plataforma;
    let cantidad;

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



    var auxplataforma = [], auxcantidad = [];
    
            array3.map((array3) => {
              auxplataforma.push(array3.Date);
              auxcantidad.push(array3.Cuantity);
            });
            plataforma=auxplataforma;
            cantidad=auxcantidad;

  
  
    const data = {
      labels: plataforma,
      datasets: [
        {
          label: "Cantidad de juegos",
          /*
        backgroundColor:'rgba(0,255,0,1)',
        borderColor: 'black',
        borderwidth: 1,
        hoverBackgroundColor: 'rgba(0,255,0,0.2)',
        hoverBorderColor:'#FF0000',
        */
          backgroundColor: [
            'rgba(254, 19, 1 , 0.9)',
            'rgba(1, 25, 254 , 0.9)',
            
            
            ],
          data: cantidad
        }]
    };
 



return (

    <div className="App" style={{width: '80%', heigth: '100px'}}>
    
    <h2 style={{ textAlign: "center" }}>Cantidad de juegos por año</h2>
    <Bar data={data}/>
  </div>

);

};

export default GJuegosPorYear;
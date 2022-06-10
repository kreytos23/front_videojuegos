import React, {useState, useEffect} from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";


const GJuegosUserScore= () => {
    let score;
    let cantidad;

    const [PlataformaD, setPlataformaD] = useState([]);
    
        useEffect(() => {
          const getPlataformaD = () => {
            fetch("https://backend-games-mysql.herokuapp.com/mysql/count/userscore")
              .then((res) => res.json())
              .then((res) => setPlataformaD(res));
          };
      
          getPlataformaD();
        }, []);
      
        const [PlataformaD2, setPlataformaD2] = useState([]);
      
        useEffect(() => {
          const getPlataformaD2 = () => {
            fetch("https://backend-games-mysql.herokuapp.com/mongo/count/userscore")
              .then((res) => res.json())
              .then((res) => setPlataformaD2(res));
          };
      
          getPlataformaD2();
        }, []);
    
    
        function sumarConsolas() {
            let nuevo = [];
          
            PlataformaD.map((item) => {
              for (let index = 0; index < PlataformaD2.length; index++) {
                if (
                  item.user_score==
                  PlataformaD2[index].user_review
                ) 
                {
                  let aux = {
                    user_score: item.user_score,
                    Cuantity: item.Cuantity + PlataformaD2[index].Cuantity,
                  };
                  nuevo.push(aux);
                }
              }
            });
            return nuevo;
          }



          var auxplataforma = [], auxcantidad = [];
    
          sumarConsolas().map((sumarConsolas) => {
            auxplataforma.push(sumarConsolas.user_score);
            auxcantidad.push(sumarConsolas.Cuantity);
          });
          score=auxplataforma;
          cantidad=auxcantidad;



  const data = {
    labels: score,
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
        backgroundColor: ['rgba(254, 141, 0, 0.9)',
        'rgba(0, 113, 254 , 0.9)',],
        data: cantidad
      }]
  };



 

return (
<div className="App" style={{width: '80%', heigth: '100px'}}>
    
    <h2 style={{ textAlign: "center" }}>Cantidad de juegos por user score</h2>
    <Bar data={data}/>
  </div>
    

);

};

export default GJuegosUserScore;
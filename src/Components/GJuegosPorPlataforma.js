import React, {useState, useEffect} from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";


const GJuegosPorPlataforma = () => {


    let plataforma;
    let cantidad;

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




            var auxplataforma = [], auxcantidad = [];
    
            sumarConsolas().map((sumarConsolas) => {
              auxplataforma.push(sumarConsolas.Consola);
              auxcantidad.push(sumarConsolas.Cuantity);
            });
            plataforma=auxplataforma;
            cantidad=auxcantidad;

  
  
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
        
       
          backgroundColor: [
            'rgba(255, 99, 132, 0.9)',
            'rgba(255, 159, 64, 0.9)',
            'rgba(255, 205, 86, 0.9)',
            'rgba(75, 192, 192, 0.9)',
            'rgba(54, 162, 235, 0.9)',
            'rgba(153, 102, 255, 0.9)',
            'rgba(201, 203, 207, 0.9)',
            'rgba( 150, 211, 27 , 0.9)',
            'rgba( 23, 148, 86 , 0.9)',
            'rgba( 120, 39, 191 , 0.9)',
            'rgba(185, 30, 171, 0.9)',
            'rgba(223, 244, 34 , 0.9)',
            'rgba(234, 67, 54 , 0.9)',
            'rgba(85, 127, 140 , 0.9)',
            'rgba( 167, 246, 144 , 0.9)',
            'rgba(0, 254, 241  , 0.9)',
            'rgba(0, 32, 254  , 0.9)',
            'rgba(251, 7, 25  , 0.9)',
            'rgba(72, 160, 10, 0.9)',
            'rgba(74, 30, 185 , 0.9)',
            ],
          data: cantidad
        }]
    };
 
  
 
    


return (

    <div className="App" style={{width: '50%', heigth: '100px'}}>
    
    <h2 style={{ textAlign: "center" }}>Cantidad de juegos por plataforma</h2>
    <Pie data={data}/>
  </div>



);



};

export default GJuegosPorPlataforma;
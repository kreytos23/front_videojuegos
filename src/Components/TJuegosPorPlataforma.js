import React, {useState, useEffect} from "react";


const TJuegosPorPlataforma = () => {

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




  return (
    <table className="table">
      <thead>
        <tr>
          <th>Plataforma</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
      {sumarConsolas().map((sumarConsolas) => (
          <tr key={sumarConsolas.Consola}>
            <th>{sumarConsolas.Consola}</th>
            <th>{sumarConsolas.Cuantity}</th>
            
          </tr>
        ))}
      </tbody>
    </table>
    



  );
};

export default TJuegosPorPlataforma;
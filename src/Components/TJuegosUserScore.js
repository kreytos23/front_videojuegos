import React, {useState, useEffect} from "react";


const TJuegosUserScore= () => {

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



return (

    <table className="table">
      <thead>
        <tr>
          <th>User Score</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
      {sumarConsolas().map((sumarConsolas) => (
          <tr key={sumarConsolas.user_score}>
            <th>{sumarConsolas.user_score}</th>
            <th>{sumarConsolas.Cuantity}</th>
            
          </tr>
        ))}
      </tbody>
    </table>

);

};

export default TJuegosUserScore;
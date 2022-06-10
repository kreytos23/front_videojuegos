import React, {useState, useEffect} from "react";


const TJuegosMetaScore= () => {

    
        const [PlataformaD, setPlataformaD] = useState([]);
    
        useEffect(() => {
          const getPlataformaD = () => {
            fetch("https://backend-games-mysql.herokuapp.com/mysql/count/metascore")
              .then((res) => res.json())
              .then((res) => setPlataformaD(res));
          };
      
          getPlataformaD();
        }, []);
      
        const [PlataformaD2, setPlataformaD2] = useState([]);
      
        useEffect(() => {
          const getPlataformaD2 = () => {
            fetch("https://backend-games-mysql.herokuapp.com/mongo/count/metascore")
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
                  item.meta_score==
                  PlataformaD2[index].meta_score
                ) 
                {
                  let aux = {
                    meta_score: item.meta_score,
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
          <th>Meta Score</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
      {sumarConsolas().map((sumarConsolas) => (
          <tr key={sumarConsolas.meta_score}>
            <th>{sumarConsolas.meta_score}</th>
            <th>{sumarConsolas.Cuantity}</th>
            
          </tr>
        ))}
      </tbody>
    </table>
    

);

};

export default TJuegosMetaScore;
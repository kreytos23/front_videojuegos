import React, {useState, useEffect} from "react";


const T10Peores= () => {

    let [Worst10Mongo, setWorst10Mongo] = useState([]);

    useEffect(() => {
      const getWorst10Mongo = () => {
        fetch("https://backend-games-mysql.herokuapp.com/mongo/worst")
          .then((res) => res.json())
          .then((res) => setWorst10Mongo(res));
      };
  
      getWorst10Mongo();
    }, []);
  
    let [Worst10MySql, setWorst10MySql] = useState([]);
  
    useEffect(() => {
      const getWorst10MySql = () => {
        fetch("https://backend-games-mysql.herokuapp.com/mysql/worst")
          .then((res) => res.json())
          .then((res) => setWorst10MySql(res));
      };
  
      getWorst10MySql();
    }, []);
  


    function ordenarAsc(array1,array2,key, orden) {
        let aux = array1.concat(array2);
        //console.log(aux);
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
        {ordenarAsc(Worst10Mongo, Worst10MySql, "meta_score", 'asc').map((item) => (
          <tr key={item.id}>
             <th>{item.name}</th>
            <th>{item.platform}</th>
            <th>{item.meta_score}</th>
          </tr>
        ))}
      </tbody>
    </table>




);

};

export default T10Peores;
import React, {useState, useEffect} from "react";


const T10mejores= () => {

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
        {ordenarAsc(Best10Mongo, Best10MySql, "meta_score", 'desc').map((item) => (
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

export default T10mejores;
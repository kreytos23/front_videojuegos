import React, {useState, useEffect} from "react";


const TJuegosPorYear= () => {

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




return (

<table className="table">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
      {array3.map((array3) => (
          <tr key={array3.Date}>
            <th>{array3.Date}</th>
            <th>{array3.Cuantity}</th>
            
          </tr>
        ))}
      </tbody>
    </table>

);

};

export default TJuegosPorYear;








/*

import React, {useState, useEffect} from "react";


const TJuegosPorAño= () => {


return (

    

);

};

export default TJuegosPorAño;*/
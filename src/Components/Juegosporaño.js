import React, {Component, component} from "react";


const Juegosporaño=({GAMESFORYEAR})=>{

    return (
<table className="table">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Cantidad</th>
                    
                  
                    
                    
                    
                </tr>
            </thead>
            <tbody>
                {GAMESFORYEAR.map(GAMESFORYEAR => (
                    <tr key={GAMESFORYEAR.Date}>
                       <th>{GAMESFORYEAR.Date}</th>
                       <th>{GAMESFORYEAR.Cuantity}</th>
                        
                       
                       

                        
                     

                    </tr>

                )

                )}
                  
                
            </tbody>
        </table>


    );



}

export default Juegosporaño;
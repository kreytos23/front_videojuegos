import React, {Component, component} from "react";
import axios from "axios";




const Listad = ({PlataformaD}) => {


    return(

        <table className="table">
            <thead>
                <tr>
                    <th>Plat</th>
                    <th>Cantidad</th>
                    
                </tr>
            </thead>
            <tbody>
                {PlataformaD.map(PlataformaD=> (
                    <tr key={PlataformaD.Consola}>
                       
                        <th>{PlataformaD.Consola}</th>
                        <th>{PlataformaD.Cuantity}</th>
                     

                    </tr>

                )

                )}
                  
                
            </tbody>
        </table>
    );

    }



    





    
export default Listad;


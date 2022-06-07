import React, {Component, component} from "react";
import axios from "axios";




const Plataforma2bd = ({array3}) => {


    return(

        <table className="table">
            <thead>
                <tr>
                    <th>Echa</th>
                    <th>Cantidad</th>
                    
                </tr>
            </thead>
            <tbody>
                {array3.map(array3=> (
                    <tr key={array3.Date}>
                       
                        <th>{array3.Date}</th>
                        <th>{array3.Cuantity}</th>
                     

                    </tr>

                )

                )}
                  
                
            </tbody>
        </table>
    );

    }



    





    
export default Plataforma2bd;


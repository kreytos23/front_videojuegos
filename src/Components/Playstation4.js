import React, {Component, component} from "react";


const Playstation4=({PS4})=>{

    return (
<table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Plataforma</th>
                  
                    
                    
                    
                </tr>
            </thead>
            <tbody>
                {PS4.map(PS4 => (
                    <tr key={PS4._id}>
                       <th>{PS4._id}</th>
                       <th>{PS4.name}</th>
                        <th>{PS4.platform}</th>
                       
                       

                        
                     

                    </tr>

                )

                )}
                  
                
            </tbody>
        </table>


    );



}

export default Playstation4;
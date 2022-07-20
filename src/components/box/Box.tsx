import React, { FunctionComponent, ReactNode } from "react";
import  "./Box.css";


const Box : FunctionComponent <{ children: ReactNode }> = ({ children }) => {
    return <div className = "Box" >
        <div id="section5">
    <h1> Profile </h1>
    </div>
    <div id="section6">
            <h3>Name         :    Ayush</h3>
            <h3>Father's name:    Anil kumar</h3>
            <h3>College      :    Arya college of engineering and researh center</h3>
            <h3>Education    :    Computer science enigineering</h3>
            </div>

    {children} </div>;

};
      


export default Box;






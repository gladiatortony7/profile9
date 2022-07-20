import React, { FunctionComponent, ReactNode } from "react";
import  "./Grid.css";
import cn from "classnames";


const Grid : FunctionComponent <{ 
    children: ReactNode;
    container?: boolean;
    item?: boolean;

}> = ({ children, container, item }) => {
    const classNames =cn({
        "grid_container" : container,
        "grid_item": item,
    });
    return <div className = "Grid" >{children} 
            <div className="grid-container">
  
  </div>
        <div id="section3">
             <h1>Profile</h1>
        </div>
        <div id="section4">   
            <h3>Name         :    Ayush</h3>
            <h3>Father's name:    Anil kumar</h3>
            <h3>College      :    Arya college of engineering and researh center</h3>
            <h3>Education    :    computer science enigineering</h3>
        </div>

    {children} </div>;
}


      


export default Grid;
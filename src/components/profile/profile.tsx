import React,{Component} from 'react';
import "./profile.css";

export class Profile extends Component {
    render(): JSX.Element{
        return(
            <div className= "try">
            <div id="section1">
            <h1> Profile </h1>
            </div>
            <div id="section2">
            <h3>Name         :    Ayush</h3>
            <h3>Father's name:    Anil kumar</h3>
            <h3>College      :    Arya college of engineering and researh center</h3>
            <h3>Education    :    computer science enigineering</h3>
            </div>
            </div>
        )
    }
}

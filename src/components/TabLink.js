import React,{Component} from "react";
import {Link} from "react-router-dom";


export default class TabLink extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="tablink-style link-style">
                
                 <Link className="styling-links" to="/">
                        Hotels
                    </Link>
                    <Link className="styling-links" to="/Flights">
                        Flights
                    </Link>
                    <Link className="styling-links" to="/Cars">
                        Cars
                    </Link>
                    <Link className="styling-links" to="/ThingsToDo">
                        Things to do
                    </Link>
            </div>
        );
    }
}
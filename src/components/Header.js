import React, {Component} from "react";

export default class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="header">
                <img src="https://raw.githubusercontent.com/islo123/TravelHelper13/master/th-logo.JPG" alt="TravelHelper logo"/>
                <h1>TravelHelper</h1>
            </div>
        );
    }
}
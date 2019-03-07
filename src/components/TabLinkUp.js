import React,{Component} from "react";
import {Link} from "react-router-dom"; 

export default class TabLinkUp extends Component{
        constructor(props){
            super(props);
        }
        render(){
            return(
                <div className="tablink-style link-style1">
                    <Link to="">
                        My list
                    </Link>
                    <Link to="">
                        Support
                    </Link>
                    <Link to="">
                        Create acount
                    </Link>
                    <Link to="">
                        Log in
                    </Link>
                </div>
            );
        }
}
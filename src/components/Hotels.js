import React,{Component} from "react";

export default class Hotels extends Component{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    
    render(){
        return(
            <div className="hotel-style">
                <h1 >Search Hotels</h1>
                <form>
                    <label>
                                Going to <br/>
                                <input type="text" name="place" value={this.state.value} onChange={this.handleChange}/>
                        <div className="hotel-check-in-style">  
                            <div>
                                Check-in <br/>
                                <input type="date"  name="trip-start"/>
                            </div> 
                            <div>
                                Check-out <br/>
                                <input  type="date"  name="trip-start"/>
                            </div>
                        </div>
                                <br/>
                                <br/>
                                <input type="submit" value="Submit"/>
                    </label>
                </form>
            </div>
        );
    }
}
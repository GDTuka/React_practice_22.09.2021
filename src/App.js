import { Component } from "react";

class AddPass extends Component{
    render(){
       
        return <div>
            <h1>Генератор паролей</h1>
            <input type="password" id='addPass'></input>
            <button className="btn1"></button>
            <div className="newPass"></div>
        </div>
        
    }
}
export default AddPass

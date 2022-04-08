import React from "react";
import Footer from "../../components/Footer";
class Demo extends React.Component{
    constructor(){
        super();
        this.getMsg = this.getMsg.bind(this)
    }
    render(){
        return(
            <div>demo
                <Footer msg="123" getMsg ={this.getMsg}/>
            </div>
            
        )
    };
    getMsg(data){
        console.log(data)
    }
};

export default Demo;

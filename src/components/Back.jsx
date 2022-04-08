import React from "react";
import { NavLink } from "react-router-dom";
import 'components/Back.scss'
class Back extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <NavLink className="back" to={-1}>返回</NavLink>
        )
    }
}
export default Back
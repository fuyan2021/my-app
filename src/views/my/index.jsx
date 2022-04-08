import React, { useState, useRef } from "react";
import Footer from "../../components/Footer";
import "../../style/common.scss"
import "../../style/reset.scss"
import "./my.scss"
import "../../style/iconfont.scss"
import LoginC from "./login/loginC";
// ant
import { useLocation, NavLink } from "react-router-dom";

export function My() {

    const location = useLocation();
    const childRef = useRef();

    // this.state = {
    //     list: [

    //     ],
    //     phone: '',
    //     a_style: 'ml-10 fff f16',
    //     phone_style: 'ml-10 fff f16 dsn'
    // }
    let [a_style, set_a] = useState('ml-10 fff f16');
    let [phone_style, set_phone_style] = useState('ml-10 fff f16 dsn');
    let [phone, setP] = useState('')
    // componentDidMount() {
    //     let p = location.state.phone;
    //     console.log(location.state);
    //     if (p) {
    //         this.setState({
    //             phone: p,
    //             phone_style: 'ml-10 fff f16',
    //             a: "ml-10 fff f16 dsn"
    //         })
    //     } else {

    //     }

    // }


    React.useEffect(() => {
        let state = location.state;  
        if (state) {
            childRef.current.upDate(state.phone)
        }
    })

    return (
        <div className="my-center">
            <LoginC ref={childRef}></LoginC>
            <div className="bg-fff pl-15 pr-15">
                <div className="item mt-10 bg-fff flex aic jc-sb">
                    <span>我的订单</span>
                    <span className="f888 icon iconfont f18 icon-yuanquanyoujiantou am-icon-md"> </span>
                </div>
                <div className="item bg-fff flex aic jc-sb">
                    <span>我的共享卡</span>
                    <span className="f888 icon iconfont f18 icon-yuanquanyoujiantou am-icon-md"> </span>
                </div>
                <div
                    className="item bg-fff flex aic jc-sb">
                    <span>我的优惠劵</span>
                    <span className="f888 icon iconfont f18 icon-yuanquanyoujiantou am-icon-md"></span>
                </div>
                <NavLink className="item bg-fff flex aic jc-sb" to="/my/love"> <span>我想去</span>
                    <span className="f888 icon iconfont f18 icon-yuanquanyoujiantou am-icon-md"> </span>
                </NavLink>
                <NavLink className="item bg-fff flex aic jc-sb" to="/my/foot">
                    <span>我的足迹</span>
                    <span className="f888 icon iconfont f18 icon-yuanquanyoujiantou am-icon-md"> </span>
                </NavLink>
                <NavLink className="item bg-fff flex aic jc-sb" to="/my/set">
                    <span>设置</span>
                    <span className="f888 icon iconfont f18 icon-yuanquanyoujiantou am-icon-md"> </span>
                </NavLink>
            </div>

            <Footer></Footer>
        </div>
    )


}

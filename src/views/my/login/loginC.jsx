import React, { useState, useImperativeHandle, forwardRef } from "react";
import { useLocation } from "react-router-dom";
import '../my.scss'
const LoginC = forwardRef((props, ref) => {
    let [a_style, set_a] = useState('ml-10 fff f16');
    let [phone_style, set_phone_style] = useState('ml-10 fff f16 dsn');
    let [phone, setP] = useState('')
    useImperativeHandle(ref, () => ({
        upDate
    }))
    const upDate = (phone) => {
        if (phone) {
            setP(phone)
            set_phone_style('ml-10 fff f16')
            set_a("ml-10 fff f16 dsn")
        } else {
            set_phone_style('ml-10 fff f16 dsn')
            set_a("ml-10 fff f16")
        }
    }
    return (
        <div className="header flex aic pt-20 pb-20">
            <img className="avatar ml-30" src={require("../../../img/avatar.png")} alt="" />
            <a className={a_style} href="/my/login">立即登录</a>
            <span className={phone_style}>{phone}</span>
        </div>
    )
})
export default LoginC
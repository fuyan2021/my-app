import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
class Footer extends React.Component {
  render() {
    let { msg, getMsg } = this.props;
    return (
      <footer className="fixed flex jc-sa aic footer bg-fff">
        <Link to="/home">
          <img src={require('img/home.png')} alt="" />
          <span>首页</span>
        </Link>
        <Link to="/target">
          <img src={require('img/xingqiu.png')} alt="" />

          <span>目的地</span></Link>
        <Link to="/need">
          <img src={require('img/tijiao.png')} alt="" />

          <span>提交需求</span></Link>
        <Link to="/demo">
          <img src={require('img/xingqiu.png')} alt="" />

          <span>发现</span></Link>
        <Link to="/my">
          <img src={require('img/meing.png')} alt="" />
          <span>我的</span></Link>
      </footer>
    );
  }
}

export default Footer;

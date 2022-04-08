import React from "react";
import Footer from "../../components/Footer";
import 'style/reset.scss'
import 'style/common.scss'
import "./home.scss"
import { $scene } from "api";
import { $cityList } from "api";
import { $recommend } from "api";

import { createBrowserHistory } from "history";
class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            sceneList: [],
            cityList: [],
            recList: [],
            id: 0
        }
        this.getList = this.getList.bind(this);

    }
    componentDidMount() {
        this.getList();
    }

    test() {
        return this.state.recList
    }
    getList() {
        $scene().then((res) => {
            this.setState({
                sceneList: res.result
            })
        })
        $cityList().then((res) => {
            this.setState({
                cityList: res.result
            })
        })
        $recommend().then((res) => {
            this.setState({
                recList: res.result
            })
        })
    }
   
    render() {
        return (
            <div>
                <span>首页</span>
                <div className="house-index">
                    <header className="flex jc-c aic pl-15 pr-15 bg-fff fixed"><img src="http://static.huruqing.cn/villa/logo.png" alt=""></img>
                        <p className="search-box rel ml-30"><input type="text" className="search
                        f14" placeholder="搜索关键字/城市/别墅名" /><i className="icon iconfont icon-search abs"></i></p>
                    </header>
                    <div className="swiper"><img className="w100pc" src="http://static.huruqing.cn/villa/391-14747552.jpg" alt="" /></div>
                    <div className="tuijian bg-fff ovh pb-15">
                        <h3 className="mt-15">热门推荐</h3>
                        <ul className="flex fw">
                            {/* 热门推荐/渲染。。。1 */}
                            {this.state.sceneList.map((item, index) => {
                                return (
                                    <li className="mt-15 flex2 aic item" key={item}>
                                        <img src={item.icon} alt="" />
                                        <span className="f12 mt-5">{item.name}</span></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="hotCity mt-10 bg-fff ovh">
                        <h3 className="flex aic pl-8">热门城市</h3>
                        <ul className="list flex fw">
                            {/* 城市 。。。。2 */}
                            {this.state.cityList.map((city, index) => {
                                return (
                                    <li className="item fcc" key={city}>{city.name}</li>

                                )
                            })}

                        </ul>
                    </div>
                    <div className="target mt-10 bg-fff">
                        <h3 className="h40 flex aic pl-8">目的地推荐</h3>
                    </div>
                </div>
                <ul className="list">
                    {
                        this.state.recList.map((rec, index) => {
                            return (
                                <div key={rec}>
                                    <li className="item">
                                        <div className="img-box rel"><img className="w100pc" src={rec.imageUrl} alt="" />
                                            <span className="h40 fcc price fff abs">{rec.showMinPrice}</span></div>
                                        <div className="desc f14 pb-10">
                                            <h3 className="mt-10 f12">{rec.name}</h3>
                                            <p className="mt-10 f10 lh15">{rec.description}</p>
                                            <p className="city fcc mt-5 f10">{rec.city}{rec.area}</p>
                                        </div>
                                    </li>
                                </div>
                            )
                        })
                    }
                </ul>
                <Footer></Footer>
            </div>
        )
    }

}
export default Home;
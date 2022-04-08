import React, { useEffect, useState } from "react";
import './detail.scss'
import { useLocation, useNavigate } from 'react-router-dom';
export default function Detail () {
        const location = useLocation()
        // let id = location.state.id
        // let [iid,setId] = useState()
        // setId(id)

        return (
            <div className="house-detail rel">
                <p className="heart abs">
                    <span className="iconfont f26 icon-heart"> </span>
                </p>
                <img className="w100pc" alt=""
                    src="https://img.villaday.com/images/house_392/88870280/88870280-10-14757134.jpg" />
                <div className="h70 bg-fff pl-15 pr-15 flex fdc jc-c">
                    <p className="f18 bold">大鹏古城·​千语居7房客栈</p>
                    <p className="mt-10 flex jc-sb f888">
                        <span>7室1厅7卫·120㎡·11床·15人</span>
                        <span>房屋编号：RH-88870280</span>
                    </p>
                </div>
                <div className="h70 bg-fff mt-5 pl-15 pr-15 flex fdc jc-c">
                    <p className="f16 bold location">地理位置</p>
                    <p className="mt-10 f888">较场尾·海角9号沙滩度假别墅</p>
                </div>
                <div
                    className="bg-fff mt-5 pl-15 pr-15 box pb-30">
                    <div className="tabs flex jc-sa aic">
                        <span className="f16 fcc h100pc active">房源详情</span>
                        <span className="f16 fcc h100pc">周边美食娱乐</span>
                        <span className="f16 fcc h100pc">小区环境</span>
                    </div>
                    <p className="mt-20 f14 lh15 f888">
                        <span className="bold">特色: </span>
                        <span>浪漫美景+免费WIFI、电视、齐全设备=完美假期。</span>
                    </p>
                    <div className="mt-20 f14 lh15 f888">
                        <p>1、房型：3层480平米，6房3厅8卫，可住20人；</p>
                        <p> 2、床型：5张1.8米大床、3张1.5米双人床、7张1.2米榻榻米、2张1米单人床； </p>
                    </div>
                    <p className="fcc mt-20">
                        <span className="button base">查看全部</span>
                    </p>
                </div>
                <a className="price fcc f18 bold fff" href="/order/book/88870280">查看价格•预定</a>
            </div>
        )
    
    
}

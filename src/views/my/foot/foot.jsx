import React from "react";
import './foot.scss'
import 'style/common.scss'
import 'style/reset.scss'
import { $foot } from "api";
import Back from "components/Back";
class Foot extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
        this.getList = this.getList.bind(this);

    }
    componentDidMount() {
        this.getList();
    }
    getList() {
        // 足迹列表
        $foot().then((res) => {
            this.setState({
                list: this.fil(res.result)
            })
            console.log(JSON.stringify(this.state.list))

        })

    }
    fil(list) {
        let dateList = list.map(item => item.updateTime);
        let set = new Set(dateList);
        dateList = [...set];
        let newList = [];
        dateList.forEach(date => {
            let subList = list.filter((item) => item.updateTime === date);
            let obj = {
                date,
                subList
            }
            newList.push(obj);
        });
        return newList;
    }
    render() {
        return (
            <div>
                <Back></Back>
                <ul className="list my-zuji">
                    {this.state.list.map((item, index) => {
                        return (
                            <li key={item}>
                                <div className="title flex jc-sb pl-15 pr-15 aic">
                                    <span>{item.date}</span>
                                    <span className="base">清除</span>
                                </div>
                                {item.subList.map((sub) => {
                                    return (
                                        <div className="item pl-10 pr-10 bg-fff flex jc-sb aic" key={sub}>
                                            <img
                                                src={sub.imageUrl}
                                                alt="" />
                                            <div className="t-box fg1 ml-15 f16 pt-5">
                                                <p className="bold">{sub.name}</p>
                                                <p className="mt-10">
                                                    <span>{sub.showMinPrice} </span>
                                                    <span className="f888 ml-5">{sub.showMinAverage}</span>
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </li>
                        )
                    })}


                </ul>
            </div>
        )
    }
}
export default Foot;
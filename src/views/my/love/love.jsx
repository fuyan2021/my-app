import React from "react";
import { $love } from "api";
import 'views/my/love/love.scss'
import Back from "components/Back";
class Love extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
        this.getList = this.getList.bind(this)
    }
    componentDidMount() {
        this.getList()
    }
    getList() {
        $love().then((res) => {
            this.setState({
                list: res.result
            })
        })
    }
    render() {
        return (
            <div>
                <Back></Back>
                <ul className="list my-love">
                    {this.state.list.map((item) => {
                        return (
                            <li className="item pl-10 pr-10 bg-fff flex jc-sb
                aic" key={item}>
                                <img src={item.imageUrl} alt="" />
                                <div className="t-box fg1 ml-15 f14 pt-15 fdc jc-c">
                                    <p className="bold lh15">{item.name}</p>
                                    <p className="mt-10">
                                        <span>{item.showMinPrice}</span>
                                        <span className="f888 ml-5">人均:{item.showMinAverage}</span>
                                    </p>
                                </div>
                            </li>
                        )
                    })}


                    <li className="fcc f888" style={{ height: '50px;' }}>没有更多数据了</li>
                </ul>
            </div>
        )
    }
}
export default Love;
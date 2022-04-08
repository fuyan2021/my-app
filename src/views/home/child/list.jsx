import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'style/common.scss'
import 'style/reset.scss'
import '../home.scss'
function List(props, ref) {
    let [recList, set_recList] = useState([]);
    let navigate = useNavigate()
    // useImperativeHandle(ref, () => {
    //     toList
    // })
    // const toList=(list)=>{
    //     set_recList(list)
    // }
    set_recList(props.test)
    const link = (id) => {
        navigate('/home/detail', { state: { id } })
    }
    return (
        <div>
            <ul>
                {
                    recList.map((rec, index) => {
                        return (
                            <div key={rec}>
                                <li className="item" onClick={link(rec.id)}>
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
        </div>
    )
}

export default List
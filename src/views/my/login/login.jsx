import { $getCode, $login } from "api";
import React ,{useState,useRef} from "react";
import { useHistory,useNavigate } from 'react-router-dom';
import 'views/my/login/login.scss'
export default function Login  () {
    
        // 
        const navigate = useNavigate();
        // this.state = {
        //     phone: '',
        //     code: '',
        //     login_classN: 'login control-button'
        // }
        let [phone,setPhone] = useState('')
        let [code,setCode] = useState('')
        let [login_classN,setLogin_class] = useState('login control-button')

   const handleChange =(e)=> {
        // this.setState({
        //     phone: e.target.value
        // })
        setPhone(e.target.value)
        if (e.target.value) {
            // this.setState({
            //     login_classN: 'cancel control-button'
            // })
            setLogin_class('cancel control-button')
        } else {
            // this.setState({
            //     login_classN: 'login control-button'
            // })
            setLogin_class('login control-button')
        }
    }
   const getCode=()=> {
        // 获取验证码
        if (phone.trim().length != 11) {
            return
        }
        let params = {
            phone
        }
        $getCode(params).then((res) => {
            setCode(res.result.smsCode)
        })
    }
   const toLogin =()=> {
        // 登录
        if (phone && code) {
            let params = {
                phone,
                "smsCode": code
            }
            $login(params).then((res) => {
                if (res.code === 666) {
                    // history.push('/my/' + phone)
                    navigate('/my',{state:{phone:phone}})
                }
            })
        }
    }

    return (
        <div className="content">
            <div className="login-box bg-fff">
                <div className="phone-box flex aic rel">
                    <input 
                        defaultValue={phone}
                        onChange={handleChange}
                        className="phone pl-10 f16 reset-input"
                        type="text" placeholder="请输入手机号，验证或登录" />
                    <div className="clean abs f16 flex aic jc-c">✖</div>
                </div>
                <div className="prove-box flex aic rel">
                    <input 
                        defaultValue={code}
                        className="code f16 pl-10 reset-input"
                        type="text" placeholder="请输入验证码" />
                    <button
                        onClick={getCode}
                        className="get-code fff abs">获 取 验 证 码</button>
                </div>
                <div className="user-control flex jc-sa">
                    <button  className="cancel control-button">取 消</button>
                    <button  className={login_classN}
                        onClick={toLogin}
                    >登 录</button>
                </div>

            </div>
        </div>
    )

}

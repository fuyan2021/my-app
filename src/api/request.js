// axios拦截器
import axios from "axios";
let isDev = process.env.NODE_ENV === "development";
let baseURL;
if (!isDev) {
  baseURL = "http://localhost:3006";
} else {
  baseURL = "http://81.71.65.4:3006";
}
const service = axios.create({
  baseURL,
  timeout: 10 * 60 * 1000,
});

//4. 请求拦截
service.interceptors.request.use(
  (config) => {
      // 暂时写死一个token,为了能拿数据
    config.headers['user-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ3NWMwZWEwZmMwYSIsImNyZWF0ZVRpbWUiOjE2Mjg4NDA2NjQyMDEsInVwZGF0ZVRpbWUiOjE2Mjg4NDA2NjQyMDEsInBob25lIjoiMTM4MDAwMDAwMDAiLCJzbXNDb2RlIjo1OTQ1LCJpYXQiOjE2NDgyODQ2OTIsImV4cCI6MTY1MTg4NDY5Mn0.HcdvRTFBKlU2u_jC0W4zAEbNjnM96zZJb7YcZSHLtEg';
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  (res) => {
    const data = res.data;
    if (data.code != 666) {
      return Promise.reject(data.msg);
    }
    return data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default service;
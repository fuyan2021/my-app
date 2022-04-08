import request from './request';

 // love(收藏)模块
export const $loveChange = (data={})=> {
    return request.post('/love/change',data);
}
export const $loveList = (params={})=> {
    return request.get('love/list',{params});
}
export const $loveDetail = (params={})=> {
    return request.get('love/detail',{params});
} 

// 首页

export const $scene = (()=>{
    return request.get('/house/scene');
})
export const $cityList = (()=>{
    return request.get('/house/city');
})
export const $recommend = (()=>{
    return request.get('/house/recommend');
})
// 我的
export const $foot = (()=>{
    return request.get('/browse/list');
})
export const $love = (()=>{
    return request.get('/love/list');
})
// 登录
export const $getCode = ((params)=>{
    return request.post('/user/getSmsCode',params);
})
export const $login = ((params)=>{
    return request.post('/user/loginBySmsCode',params);
})

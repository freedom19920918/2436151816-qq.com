import axios from 'axios';



//登录
export const loginApi = (params)=>axios.post(`/users/checkLogin`,params);

//获取用户信息
export const getAccountInfoApi = ()=>axios.get(`/users/accountinfo`);
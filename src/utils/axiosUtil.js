import axios from 'axios';
import router from '../router';
import { Message } from 'element-ui';
import qs from 'qs';
axios.defaults.baseURL =`http://127.0.0.1:5000`;


axios.interceptors.request.use((req)=>{
 
    const token  = localStorage.getItem('token');
    if(token){
        req.headers.authorization  =`Bearer ${token}`;
    }
    if(req.method === 'post'){
        req.data = qs.stringify(req.data);
    }
    return req;
});


axios.interceptors.response.use((res)=>{
    console.log('拦截器res.data',res.data)
    return res.data;
},err=>{
console.dir(err)
if(err.response && err.response.status === 401){
    Message({message:'您的token已过期，请重新登录',type:'error'});
    router.replace('/');
}else{
    Message({message:'网络错误',type:'error'});
}
return Promise.reject(err);
    
})
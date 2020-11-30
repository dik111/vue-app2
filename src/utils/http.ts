import axios,{AxiosPromise,AxiosRequestConfig} from "axios";
import baseURL from "@/api/env";
import {getCookie} from "@/utils/cookies";
// 自定义实例
const ins =  axios.create({
    timeout:10000,
    baseURL
})

// 设置拦截器
ins.interceptors.request.use(c => {

    c.headers.common['Authorization'] = getCookie('token')
    return c
})

ins.interceptors.response.use(r =>{
    // 数据格式化
    return r.data
},e => Promise.reject(e))


interface HttpType {
    (url:string,data ?:any,method?:any,config?:AxiosRequestConfig):AxiosPromise<any> | undefined
}
const http:HttpType= (url,data,method='GET',config={
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded'}
})=>{
    // config 就是数据请求所需要的其他配置
    const {headers} = config
    switch (method.toUpperCase()) {
        case 'GET':
            return ins.get(url,{params:data})
        break;
        case 'POST':
            if (headers['Content-Type'] === 'application/json'){
                return ins.post(url,data,config)
            }
            if (headers['Content-Type'] ==='mulitipart/form-data'){
                //文件提交
                const p = new FormData()
                for (let key in data){
                    p.append(key,data[key])
                }
                return ins.post(url,p,config)
            }
            const param = new URLSearchParams()
            for (let key in data){
                param.append(key,data[key])
            }
            return ins.post(url,param,config)
        case 'PUT':
            return ins.put(url,data,config)
            break;
        case 'DELETE':
            return ins.delete(url,config)
            break;
        case 'PATCH':
            return ins.patch(url,data,config)
            break;
        default:
            ins({
                url,
                data,
                ...config
            })
            break;
    }
}
export default http

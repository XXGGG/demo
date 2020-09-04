import axios from  'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080',//baseURL会在发送请求的时候拼接在url参数前面
    timeout: 5000
})


//请求拦截
//所有的网络请求都会先走这个方法
instance.interceptors.request.use(
    function(config){

        // 在这里可以添加token
        // config.headers.token = "token"

        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
)
//响应拦截
instance.interceptors.response.use(
    function(response){
        return response;
    },
    function(err) {
        return Promise.reject(err);
    }
)




export function get(url, params){
    return instance.get(url,{
        params
    });
}
export function post(url, data){
    return instance.post(url,data);
}










// export function get(url, params){
//     return axios.get(url,{
//         params
//     })
// }
// export function post(url, data){
//     return axios.post(url,data)
// }
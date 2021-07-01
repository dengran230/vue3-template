import axios from "axios";
//创建axios的一个实例
var instance = axios.create({
  baseURL: import.meta.env.VITE_APP_URL, //接口统一域名
  timeout: 6000, //设置超时
  headers: {
    "Content-Type": "application/json;charset=UTF-8;",
  },
});

//请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    const token = window.localStorage.getItem("token");
    token && (config.headers.Authorization = token);
    //若请求方式为post，则将data参数转为JSON字符串
    if (config.method === "POST") {
      config.data = JSON.stringify(config.data);
    }
    return config;
  },
  (error) =>
    // 对请求错误做些什么
    Promise.reject(error)
);

//响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    //响应错误
    if (error.response && error.response.status) {
      const status = error.response.status;
      switch (status) {
        case 400:
          console.log("请求错误");
          break;
        case 401:
          console.log("请求错误");
          break;
        case 404:
          console.log("请求地址出错");
          break;
        case 408:
          console.log("请求超时");
          break;
        case 500:
          console.log("服务器内部错误!");
          break;
        case 501:
          console.log("服务未实现!");
          break;
        case 502:
          console.log("网关错误!");
          break;
        case 503:
          console.log("服务不可用!");
          break;
        case 504:
          console.log("网关超时!");
          break;
        case 505:
          console.log("HTTP版本不受支持");
          break;
        default:
          console.log("请求失败");
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default instance;

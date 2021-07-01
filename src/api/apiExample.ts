import axios from "../utils/axios";
//请求示例
//get
export const mokeGet = (data: any) => {
  return axios({
    url: "/api/xxxx",
    method: "get",
    data,
    config: {
      headers: {
        "Request-Type": "wechat",
      },
      timeout: 10000,
    },
  });
};
//post
export const mokePost = (data: any) => {
  return axios({
    url: "/api/xxxx",
    method: "post",
    data,
    config: {
      headers: {
        "Request-Type": "wechat",
      },
      timeout: 10000,
    },
  });
};
// 使用mokeGet(data).then()

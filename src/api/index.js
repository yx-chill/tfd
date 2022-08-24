import axios from "axios";

// axios實例
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8;',
  }
})

// 攔截器
instance.interceptors.response.use((response) => {
  // 請求成功
  return response.data;
}, (error) => {
  // 請求失敗
  if (error.response && error.response.status) {
    const status = error.response.status
    switch (status) {
      case 400:
        console.log('請求錯誤');
        break;
      case 401:
        console.log('請求錯誤');
        break;
      case 404:
        console.log('請求網址錯誤');
        break;
      case 408:
        console.log('請求超時');
        break;
      case 500:
        console.log('伺服器內部錯誤');
        break;
      case 501:
        console.log('伺服器內部錯誤');
        break;
      case 502:
        console.log('網路錯誤');
        break;
      case 503:
        console.log('服務未啟用');
        break;
      case 504:
        console.log('網路超時');
        break;
      case 505:
        console.log('HTTP版本不支援');
        break;
      defaule:
          console.log('請求失敗');
    }
    return Promise.reject(error);
  }
  return Promise.reject(error);
})

export default instance;
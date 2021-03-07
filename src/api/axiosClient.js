import axios from 'axios';

const axiosClient = axios.create({
     baseURL: 'https://movie0706.cybersoft.edu.vn/api',
     headers: {
          'content-type': 'application/json',
     },
    
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
     function (config) {
      let accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZHBuZ3V5ZW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJRdWFuVHJpIiwibmJmIjoxNjA0NzM2NjA2LCJleHAiOjE2MDQ3NDAyMDZ9.qbG6QVtnSuJ_jeboPfq8AWY7rGeU5GMP2bsT6IN3tUU';
      
       // Do something before request is sent
       config.headers.Authorization = `Bearer ${accessToken}`;
       return config;
     },
     function (error) {
       // Do something with request error
       return Promise.reject(error);
     }
   );
   
   // Add a response interceptor
   axiosClient.interceptors.response.use(
     function (response) {
       // Any status code that lie within the range of 2xx cause this function to trigger
       // Do something with response data
       return response.data;
     },
     function (error) {
       // Any status codes that falls outside the range of 2xx cause this function to trigger
       // Do something with response error
       const { config, status, data } = error.response;
       
       const URLS = ['/QuanLyNguoiDung/DangKy', '/QuanLyNguoiDung/DangNhap', '/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung', '/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02'];
       if (URLS.includes(config.url) && status === 400) {
         const errorList = data.data || [];
         const firstError = errorList.length > 0 ? errorList[0] : {};
         const messageList = firstError.messages || [];
         const firstMessage = messageList.length > 0 ? messageList[0] : {};
         throw new Error(firstMessage.message);
       }
       
       
       return Promise.reject(error);
     }
   );

export default axiosClient;
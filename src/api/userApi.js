import axiosClient from './axiosClient';

const userApi = {
  getAll(data){
    const url = '/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02';
    return axiosClient.get(url, data);
  },
  getUserType(data){
    const url = '/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung';
    return axiosClient.get(url, data);
  },
     register(data) {
          const url = '/QuanLyNguoiDung/DangKy';
          return axiosClient.post(url, data);
        },
      
        login(data) {
          const url = '/QuanLyNguoiDung/DangNhap';
          return axiosClient.post(url, data);
        },
}
export default userApi;
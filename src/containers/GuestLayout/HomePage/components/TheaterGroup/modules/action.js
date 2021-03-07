import {
     THEATER_GROUP_REQUEST,
     THEATER_GROUP_SUCCESS,
     THEATER_GROUP_FAILED,
   } from "./constant";
   import Axios from "axios";
   
   export const actTheaterGroupApi = () => {
     return (dispatch) => {
       dispatch(actTheaterGroupRequest());
       Axios({
         url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01',
         method: "GET",
       })
         .then((result) => {
           dispatch(actTheaterGroupSuccess(result.data));
         })
         .catch((err) => {
           dispatch(actTheaterGroupFailed(err));
         });
     };
   };
   
   const actTheaterGroupRequest = () => {
     return {
       type: THEATER_GROUP_REQUEST,
     };
   };
   
   const actTheaterGroupSuccess = (data) => {
     return {
       type: THEATER_GROUP_SUCCESS,
       payload: data,
     };
   };
   
   const actTheaterGroupFailed = (err) => {
     return {
       type: THEATER_GROUP_FAILED,
       payload: err,
     };
   };
   
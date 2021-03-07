import {
  THEATER_GROUP_REQUEST,
  THEATER_GROUP_SUCCESS,
  THEATER_GROUP_FAILED,
   } from "./constant";
   
   let initialState = {
     loading: false,
     data: null,
     err: null,
   };
   
   const theaterGroupReducer = (state = initialState, action) => {
     switch (action.type) {
       case THEATER_GROUP_REQUEST:
         state.loading = true;
         state.data = null;
         state.err = null;
         return { ...state };
   
       case THEATER_GROUP_SUCCESS:
         state.loading = false;
         state.data = action.payload;
         state.err = null;
         return { ...state };
   
       case THEATER_GROUP_FAILED:
         state.loading = false;
         state.data = null;
         state.err = action.payload;
         return { ...state };
       default:
         return { ...state };
     }
   };
   
   export default theaterGroupReducer;
   
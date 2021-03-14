import { combineReducers } from "redux";
import listMovieReducer from '../containers/GuestLayout/HomePage/components/OnTop/modules/reducer';
import detailPageReducer from '../containers/GuestLayout/HomePage/components/SearchBar/modules/reducer';
import theaterGroupReducer from '../containers/GuestLayout/HomePage/components/TheaterGroup/modules/reducer';
import userReducer from '../containers/AuthLayout/userSlice';
import movieDetailsReducer from '../containers/GuestLayout/HomePage/pages/MovieBookingDetail/modules/reducer';


const rootReducer = combineReducers({
    listMovieReducer, detailPageReducer, theaterGroupReducer, userReducer, movieDetailsReducer
});

export default rootReducer;

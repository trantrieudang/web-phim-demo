import { Link } from "@material-ui/core";
import React, { useState ,  useEffect } from "react";
import { NavLink } from "react-router-dom";
import { actListMovieApi } from "../OnTop/modules/action";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { actDetailPageApi } from './modules/action';

function SearchBar() {
  const [movieID, setMovieID] = useState("");
  const [movieName, setMovieName] = useState("Phim");
  const [theaterName, setTheaterName] = useState("Rạp");
  const [indexTheater, setIndexTheater] = useState("");
  const [dateShowTime, setDateShowTime] = useState("Ngày xem");
  const [timeShowTime, setTimeShowTime] = useState("Suất chiếu");
  

  const listMovie = useSelector(
    (state) => ({
      loading: state.listMovieReducer.loading,
      data: state.listMovieReducer.data,
    }),
    shallowEqual
  );

  const listMovieDetail = useSelector(
    (state) => ({
      loading: state.detailPageReducer.loading,
      data: state.detailPageReducer.data,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(actListMovieApi());
    dispatch(actDetailPageApi(movieID));
  }, [dispatch, movieID]);


  const renderListMovie = () => {
    if (listMovie.data !== null) {
   
      return listMovie.data.map((item) => (
        <button
          className="dropdown-item"
          to="/"
          key={item.maPhim}
          value={item.tenPhim}
          onClick={() => {
           return (
             setMovieName(item.tenPhim),
             setMovieID(item.maPhim)
             )
            
          }}
        >
          {item.tenPhim}
        </button>
      ));
    }
  };

 
 
 

  const renderListTheater = () => {
    if (listMovieDetail.data != null ) {
      const { heThongRapChieu } = listMovieDetail.data;
      const listTheater = heThongRapChieu.map(itemParent => itemParent.cumRapChieu.map(itemChild => ({parentID: Math.random(), ...itemChild}))).flat()
      
      return listTheater.map((item, index) => (
        <button
          className="dropdown-item"
          type="button"
          key={item.parentID}
          value={item.tenCumRap}
          onClick={()=>{setTheaterName(item.tenCumRap); setIndexTheater(index)}}
        >
          {item.tenCumRap}
        </button>
      ));
    }
  };

  console.log(indexTheater);
 
  

  const renderDateShowTime = () => {
    
    if(listMovieDetail.data != null) {
      const { heThongRapChieu } = listMovieDetail.data;
      const listTheater = heThongRapChieu.map(itemParent => itemParent.cumRapChieu.map(itemChild => ({parentID: Math.random(), ...itemChild}))).flat()
      
        const options = {  year: 'numeric', month: 'long', day: 'numeric' };
      if(indexTheater !== "") {

       

        const listShowTime = listTheater[indexTheater].lichChieuPhim.map(item => item.ngayChieuGioChieu);
        const listDateShowTime = listShowTime.map(item => new Date(item).toLocaleDateString('vi-VN', options));
        console.log(listDateShowTime);

        const newArrShowTime = listDateShowTime.filter(function(elem, index, self) {
          return index === self.indexOf(elem);
           
      })
        
      console.log(newArrShowTime);
        return newArrShowTime.map((item, index) => (
          <button
            className="dropdown-item"
            
            type="button"
            key={index}
            value={item}
            onClick={()=>(setDateShowTime(item))}
          >
            {item}
          </button>
        ));
      }
      
    }
  
  }

 

  const renderTimeShowTime = () => {
    
    if (listMovieDetail.data != null && indexTheater != null) {
      const { heThongRapChieu } = listMovieDetail.data;
      const listTheater = heThongRapChieu.map(itemParent => itemParent.cumRapChieu.map(itemChild => ({parentID: Math.random(), ...itemChild}))).flat()
      const time = {minute: 'numeric', hour: 'numeric'};
      if(indexTheater !== "" && dateShowTime !== "") {
        const options = {  year: 'numeric', month: 'long', day: 'numeric' };
        const listShowTime2 = listTheater[indexTheater].lichChieuPhim.map(item => item.ngayChieuGioChieu);
        // const listTimeShowTime = listShowTime2.map(item => new Date(item).toLocaleTimeString('vi-VN', time));
        console.log(listShowTime2);
        const newArrTime = listShowTime2.filter(item => (new Date(item).toLocaleDateString('vi-VN', options)) === dateShowTime)
        console.log(newArrTime);
      return newArrTime.map((item, index) => (
        <button
          className="dropdown-item"
          
          type="button"
          key={index}
          value={item}
          onClick={()=>(setTimeShowTime(new Date(item).toLocaleTimeString('vi-VN', time)))}
        >
          
          {new Date(item).toLocaleTimeString('vi-VN', time)}
        </button>
      ));
    }
    }
  }
 
  

  return (
    
    <section className="searchBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="first nav-item active" style={{width: '30%'}}>
              <NavLink
              
                className=" nav-link dropdown-toggle"
                to="/"
                id="selectFilm"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
               
                {movieName}
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="selectFilm" >
                
                  {renderListMovie()}
              </div>
            </li>
            <li className="nav-item dropdown" style={{width: 'calc(70%/4)'}}>
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                id="selectCinema"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {theaterName}
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="selectCinema" style={{height: '200px',}}>
                {renderListTheater()}
              </div>
            </li>
            <li className="nav-item dropdown" style={{width: 'calc(70%/4)', }} > 
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                id="selectDate"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                
              >
                {dateShowTime}
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="selectDate" style={{height: '200px'}}>
                <Link className="dropdown-item"  to="/">
                  {renderDateShowTime()}
                </Link>
              </div>
            </li>
            <li className=" nav-item dropdown" style={{width: 'calc(70%/4)'}}>
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                id="selectSession"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {timeShowTime}
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="selectSession" style={{height: '200px'}}>
                <Link className="dropdown-item" to="/">
                    {renderTimeShowTime()}
                </Link>
              </div>
            </li>
            <button className="btnBuyTicket btn btn-secondary my-2 my-sm-0" type="submit" style={{width: 'calc(70%/4)'}}>
              MUA VÉ NGAY
            </button>
          </ul>
          
            
          
        </div>
      </nav>
    </section>
  );
}

export default SearchBar;

import React, { useState ,  useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { actTheaterGroupApi } from './modules/action';

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function TheaterGroup() {
  
  const [ theaterID, setTheaterID ] = useState(0);
  const [ theaterSubID, setTheaterSubID ] = useState(0);
  
  const listTheater = useSelector(
    (state) => ({
      loading: state.theaterGroupReducer.loading,
      data: state.theaterGroupReducer.data,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actTheaterGroupApi());
    
  }, [dispatch]);

  const renderListTheater1 = () => {
    if (listTheater.data !== null) {
      
      return listTheater.data.map((item, index) => (
        <a
          key={index}
          className={theaterID === index ? "list-group-item list-group-item-action active bg-white" : "list-group-item list-group-item-action bg-white"}
          
          id="list-home-list"
          data-toggle="list"
          href= "#bhd" 
          role="tab"
          aria-controls="home"
          onClick = {() => {setTheaterID(index);setTheaterSubID(0)}}
        >
          <img src={item.logo} alt={item.logo} />
        </a>
      ));
    }
  };
  console.log(theaterSubID);
  const renderListTheater2 = () => {
    
    if (listTheater.data !== null) {
      const { lstCumRap } = listTheater.data[theaterID];
      return lstCumRap.map((item, index) => (
        <a
          className={theaterSubID === index ? "showTime__sublist list-group-item list-group-item-action active d-flex bg-white" : "showTime__sublist list-group-item list-group-item-action d-flex bg-white"}
          id="list-home-list"
          data-toggle="list"
          href="#bhd-1"
          role="tab"
          aria-controls="home"
          onClick = {() => {setTheaterSubID(index)}}
          key={index}
        >
          
          <div className="movieCinema">
            <span className="nameMovieCinema">
              <span className="colorCinema" style={{fontSize: '16px', color: '#ff661f', fontWeight: 'bold'}}>{item.tenCumRap}</span> 
            </span>
            <p className="infoMovieCinema" style={{fontSize: '12px', color: 'black', fontWeight: 'bold', marginBottom: '5px'}}>
            {item.diaChi}
            </p>
            <p className="redDetail" style={{fontSize: '12px', color: 'black', fontWeight: 'bold'}}>
              <Link to="/"> [Chi tiết]</Link>
            </p>
          </div>
        </a>
      ));
    }
  };

  const renderListMovie = () => {
    if (listTheater.data !== null) {
      const { lstCumRap } = listTheater.data[theaterID];
      const {danhSachPhim} = lstCumRap[theaterSubID];
        return (
            <>
            {Array.isArray(danhSachPhim) && danhSachPhim.length
        ? danhSachPhim.map((movie, index) => {
            return <Movie movieData={movie} />;
          })
        : ""}
            </>
        )
    }

  }

  
  const Movie = ({movieData}) => {
    if (listTheater.data !== null) {
      if (!movieData) return null;
  const { lstLichChieuTheoPhim, hinhAnh, tenPhim } = movieData;
      

      return (
        <div className="showTime__movie" >
          <div className="showTime__movie-panel">
            <div className="showTime__movie-pane-top">
              <img src={hinhAnh} alt={hinhAnh} />
              <div className="showTime__movie-pane-top-info">
                <p className="showTime__movie-pane-top-info-name">
                  <span className="showTime__movie-pane-top-info-brand">
                    C{randomInteger(13, 18)}
                  </span>
                  <span className="showTime__movie-pane-top-info-title">
                    {tenPhim}
                  </span>
                </p>
                <p className="showTime__movie-pane-top-info-name-detail">
                {randomInteger(100, 180)} phút - TIX {randomInteger(1, 9)} - IMDb{" "}
                {randomInteger(5, 8)}
                </p>
              </div>
            </div>
            <div className="showTime__movie-pane-bottom ">
              <div className="showTime__movie-pane-bottom-time">
                <div className="showTime__movie-pane-bottom-time-ver">
                  2D Digital
                </div>
                <div className="showTime__movie-pane-bottom-time-sessions" style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                
                  

                    {Array.isArray(lstLichChieuTheoPhim) && lstLichChieuTheoPhim.length
          ? lstLichChieuTheoPhim.map((gioChieu, index) => {
              // const { ngayChieuGioChieu } = gioChieu;
              const day = new Date(gioChieu.ngayChieuGioChieu).getDate();
              const month = new Date(gioChieu.ngayChieuGioChieu).getMonth();
              const year = new Date(gioChieu.ngayChieuGioChieu).getFullYear();
              const hour = new Date(gioChieu.ngayChieuGioChieu).getHours();
              const minute = new Date(gioChieu.ngayChieuGioChieu).getMinutes();
              return (
                <Link
                  to={`/booking/${gioChieu.maLichChieu}`}
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    alignItems: "center",
                    background: "rgba(246,246,246,.5)",
                    border: "1px solid #e4e4e4",
                    marginRight: "10px",
                    fontSize: "14px",
                    padding: "5px",
                    borderRadius: "7px",
                    color: "#9b9b9b",
                  }}
                >
                  <p
                    style={{
                      margin: "unset",
                      color: "green",
                      fontSize: "18px",
                      fontWeight: 500,
                    }}
                  >
                    {hour}:{minute}
                  </p>
                  <p style={{ margin: "0px 5px" }}>||</p>
                  <p style={{ margin: "unset" }}>
                    {day}-{month + 1}-{year}
                  </p>
                </Link>
              );
            })
          : ""}
                    
                    
                  
                    
                
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="showTime" id="showTime_Link">
      <div className="showTime__content container">
        <div className="showTime__detail row">
          <div className="col-1 left-content">
            <div className="list-group" id="list-tab" role="tablist">
              {renderListTheater1()}
            </div>
          </div>
          <div className="col-11 middle-content ">
            <div className="tab-content" id="tab-sublist">
              <div
                className="tab-pane fade show active"
                id="BHDStar"
                role="tabpanel"
                aria-labelledby="list-home-list"
              >
                <div className="showTime__detail-2 row">
                  <div className="col-4 showTime__items-left-2 ">
                    <div className="list-group " id="list-tab" role="tablist">
                      {renderListTheater2()}
                    </div>
                  </div>
                  <div className="col-8  showTime__items-right-2">
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="bhd-1"
                        role="tabpanel"
                        aria-labelledby="list-home-list"
                      >
                        {renderListMovie()}
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
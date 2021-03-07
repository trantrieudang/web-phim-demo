import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link, NavLink } from "react-router-dom";
import star from "../../../../../assets/images/star1.png";
import star2 from "../../../../../assets/images/star1.2.png";
import playIcon from "../../../../../assets/images/play-video.png";
import ModalVideo from "react-modal-video";
import { actListMovieApi } from "./modules/action";
import Loader from "../../../../../components/Loader";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        left: "100%",
        top: "45%",
        width: "50px",
        height: "50px",
        textAlign: "center",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        left: "-100px",
        top: "45%",
        width: "50px",
        height: "50px",
        textAlign: "center",
      }}
      onClick={onClick}
    />
  );
}
export default function OnTop() {
  const [isOpen, setOpen] = useState(false);
  const [video, setVideo] = useState("");
  

  const listMovie = useSelector(
    (state) => ({
      loading: state.listMovieReducer.loading,
      data: state.listMovieReducer.data,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(actListMovieApi());
  }, [dispatch]);

  if (listMovie.data != null) {
    console.log(listMovie.data);
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    arrows: true,
    rows: 2,

    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const renderListMovie = () => {
    const matchYoutubeUrl = (url) => {
      let p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
      return url.match(p) ? RegExp.$1 : false;
    };

    if (listMovie.data != null) {
      console.log(listMovie.data);

      return listMovie.data.map((item) => (
        <div className="filmList_ItemsList" key={item.maPhim}>
          <div className="filmList__tag">
            <Link className="filmList_Link" to={`/movie/${item.maPhim}`}>
              <div
                className="filmList__thumbnail"
                style={{ backgroundImage: `url(${item.hinhAnh})` }}
              >
                <div className="filmList__hoverInfo showHover">
                  <button
                    className="filmList_playTrailer "
                    onClick={() => {
                      setOpen(true);
                      setVideo(matchYoutubeUrl(item.trailer));
                      
                    }}
                  >
                    <img src={playIcon} alt={playIcon} />
                  </button>
                </div>
                <span className="filmList__point">
                  <p className="txtFilmPoint">{item.danhGia}</p>
                  <p className="txtFilmStar">
                    <img src={star} alt={star} />
                    <img src={star} alt={star} />
                    <img src={star} alt={star} />
                    <img src={star} alt={star} />
                    <img src={star2} alt={star2} />
                  </p>
                </span>
                <div className="filmList__type"></div>
              </div>
            </Link>
            <div className="filmList__info">
              <div className="filmList__name hideHover">
                <span className="txtFilmListClass">C18</span> {item.tenPhim}
              </div>
              <div className="filmList__time hideHover">100 phút</div>
              <div className="filmList__hoverBuy showHover">
                <NavLink className="filmList_hoverBuyLink" to="#">
                  <button className="filmList__hoverBuy-BTN btn btn-primary">
                    MUA VÉ
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(true);
  };

  const { loading } = listMovie;
  if (loading) return <Loader />;
  return (
    <section className="filmList" id="filmList_Link">
      
      <div className="filmList__content">
        <div className="col-xl-12 filmList__tittle">
          <ul
            className="nav nav-tabs navCenter justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className={
                  isClick
                    ? "nav-link active filmList__link"
                    : "nav-link filmList__link film__hover"
                }
                href="#DangChieu"
                id="dangChieu-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="dangChieu"
                aria-selected={handleClick}
              >
                Đang Chiếu
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className={
                  isClick
                    ? "nav-link active filmList__link"
                    : "nav-link filmList__link film__hover"
                }
                href="#SapChieu"
                id="sapChieu-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="sapChieu"
                aria-selected={handleClick}
              >
                Sắp chiếu
              </a>
            </li>
          </ul>
        </div>

        <div
          className="tab-content filmList__detail container"
          id="myTabContent"
        >
          <div
            className="tab-pane fade show active filmList__items row"
            id="DangChieu"
            role="tabpanel"
            aria-labelledby="dangChieu-tab"
          >
            <Slider {...settings}>{renderListMovie()}</Slider>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId={video}
              onClose={() => setOpen(false)}
            />
          </div>

          <div
            className="tab-pane fade filmList__items row"
            id="SapChieu"
            role="tabpanel"
            aria-labelledby="sapChieu-tab"
          >
            <Slider {...settings}>{renderListMovie()}</Slider>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId={video}
              onClose={() => setOpen(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

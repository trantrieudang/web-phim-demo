import React, { useState } from "react";
import imgCarousel01 from "../../../../../assets/images/carousel01.png";
import imgCarousel02 from "../../../../../assets/images/carousel02.jpg";
import imgCarousel03 from "../../../../../assets/images/carousel03.jpg";
import imgCarousel04 from "../../../../../assets/images/carousel04.jpg";
import imgCarousel05 from "../../../../../assets/images/carousel05.jpg";
import ModalVideo from 'react-modal-video';
import playIcon from "../../../../../assets/images/play-video.png";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader




const useStyles = makeStyles(() => ({
  imgCarousel: {
    width: "100%",
    backgroudSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    position: "relative",
    top: "60px",
  },
  

  backgroundLinear: {
    position: "absolute",
    width: "100%",
    height: "100%",
    // top: '10px',
    background: "linear-gradient(to top,#000,transparent 20%)",
  },
}));

const carouselItems = [
  {
    id: "1",
    imgUrl: `${imgCarousel01}`,
    linkVideo: "a5JHpCdQ8xA",
    btnTrailer: `${playIcon}`
  },
  {
    id: "2",
    imgUrl: `${imgCarousel02}`,
    linkVideo: "kJcfrHDTSEQ",
    btnTrailer: `${playIcon}`
  },
  {
    id: "3",
    imgUrl: `${imgCarousel03}`,
    linkVideo: "T36HGZagV5w",
    btnTrailer: `${playIcon}`
  },
  {
    id: "4",
    imgUrl: `${imgCarousel04}`,
    linkVideo: "-8k8McNDf5M",
    btnTrailer: `${playIcon}`
  },
  {
    id: "5",
    imgUrl: `${imgCarousel05}`,
    linkVideo: "iCw-LfLw_Zk",
    btnTrailer: `${playIcon}`

  },
];



export default function Carousell() {
  
  
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false)
  const [video, setVideo] = useState('')

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    arrows: true,
    autoplay: true,
    
  };
  

  
  return (
    <>
      <Slider {...settings}

      >
        {carouselItems.map((item) => {
          
          return (
            <div className="carouselBg" key={item.id}>
              <img
                className={classes.imgCarousel}
                src={item.imgUrl}
                alt={item.imgUrl}
              />
              <div className={classes.backgroundLinear}></div>
              <button className="btnTrailer"  type="submit" onClick={() => {
                setOpen(true);
                setVideo(item.linkVideo);
              }} >
                <img src={item.btnTrailer} alt={item.btnTrailer} />
              </button>
              

            </div>

          );
        })}
        

      </Slider>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={video} onClose={() => setOpen(false)} />
    </>
  );
}

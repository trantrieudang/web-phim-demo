import React from 'react';
import { Link } from 'react-router-dom';
import MobileFrame from '../../../../../assets/images/mobile.png';
import MobileSlide1 from "../../../../../assets/images/slide1.jpg";
import MobileSlide2 from "../../../../../assets/images/slide2.jpg";
import MobileSlide3 from "../../../../../assets/images/slide3.jpg";
import Slider from "react-slick";





export default function AppConn() {
     const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
           
          arrows: false,
          rows: 1,
      
          autoplay: true,
          
        };
  return (
     <section className="app" id="app_Link">
  <div className="wrapper">
    <div className="col-xs-12 backgroundApp">
      <div className="maxWidth">
        <div className="row">
          <div className="col-12 col-lg-6 left">
            <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
            <p className="textLeft">người yêu điện ảnh</p>
            <br />
            <p className="textSmallLeft">Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
            <br />
            <div className="buttonCointainer">
              <button className="buttonLeft">App miễn phí - Tải về ngay!</button>
            </div>
            <p className="textAppUnder">TIX có hai phiên bản 
              <Link className="tagA" target="_blank" to="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"> iOS</Link> &amp;&nbsp;
              <Link className="tagA" target="_blank" to="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">Android</Link>
            </p>
          </div>
          <div className="col-12 col-lg-6 right">
            
            <img className="phone_mockup" src={MobileFrame} alt={MobileFrame} />
            <div className="phone">
               <Slider {...settings}>

              
                <div>
                  <img className="item" style={{width: '100%'}} src={MobileSlide1} alt={MobileSlide1} /></div>
                <div>
                  <img className="item" style={{width: '100%'}} src={MobileSlide2} alt={MobileSlide2} /></div>
                <div>
                  <img className="item" style={{width: '100%'}} src={MobileSlide3} alt={MobileSlide3} /></div>
              
           
            </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

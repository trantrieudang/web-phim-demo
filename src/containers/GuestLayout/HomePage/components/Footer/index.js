import React from "react";
import cgv from "../../../../../assets/images/cgv.png";
import bhd from "../../../../../assets/images/bhd.png";
import glx from "../../../../../assets/images/galaxycine.png";
import star from "../../../../../assets/images/cinestar.png";
import lotte from "../../../../../assets/images/lotte.png";
import mega from "../../../../../assets/images/megags.png";
import beta from "../../../../../assets/images/bt.jpg";
import ddc from "../../../../../assets/images/dongdacinema.png";
import touch from "../../../../../assets/images/TOUCH.png";
import cinemax from "../../../../../assets/images/cnx.jpg";
import starlight from "../../../../../assets/images/STARLIGHT.png";
import cine from "../../../../../assets/images/dcine.png";
import zalo from "../../../../../assets/images/zalopay_icon.png";
import payoo from "../../../../../assets/images/payoo.jpg";
import vcb from "../../../../../assets/images/VCB.png";
import agri from "../../../../../assets/images/AGRIBANK.png";
import vietin from "../../../../../assets/images/VIETTINBANK.png";
import ivb from "../../../../../assets/images/IVB.png";
import go from "../../../../../assets/images/123go.png";
import laban from "../../../../../assets/images/laban.png";
import appleLogo from "../../../../../assets/images/apple-logo.png";
import androidLogo from "../../../../../assets/images/android-logo.png";
import facebookLogo from "../../../../../assets/images/facebook-logo.png";
import zaloLogo from "../../../../../assets/images/zalo-logo.png";
import zionLogo from "../../../../../assets/images/zion-logo.jpg";
import boCongThuong from "../../../../../assets/images/bocongthuong.png";

import { Link } from "react-router-dom";

const listBrands1 = [
  { id: "1", logo: `${cgv}` },
  { id: "2", logo: `${bhd}` },
  { id: "3", logo: `${glx}` },
  { id: "4", logo: `${star}` },
  { id: "5", logo: `${lotte}` },
  
];

const listBrands2 = [
  { id: "1", logo: `${mega}` },
  { id: "2", logo: `${beta}` },
  { id: "3", logo: `${ddc}` },
  { id: "4", logo: `${touch}` },
  { id: "5", logo: `${cinemax}` },
  
];

const listBrands3 = [
  { id: "1", logo: `${starlight}` },
  { id: "2", logo: `${cine}` },
  { id: "3", logo: `${zalo}` },
  { id: "4", logo: `${payoo}` },
  { id: "5", logo: `${vcb}` },
  
];

const listBrands4 = [
  { id: "1", logo: `${agri}` },
  { id: "2", logo: `${vietin}` },
  { id: "3", logo: `${ivb}` },
  { id: "4", logo: `${go}` },
  { id: "5", logo: `${laban}` },
  
];



export default function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="maxWidth">
          <div className="row topContain">
            <div className="col-sm-4 col-xs-12 tix">
              <p className="hideOnMobile">TIX</p>
              <div className="row ">
                <div className="col-sm-6 col-xs-6 hideOnMobile">
                  <a href>FAQ</a>
                  <br />
                  <a href>Brand Guidelines</a>
                  <br />
                </div>
                <div className="col-sm-6 col-xs-12 text-center">
                  <a href>Thỏa thuận sử dụng</a>
                  <br />
                  <a href>Chính sách bảo mật</a>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 doiTac hideOnMobile">
              <p>Đối Tác</p>
              <div className="row">
                
                {listBrands1.map((item) => {
                  
                  return (
                    
                    
                    <Link to="/" key={item.id}>
                      <img className="icon" src={item.logo} alt={item.logo} />
                    </Link>
                    
                  );
                })}
              </div>
              <div className="row">
                
                {listBrands2.map((item) => {
                  
                  return (
                    
                    
                    <Link to="/" key={item.id}>
                      <img className="icon" src={item.logo} alt={item.logo} />
                    </Link>
                    
                  );
                })}
              </div>
              <div className="row">
                
                {listBrands3.map((item) => {
                  
                  return (
                    
                   
                    <Link to="/" key={item.id}>
                      <img className="icon" src={item.logo} alt={item.logo} />
                    </Link>
                    
                  );
                })}
              </div>
              <div className="row">
                
                {listBrands4.map((item) => {
                  
                  return (
                    
                    
                    <Link to="/" key={item.id}>
                      <img className="icon" src={item.logo} alt={item.logo} />
                    </Link>
                    
                  );
                })}
              </div>
              
            </div>
            <div className="col-sm-4 col-xs-12 mediaApp">
              <div className="row">
                <div className="col-xs-6 mobileApp hideOnMobile">
                  <p>MOBILE APP</p>
                  <a className="col-xs-6" href>
                    <img src={appleLogo} alt={appleLogo} />
                  </a>
                  <a className="col-xs-6" href>
                    <img src={androidLogo} alt={androidLogo} />
                  </a>
                </div>
                <div className="col-xs-6 social m-auto text-center">
                  <p className="hideOnMobile">Social</p>
                  <a className="col-xs-6" href>
                    <img src={facebookLogo} alt={facebookLogo} />
                  </a>
                  <a className="col-xs-6" href>
                    <img src={zaloLogo} alt={zaloLogo} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row bottomContain">
            <div className="col-sm-1 col-xs-12 zion">
              <img className="d-block m-auto" src={zionLogo} alt={zionLogo} />
            </div>
            <div className="col-sm-9 col-xs-12 d-block ">
              <span className="tix_info">
                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
              </span>
              <span>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </span>
              <span>
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                <br />
                đăng ký thay đổi lần&nbsp;thứ&nbsp;30,
                ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
                Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí
                Minh cấp.
              </span>
              <span>
                Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436
                <br />
                Email:{" "}
                <a href="mailto:support@tix.vn" style={{ color: "#FB4226" }}>
                  support@tix.vn
                </a>
              </span>
            </div>
            <div className="col-sm-1 col-xs-12 bct">
              <img
                className="d-block m-auto "
                src={boCongThuong}
                alt={boCongThuong}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

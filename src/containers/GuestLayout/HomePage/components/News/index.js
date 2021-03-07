import React from 'react';
import { Link } from 'react-router-dom';
import Like from '../../../../../assets/images/like.png';
import Comment from '../../../../../assets/images/comment.png';
export default function News() {
  return (
    <section className="new" id="new_Link">
      <div className="new__content container">
        <div className="col-xl-12 new__tittle">
          <ul
            className="nav nav-tabs navCenter justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active new__link"
                href="#DienAnh"
                id="DienAnh-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="DienAnh"
                aria-selected="true"
              >
                Điện Ảnh 24h
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link new__link"
                href="#Review"
                id="Review-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="Review"
                aria-selected="false"
              >
                Review
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link new__link"
                href="#KhuyenMai"
                id="KhuyenMai-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="KhuyenMai"
                aria-selected="false"
              >
                Khuyến Mãi
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content new__detail" id="myTabContent">
          <div
            className="tab-pane fade show active new__items row d-flex "
            id="DienAnh"
            role="tabpanel"
            aria-labelledby="DienAnh-tab"
          >
            <div className="col-news col-xl-6">
              <div className="new__thumbnail">
                <Link to="/">
                  <img
                    className="new__Img"
                    src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16111317082644.jpg"
                    alt="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16111317082644.jpg"
                  />
                </Link>
              </div>
              <Link to="/" className="new__filmDetail">
                <p className="new__filmTitle">
                Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                </p>
              </Link>
              <p className="new__filmDescription">
              Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
              </p>
              <div className="new__Social row container">
                <div className="new__Social-Like col-2 "  >
                  <img className="iconFacebook postLike" style={{width: '20px', marginRight: '10px'}} src={Like} alt={Like} />
                  <span className="new__AmountLike">0</span>
                </div>
                <div className="new__Social-Comment col-2 ">
                  <Link to="/">
                    <img className="iconFacebook postCmt" style={{width: '20px', marginRight: '10px'}} src={Comment} alt={Comment} />
                    <span className="new_AmountComment">1</span>
                  </Link>
                </div>
                <div className="col-8" />
              </div>
            </div>
            <div className="col-news col-xl-6">
              <div className="new__thumbnail">
                <Link to="/">
                  <img
                    className="new__Img"
                    src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg"
                    alt="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg"
                  />
                </Link>
              </div>
              <Link to="/" className="new__filmDetail">
                <p className="new__filmTitle">
                “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                </p>
              </Link>
              <p className="new__filmDescription">
              Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360 Giải Phóng! 
              </p>
              <div className="new__Social row container">
                <div className="col-2 new__Social-Like">
                  <img className="iconFacebook postLike" style={{width: '20px', marginRight: '10px'}} src={Like} alt={Like}  />
                  <span className="new__AmountLike">0</span>
                </div>
                <div className="col-2 new__Social-Comment">
                  <Link to="/">
                    <img className="iconFacebook postCmt" style={{width: '20px', marginRight: '10px'}} src={Comment} alt={Comment} />
                    <span className="new_AmountComment">1</span>
                  </Link>
                </div>
                <div className="col-8" />
              </div>
            </div>
            <div className="col-news col-xl-4">
              <div className="new__thumbnail">
                <Link to="/">
                  <img
                    className="new__Img"
                    src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png"
                    alt="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png"
                  />
                </Link>
              </div>
              <Link to="/" className="new__filmDetail">
                <p className="new__filmTitle">
                Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu 
                </p>
              </Link>
              <p className="new__filmDescription">
              Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng của tác phẩm. 
              </p>
              <div className="new__Social row container">
                <div  className="col-3 new__Social-Like">
                  <img className="iconFacebook postLike" style={{width: '20px', marginRight: '10px'}}  src={Like} alt={Like} />
                  <span className="new__AmountLike">0</span>
                </div>
                <div className="col-3 new__Social-Comment">
                  <Link to="/">
                    <img className="iconFacebook postCmt" style={{width: '20px', marginRight: '10px'}} src={Comment} alt={Comment} />
                    <span className="new_AmountComment">1</span>
                  </Link>
                </div>
                <div className="col-6" />
              </div>
            </div>
            <div className="col-news col-xl-4">
              <div className="new__thumbnail">
                <Link to="/">
                  <img
                    className="new__Img"
                    src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg"
                    alt="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg"
                  />
                </Link>
              </div>
              <Link to="/" className="new__filmDetail">
                <p className="new__filmTitle">
                NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN
                </p>
              </Link>
              <p className="new__filmDescription">
              Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng VINAMAN với tổng giá trị giải thưởng lên đến 60 triệu đồng.
              </p>
              <div className="new__Social row container">
                <div className="col-3 new__Social-Like">
                  <img className="iconFacebook postLike" style={{width: '20px', marginRight: '10px'}} src={Like} alt={Like} />
                  <span className="new__AmountLike">0</span>
                </div>
                <div className="col-3 new__Social-Comment">
                  <Link to="/">
                    <img className="iconFacebook postCmt" style={{width: '20px', marginRight: '10px'}} src={Comment} alt={Comment} />
                    <span className="new_AmountComment">1</span>
                  </Link>
                </div>
                <div className="col-6" />
              </div>
            </div>
            <div className="col-news col-xl-4">
              <ul className="list-unstyled">
                <li className="media">
                  <img
                    style={{width: '50px', borderRadius: '5px'}}
                    src="https://s3img.vcdn.vn/123phim/2020/07/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320275248.png"
                    className="mr-3"
                    alt="https://s3img.vcdn.vn/123phim/2020/07/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320275248.png"
                  />
                  <div className="media-body">
                    <a className="media-Title" href>
                    TENET công bố ngày khởi chiếu chính thức tại Việt Nam
                    </a>
                  </div>
                </li>
                <li className="media my-4">
                  <img
                  style={{width: '50px', borderRadius: '5px'}}
                    src="https://s3img.vcdn.vn/123phim/2020/07/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943684395106.jpg"
                    className="mr-3"
                    alt="https://s3img.vcdn.vn/123phim/2020/07/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943684395106.jpg"
                  />
                  <div className="media-body">
                    <a className="media-Title" href>
                    Khi phụ nữ không còn ở thế trốn chạy của nạn nhân
                    </a>
                  </div>
                </li>
                <li className="media my-4">
                  <img
                  style={{width: '50px', borderRadius: '5px'}}
                    src="https://s3img.vcdn.vn/123phim/2020/07/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937527518432.png"
                    className="mr-3"
                    alt="https://s3img.vcdn.vn/123phim/2020/07/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937527518432.png"
                  />
                  <div className="media-body">
                    <a className="media-Title" href>
                    Gerard Butler cùng bồ cũ Deadpool tham gia Greenland
                    </a>
                  </div>
                </li>
                <li className="media">
                  <img
                  style={{width: '50px', borderRadius: '5px'}}
                    src="https://s3img.vcdn.vn/123phim/2020/07/dien-vien-dac-biet-cua-bang-chung-vo-hinh-15937518582544.png"
                    className="mr-3"
                    alt="https://s3img.vcdn.vn/123phim/2020/07/dien-vien-dac-biet-cua-bang-chung-vo-hinh-15937518582544.png"
                  />
                  <div className="media-body">
                    <a className="media-Title" href>
                    Diễn viên đặc biệt của Bằng Chứng Vô Hình
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade new__items row"
          id="Review"
          role="tabpanel"
          aria-labelledby="Review-tab"
        ></div>
        <div
          className="tab-pane fade new__items row"
          id="KhuyenMai"
          role="tabpanel"
          aria-labelledby="KhuyenMai-tab"
        ></div>
        <div className="new__content-showmore">
          <button className="btnViewMore btn btn-info">XEM THÊM</button>
        </div>
      </div>
    </section>
  );
}

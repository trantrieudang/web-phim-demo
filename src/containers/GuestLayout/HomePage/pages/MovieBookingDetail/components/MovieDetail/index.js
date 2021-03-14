import { Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import starRating from "../../../../../../../assets/images/star-rating.svg";


const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#f9d29d",
    backgroundImage: "linear-gradient(315deg, #ffe1d7 0%,#ffc06b 74%)",
    height: '700px',
  },
}));

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function MovieDetail(props) {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const [video, setVideo] = useState("");
  const { movie } = props;

  if (movie.data == null) return "";
 
  const {
    hinhAnh,
    danhGia,
    trailer,
    tenPhim,
    maPhim,
    moTa,
    ngayKhoiChieu,
  } = movie.data;
  
  const matchYoutubeUrl = (url) => {
    let p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return url.match(p) ? RegExp.$1 : false;
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={4} style={{ paddingTop: "140px" }}>
            <img
              src={hinhAnh}
              alt={hinhAnh}
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow:
                  "0 13px 27px -5px hsl(240deg 30% 28% / 25%), 0 8px 16px -8px hsl(0deg 0% 0% / 30%), 0 -6px 16px -6px hsl(0deg 0% 0% / 3%)",
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="h4"
              style={{
                paddingTop: "140px",
                textAlign: "center",
                fontWeight: "700",
                letterSpacing: "2px",
              }}
            >
              {tenPhim}
            </Typography>
            <Typography
            
            variant="body1"
              
              style={{
                paddingTop: "10px",
                textAlign: "center",
                letterSpacing: "1px",
                fontSize: '14px',
              }}
            >
              {moTa}
            </Typography>
            <Typography
              variant="h6"
              style={{
                paddingTop: "20px",
                textAlign: "center",
                fontWeight: "700",
                letterSpacing: "2px",
              }}
            >
              Khởi chiếu
            </Typography>
            <Typography
              variant="body1"
              style={{
                paddingTop: "10px",
                textAlign: "center",
                letterSpacing: "2px",
              }}
            >
              {new Date(ngayKhoiChieu).toLocaleDateString("vi-VN")}
            </Typography>
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "2px dotted black",
                fontSize: "40px",
                padding: "10px",
                fontWeight: "700",
                margin: "10px auto",
                textAlign: "center",
                lineHeight: "50px",
              }}
            >
              {danhGia}
            </div>
            <div style={{ margin: "10px auto", textAlign: "center" }}>
              <span>in ratings </span>
              <img
                src={starRating}
                alt={starRating}
                style={{ width: "20px" }}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setOpen(true);
                setVideo(matchYoutubeUrl(trailer));
              }}
              style={{
                marginLeft: "160px",
                padding: "13px 40px",
                background: "#70bba3",
                borderRadius: "5px",
              }}
            >
              Trailer
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{
                marginLeft: "30px",
                padding: "13px 40px",
                background: "#70bba3",
                borderRadius: "5px",
              }}
            >
              Ticket
            </Button>
          </Grid>

          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId={video}
            onClose={() => setOpen(false)}
          />
        </Grid>
      </Container>
    </div>
  );
}

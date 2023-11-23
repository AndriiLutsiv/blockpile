import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './slider.module.scss';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          bottom: "25px",
          color: "#fff"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    )
  };

  return (
    <Slider {...settings}>
      <div className={styles.slideBox}>
        <p className={styles.titleSlider}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.<span>”</span> <br></br>
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
        <div className={styles.slideBoxI}>
          <div className={styles.slideImg} />
          <h4 className={styles.slideHeading}>f-1 collective</h4>
        </div>
      </div>
      <div className={styles.slideBox}>
        <p className={styles.titleSlider}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.<span>”</span> <br></br>
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
        <div className={styles.slideBoxI}>
          <div className={styles.slideImg} />
          <h4 className={styles.slideHeading}>f-1 collective</h4>
        </div>
      </div> <div className={styles.slideBox}>
        <p className={styles.titleSlider}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.<span>”</span> <br></br>
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
        <div className={styles.slideBoxI}>
          <div className={styles.slideImg} />
          <h4 className={styles.slideHeading}>f-1 collective</h4>
        </div>
      </div>
    </Slider>
  );
};

export default SliderComponent;

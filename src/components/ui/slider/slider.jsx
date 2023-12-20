import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './slider.module.scss';

const SliderComponent = ({ testimonials }) => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

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
    <Slider className={styles.mySlider} {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={styles.slideBox}>
          <div dangerouslySetInnerHTML={{ __html: testimonial }} className={styles.text} />
          <div className={styles.slideImgContainer}>
            <div className={styles.slideImg} />
            <h4 className={styles.imgHeading}>f-1 collective</h4>
          </div>
        </div>
      ))}
    </Slider>
  )
};

export default SliderComponent;

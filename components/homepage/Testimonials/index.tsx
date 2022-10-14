import Image from "next/image";
import Slider from "react-slick";

import image1 from "../../../public/images/t1.jpg";
import image2 from "../../../public/images/t2.jpg";
import image3 from "../../../public/images/t3.jpg";
import image4 from "../../../public/images/t4.jpg";
import image5 from "../../../public/images/t5.jpg";

import styles from "./index.module.css";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <div className={styles.testimonials} id="testimonials">
      <h2>Testimonials & Impacted Ladies</h2>
      <h3>What our ladies have to say</h3>
      <Slider {...settings}>
        <div className={styles.sliderItem}>
          <Image src={image1} />
        </div>
        <div className={styles.sliderItem}>
          <Image src={image2} />
        </div>
        <div className={styles.sliderItem}>
          <Image src={image3} />
        </div>
        <div className={styles.sliderItem}>
          <Image src={image4} />
        </div>
        <div className={styles.sliderItem}>
          <Image src={image5} />
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import styles from "../styles/Home.module.sass";

const HeroBanner = () => {
  return (
    <div className={styles.heroBanner}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div onClick={clickHandler} className={styles.heroBack}>
            <BiArrowBack className={styles.heroBack__btn} />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div onClick={clickHandler} className={styles.heroNext}>
            <BiArrowBack className={styles.heroNext__btn} />
          </div>
        )}
      >
        <div>
          <img src="slide-1.jpg" className={styles.heroImg} />
          <div className={styles.heroText}>Shop now</div>
        </div>
        <div>
          <img src="slide-2.jpg" className={styles.heroImg} />
          <div className={styles.heroText}>Shop now</div>
        </div>
        <div>
          <img src="slide-3.jpg" className={styles.heroImg} />
          <div className={styles.heroText}>Shop now</div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;

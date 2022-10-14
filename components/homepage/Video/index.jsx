import styles from "./index.module.css";

import videoImg1 from "../../../public/images/video1.jpg";
import videoImg2 from "../../../public/images/video2.jpg";
import videoImg3 from "../../../public/images/video3.jpg";
import videoImg4 from "../../../public/images/video4.jpg";
import Image from "next/image";

const Video = () => {
  return (
    <div className={styles.video}>
      <div className={styles.title}>
        This is how
        <br />
        <span>MILLIONDOLLARLADY</span>
        <br />
        fuels you success
      </div>
      <div className={styles.container}>
        <div className={styles.videoRow}>
          <a href="#" target="_blank">
            <Image src={videoImg1} />
          </a>
          <a href="#" target="_blank">
            <Image src={videoImg2} />
          </a>
        </div>
        <div className={styles.videoRow}>
          <a href="#" target="_blank">
            <Image src={videoImg3} />
          </a>
          <a href="#" target="_blank">
            <Image src={videoImg4} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;

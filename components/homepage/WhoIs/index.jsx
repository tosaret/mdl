import styles from "./index.module.css";

import whoIsImage from "../../../public/images/whois.png";
import Image from "next/image";

const WhoIs = () => {
  return (
    <div className={styles.whois} id="about">
      <div className={styles.whoisBg}>
        <div className={styles.container}>
          <div className={styles.text}>
            <h3>Who is Karina Molostova?</h3>
            <hr />
            <div>
              <p>
                She is an American/Russian enterpreneur, investor, and female
                leader. At 8 years old, she immigrated to America from the USSR.
              </p>
              <p>
                In her 20's she became a Millionaire all on her own through her
                businesses, investing, and manifestation. She is widely
                considered a female leader & advocate for independent woman.
              </p>
            </div>
          </div>
          <div className={styles.image}>
            <Image src={whoIsImage} width={400} height={570} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIs;

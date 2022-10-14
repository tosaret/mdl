import Image from "next/image";

import styles from "./index.module.css";

import checkoutImg1 from "../../../public/images/checkout1.jpg";
import checkoutImg2 from "../../../public/images/checkout2.jpg";
import checkoutImg3 from "../../../public/images/checkout3.jpg";

const CheckoutGallery = () => {
  return (
    <div className={styles.checkoutGallery}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src={checkoutImg1} width={352} height={472} />
        </div>

        <div className={styles.image}>
          <Image src={checkoutImg2} width={463} height={620} />
        </div>
        <div className={styles.image}>
          <Image src={checkoutImg3} width={352} height={472} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutGallery;

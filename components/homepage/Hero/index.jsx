import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../../ui/Button";
import styles from "./index.module.css";

import heroImage from "../../../public/images/hero.png";
import Link from "next/link";

const Hero = () => {
  const router = useRouter();

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroTexts}>
          <div className={styles.by}>By Karina</div>
          <div className={styles.title}>
            Helping you become <span>successful, confident,</span> and{" "}
            <span>wealthy</span>
          </div>
          <div className={styles.text}>
            I'm determined to help independent ladies to become the Million
            Dollar Version version of themselves.
          </div>
          <Button
            text="Join now"
            type="primary"
            onClick={() => router.push("/checkout")}
          />
          <Button
            text="Learn more"
            type="secondary"
            onClick={() => router.push("#course")}
          />
        </div>
        <div className={styles.heroImageBg} />
        <div className={styles.heroImage}>
          <Image src={heroImage} width={911} height={1076} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

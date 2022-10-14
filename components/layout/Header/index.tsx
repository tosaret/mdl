import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";

import styles from "./index.module.css";

import linkedinLogo from "../../../public/icons/linkedin.svg";
import instagramLogo from "../../../public/icons/instagram.svg";
import tiktokLogo from "../../../public/icons/tiktok.svg";

const Header = () => {
  const [menuShowMobile, setMenuShowMobile] = useState(false);

  return (
    <div className={styles.pageHeader}>
      <button
        className={styles.menuToggler}
        onClick={() => setMenuShowMobile(true)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={styles.headerIcons}>
        <a href="#" target="_blank">
          <Image src={linkedinLogo} />
        </a>
        <a href="#" target="_blank">
          <Image src={instagramLogo} />
        </a>
        <a href="#" target="_blank">
          <Image src={tiktokLogo} />
        </a>
      </div>
      <div className={styles.headerLogo}>
        <Link href="/">Million Dollar Lady</Link>
      </div>
      <div
        className={classNames(styles.headerMenu, {
          [styles.menuShowMobile]: menuShowMobile,
        })}
      >
        <button
          className={styles.menuClose}
          onClick={() => setMenuShowMobile(false)}
        >
          <span />
          <span />
        </button>
        <ul>
          <li>
            <Link href="/#course">Course</Link>
          </li>
          <li>
            <Link href="/#about">About Me</Link>
          </li>
          <li>
            <Link href="/#testimonials">Testimonials</Link>
          </li>
          <li>
            <Link href="/#faq">FAQ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

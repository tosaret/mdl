import { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";

import arrowIcon from "../../../../public/icons/arrow-down.svg";

import styles from "./index.module.css";

const CourseItem = ({ item, expandAll }) => {
  const [showList, setShowList] = useState(item.id === "c1" ? true : false);

  useEffect(() => {
    expandAll ? setShowList(true) : null;
  }, [expandAll]);

  return (
    <div key={item.id}>
      <div className={styles.courseTitle}>
        <a onClick={() => setShowList((curr) => !curr)}>
          <span
            className={classNames(styles.arrow, {
              [styles.up]: showList,
            })}
          >
            <Image src={arrowIcon} />
          </span>
          {item.module}
        </a>
      </div>
      <div
        className={classNames(styles.courseList, {
          [styles.hidden]: !showList,
        })}
      >
        <ul>
          {item.lectures.map((lecture, index) => (
            <li key={index}>{lecture}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseItem;

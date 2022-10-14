import Button from "../../ui/Button";
import styles from "./index.module.css";

const Followers = () => {
  return (
    <>
      <div className={styles.followers}>
        <div className={styles.container}>
          <div className={styles.col}>
            <div className={styles.count}>32.6K +</div>
            <div>YouTube subcribers</div>
          </div>
          <div className={styles.col}>
            <div className={styles.count}>407K +</div>
            <div>TikTok followers</div>
          </div>
          <div className={styles.col}>
            <div className={styles.count}>18K +</div>
            <div>Instagram followers</div>
          </div>
        </div>
      </div>
      <div className={styles.mobileButtons}>
        <Button type="primary" text="Join Now" />
        <Button type="secondary" text="Learn More" />
      </div>
    </>
  );
};

export default Followers;

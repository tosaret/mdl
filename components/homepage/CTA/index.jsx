import { useRouter } from "next/router";
import Button from "../../ui/Button";

import styles from "./index.module.css";

const CTA = () => {
  const router = useRouter();

  return (
    <div className={styles.cta}>
      <div className={styles.heading}>
        Your Journey To A Million Dollar Lady
      </div>
      <div>STARTS HERE</div>
      <div>
        <s>$497</s> $37
      </div>
      <Button
        type="primary"
        text="Join Now"
        onClick={() => router.push("/checkout")}
      />
    </div>
  );
};

export default CTA;

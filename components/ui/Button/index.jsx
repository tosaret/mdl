import classNames from "classnames";
import styles from "./index.module.css";

const Button = ({ text, type, onClick }) => {
  return (
    <button
      className={classNames(styles.btn, {
        [styles.primary]: type === "primary",
        [styles.secondary]: type === "secondary",
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

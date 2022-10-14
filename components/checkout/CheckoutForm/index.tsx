import Form from "./Form";

import styles from "./index.module.css";

const CheckoutForm = () => {
  return (
    <div className={styles.checkoutForm}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h4>Here’s what you’ll get:</h4>
          <ul>
            <li>
              Wealth Building Modules to Become Educated & Begin Investing
              ($2,579 Value)
            </li>
            <li>
              Educational Building Blocks Kickstart your Financial Freedom
              ($1,997 Value)
            </li>
            <li>
              Cryptocurrency Introduction & Safe Blockchain Investment
              Strategies ($597 Value)
            </li>
            <li>Income Building and Business Mindset ($997 Value)</li>
            <li>Mindset Training for Wealth Attraction​($1,000 Value)</li>
            <li>
              Image Training for Self Confidence and Success from a Certified
              Image Consultant ($1,000 Value)
            </li>
            <li>Life Time Updates (Priceless)</li>
            <li>
              <strong>TOTAL VALUE: $7,170.00</strong>
            </li>
            <li>
              <u>
                <strong>ONE TIME INVESTMENT OF ONLY $37</strong>
              </u>
            </li>
          </ul>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default CheckoutForm;

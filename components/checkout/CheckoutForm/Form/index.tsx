import Image from "next/image";
import classNames from "classnames";
import SelectSearch from "react-select-search";
//import "react-select-search/style.css";

import Button from "../../../ui/Button";

import styles from "./index.module.css";

import countries from "./countries";

import cardImg1 from "../../../../public/icons/visa.jpg";
import cardImg2 from "../../../../public/icons/master.jpg";
import cardImg3 from "../../../../public/icons/amex.jpg";

const ClearIcon = ({ onClick }) => {
  return (
    <a className={styles.clearIcon} onClick={onClick}>
      &#215;
    </a>
  );
};

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("submit form");
  };

  const handleClearInput = (e) => {
    e.preventDefault();

    const currentInput = e.target.offsetParent.children[0];
    currentInput.value = "";
    currentInput.classList.remove("error");
    currentInput.focus();
  };

  const validateEmail = (e) => {
    const input = e.target;
    const value = e.target.value;
    const regexp =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (value !== "" && !value.toLowerCase().match(regexp)) {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  };

  return (
    <div className={styles.form}>
      <form>
        <div className={styles.groupName}>Contact Information</div>
        <div className={styles.formRow}>
          <div className={styles.formInput}>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              onBlur={validateEmail}
            />
            <label htmlFor="email">Email</label>
            <ClearIcon onClick={handleClearInput} />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formInput}>
            <input type="text" name="address" placeholder="Street Address" />
            <label htmlFor="address">Address</label>
            <ClearIcon onClick={handleClearInput} />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formInput}>
            <input type="text" name="city" placeholder="City" />
            <label htmlFor="city">City</label>
            <ClearIcon onClick={handleClearInput} />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formInput}>
            <input type="text" name="state" placeholder="State / Province" />
            <label htmlFor="state">State / Province</label>
            <ClearIcon onClick={handleClearInput} />
          </div>
          <div className={styles.formInput}>
            <input type="text" name="zip" placeholder="Zip Code" />
            <label htmlFor="zip">Zip Code</label>
            <ClearIcon onClick={handleClearInput} />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={classNames(styles.formInput, styles.formSelect)}>
            <SelectSearch
              options={countries}
              value=""
              placeholder="Select Country"
              autoComplete="on"
              search
            />
          </div>
        </div>

        <div className={classNames(styles.groupName, styles.groupNameCredit)}>
          <div>Credit Card Information</div>
          <div>
            <div className={styles.creditCard}>
              <Image src={cardImg1} width={24} height={24} />
            </div>
            <div className={styles.creditCard}>
              <Image src={cardImg2} width={24} height={24} />
            </div>
            <div className={styles.creditCard}>
              <Image src={cardImg3} width={24} height={24} />
            </div>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formInput}>
            <input type="text" name="number" placeholder="Credit Card Number" />
            <label htmlFor="number">Credit Card Number</label>
            <ClearIcon onClick={handleClearInput} />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formInput}>
            <input
              type="text"
              name="date"
              placeholder="Expiration Date (MM/YY)"
            />
            <label htmlFor="date">Expiration Date (MM/YY)</label>
            <ClearIcon onClick={handleClearInput} />
          </div>
          <div className={styles.formInput}>
            <input type="text" name="cvv" placeholder="CVV Code" />
            <label htmlFor="cvv">CVV Code</label>
            <ClearIcon onClick={handleClearInput} />
          </div>
        </div>

        <div className={classNames(styles.groupName, styles.groupNameSummary)}>
          Order Summary
        </div>
        <div className={styles.summaryRow}>
          <div>
            <strong>Item</strong>
          </div>
          <div>
            <strong>Amount</strong>
          </div>
        </div>
        <div className={styles.summaryRow}>
          <div>Million Dollar Lady Wealth Building Program</div>
          <div>$37 One Time Investment</div>
        </div>

        <Button
          type="primary"
          text="Complete My Order"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Form;

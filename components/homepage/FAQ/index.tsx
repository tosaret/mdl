import styles from "./index.module.css";

const answers = [
  {
    id: "a1",
    question: "How long do I have access to the program for?",
    answer:
      "Forever! The program, you can watch whenever you want and you always have access to it",
  },
  {
    id: "a2",
    question: "Is this only applicable for North America?",
    answer:
      "No! A lot of the members are from all different types of countries, all the lessons have examples for people in Europe, Middle East, Asia, Russia, Africa.",
  },
  {
    id: "a3",
    question: "How long until I start making more money?",
    answer:
      "Every situation is different. If you already have a solid income, then may make sense to focus on the lessons that teach you about GROWING you money, which that could happen quite easy. If you need to make more income, it may make sense to focus on the lessons that help you grow as a person, starting businesses, and learning on how to make more money. So it depends for each person, the goal of the program is to take you from where you are now and guide you to your goals.",
  },
  {
    id: "a4",
    question: "Is there a refund policy?",
    answer:
      "Yes, we are very confident about our ability to help you get results. If for whatever reason you are not satisfied with the program, you can request and receive a refund within 30 days of purchase.",
  },
  {
    id: "a5",
    question: "How do I pay for the program?",
    answer:
      "On the next page, you can enter in your information and pay via credit card or debit card. If you do not have a card and would like an alternative method, i.e. paypal, then please contact karina@milliondollarlady.com",
  },
  {
    id: "a6",
    question: "Why are you doing this?",
    answer:
      "This is extremely fulfilling for me. As an immigrant and being raised by a single mother, my education on building wealth was quite limited. I have learned through trail and error. I have experienced what it actually takes to grow wealth, something I wish that I knew I first started to think about money. \n I know of many ways I can spend my time making money, this is something where I put my energy and focus into something that I know will inspire and help ladies get results financially. By you paying for the program, yes I will make money, but this program not only is going to make me extremelly fulfilled by helping other ladies succeed, I know it can for you as well.",
  },
];

const FAQ = () => {
  return (
    <div className={styles.faq} id="faq">
      <div className={styles.faqBg}>
        <div className={styles.container}>
          <h2>FAQ</h2>
          <hr />
          {answers.map((item) => (
            <div className={styles.item} key={item.id}>
              <div className={styles.question}>{item.question}</div>
              <div className={styles.answer}>{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

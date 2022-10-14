import styles from "./index.module.css";

import CourseItem from "./CourseItem";
import { useState } from "react";

const content = [
  {
    id: "c1",
    module: "Wealth Building",
    lectures: [
      'My 7 "Million Dollar Lady" business principles',
      "Principle 1: Investor Mindset",
      "Principle 2",
      "Principle 3",
      "Principle 4",
      "Principle 5",
      "Principle 6",
      "Principle 7",
      "What to Invest into? How to Find Investments?",
      "Avoid These Investments",
      "What Money Can Do For You",
      "Mindset Tweak to Make More Money With Everything",
      "How to Think Like an Investor",
      "Inflation, What is it? How Does it Happen? How to Benefit from it?",
    ],
  },
  {
    id: "c2",
    module: "Stock Market Intro",
    lectures: [
      'My 7 "Million Dollar Lady" business principles',
      "Principle 1: Investor Mindset",
      "Principle 2",
      "Principle 3",
      "Principle 4",
      "Principle 5",
      "Principle 6",
      "Principle 7",
      "What to Invest into? How to Find Investments?",
      "Avoid These Investments",
      "What Money Can Do For You",
      "Mindset Tweak to Make More Money With Everything",
      "How to Think Like an Investor",
      "Inflation, What is it? How Does it Happen? How to Benefit from it?",
    ],
  },
  {
    id: "c3",
    module: "Building Savings, How to Save, Importance of Savings",
    lectures: [
      'My 7 "Million Dollar Lady" business principles',
      "Principle 1: Investor Mindset",
      "Principle 2",
      "Principle 3",
      "Principle 4",
      "Principle 5",
      "Principle 6",
      "Principle 7",
      "What to Invest into? How to Find Investments?",
      "Avoid These Investments",
      "What Money Can Do For You",
      "Mindset Tweak to Make More Money With Everything",
      "How to Think Like an Investor",
      "Inflation, What is it? How Does it Happen? How to Benefit from it?",
    ],
  },
  {
    id: "c4",
    module: "Cryptocurrencies & Blockchain",
    lectures: [
      'My 7 "Million Dollar Lady" business principles',
      "Principle 1: Investor Mindset",
      "Principle 2",
      "Principle 3",
      "Principle 4",
      "Principle 5",
      "Principle 6",
      "Principle 7",
      "What to Invest into? How to Find Investments?",
      "Avoid These Investments",
      "What Money Can Do For You",
      "Mindset Tweak to Make More Money With Everything",
      "How to Think Like an Investor",
      "Inflation, What is it? How Does it Happen? How to Benefit from it?",
    ],
  },
  {
    id: "c5",
    module: "Credit and Business Mistakes",
    lectures: [
      'My 7 "Million Dollar Lady" business principles',
      "Principle 1: Investor Mindset",
      "Principle 2",
      "Principle 3",
      "Principle 4",
      "Principle 5",
      "Principle 6",
      "Principle 7",
      "What to Invest into? How to Find Investments?",
      "Avoid These Investments",
      "What Money Can Do For You",
      "Mindset Tweak to Make More Money With Everything",
      "How to Think Like an Investor",
      "Inflation, What is it? How Does it Happen? How to Benefit from it?",
    ],
  },
  {
    id: "c6",
    module: "Million Dollar Mindset",
    lectures: [
      'My 7 "Million Dollar Lady" business principles',
      "Principle 1: Investor Mindset",
      "Principle 2",
      "Principle 3",
      "Principle 4",
      "Principle 5",
      "Principle 6",
      "Principle 7",
      "What to Invest into? How to Find Investments?",
      "Avoid These Investments",
      "What Money Can Do For You",
      "Mindset Tweak to Make More Money With Everything",
      "How to Think Like an Investor",
      "Inflation, What is it? How Does it Happen? How to Benefit from it?",
    ],
  },
  {
    id: "c7",
    module: "How to Act Like a Million Dollars",
    lectures: [
      'My 7 "Million Dollar Lady" business principles',
      "Principle 1: Investor Mindset",
      "Principle 2",
      "Principle 3",
      "Principle 4",
      "Principle 5",
      "Principle 6",
      "Principle 7",
      "What to Invest into? How to Find Investments?",
      "Avoid These Investments",
      "What Money Can Do For You",
      "Mindset Tweak to Make More Money With Everything",
      "How to Think Like an Investor",
      "Inflation, What is it? How Does it Happen? How to Benefit from it?",
    ],
  },
  {
    id: "c8",
    module: "Avoiding Negative Image Distractions",
    lectures: [
      'My 7 "Million Dollar Lady" business principles',
      "Principle 1: Investor Mindset",
      "Principle 2",
      "Principle 3",
      "Principle 4",
      "Principle 5",
      "Principle 6",
      "Principle 7",
      "What to Invest into? How to Find Investments?",
      "Avoid These Investments",
      "What Money Can Do For You",
      "Mindset Tweak to Make More Money With Everything",
      "How to Think Like an Investor",
      "Inflation, What is it? How Does it Happen? How to Benefit from it?",
    ],
  },
  {
    id: "c9",
    module: "Instant Gratification vs Results",
    lectures: [
      'My 7 "Million Dollar Lady" business principles',
      "Principle 1: Investor Mindset",
      "Principle 2",
      "Principle 3",
      "Principle 4",
      "Principle 5",
      "Principle 6",
      "Principle 7",
      "What to Invest into? How to Find Investments?",
      "Avoid These Investments",
      "What Money Can Do For You",
      "Mindset Tweak to Make More Money With Everything",
      "How to Think Like an Investor",
      "Inflation, What is it? How Does it Happen? How to Benefit from it?",
    ],
  },
  {
    id: "c10",
    module: "Successful Goal Setting Masterclass",
    lectures: [
      'My 7 "Million Dollar Lady" business principles',
      "Principle 1: Investor Mindset",
      "Principle 2",
      "Principle 3",
      "Principle 4",
      "Principle 5",
      "Principle 6",
      "Principle 7",
      "What to Invest into? How to Find Investments?",
      "Avoid These Investments",
      "What Money Can Do For You",
      "Mindset Tweak to Make More Money With Everything",
      "How to Think Like an Investor",
      "Inflation, What is it? How Does it Happen? How to Benefit from it?",
    ],
  },
  {
    id: "c11",
    module: "Routine of Success",
    lectures: [
      'My 7 "Million Dollar Lady" business principles',
      "Principle 1: Investor Mindset",
      "Principle 2",
      "Principle 3",
      "Principle 4",
      "Principle 5",
      "Principle 6",
      "Principle 7",
      "What to Invest into? How to Find Investments?",
      "Avoid These Investments",
      "What Money Can Do For You",
      "Mindset Tweak to Make More Money With Everything",
      "How to Think Like an Investor",
      "Inflation, What is it? How Does it Happen? How to Benefit from it?",
    ],
  },
];

const CourseContent = () => {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <div className={styles.course} id="course">
      <div className={styles.container}>
        <div className={styles.title}>Course Content</div>
        <div className={styles.header}>
          <div>
            11 modules <span>&#9679;</span> 112 lectures <span>&#9679;</span> 12
            hours
          </div>
          <div>
            {!expandAll && <a onClick={() => setExpandAll(true)}>Expand All</a>}
          </div>
        </div>
        <div className={styles.content}>
          {content.map((item) => (
            <CourseItem key={item.id} item={item} expandAll={expandAll} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseContent;

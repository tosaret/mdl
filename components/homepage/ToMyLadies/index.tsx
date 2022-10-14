import CTA from "../CTA";

import styles from "./index.module.css";

import ladiesImg1 from "../../../public/images/ladies1.jpg";
import ladiesImg2 from "../../../public/images/ladies2.jpg";
import ladiesImg3 from "../../../public/images/ladies3.jpg";
import Image from "next/image";

const ToMyLadies = () => {
  return (
    <div className={styles.ladies}>
      <h2>To my Ladies</h2>
      <hr />
      <div className={styles.container}>
        <div>
          <p>
            Here is a conversational, but true statement. As a women, if we want
            to pursue our dreams, we must be independent.
          </p>
          <p>
            Many women ger married, have kids, settle for getting paid less,
            repeat in their families footsteps and in the process they give up
            on their dreams.
          </p>
          <p>But it does NOT have to be that way.</p>
          <p>
            As woman, we have harder jobs. <br />
            4x more woman are "front-line" workers than men (Health Care, Social
            Work, Government/Community based services) <br />
            75% of the workers on wall-street are male <br />
            3x more women are paid minimum wage than men. <br />
            In EVERY industry men make more money woman.
          </p>
          <p>
            So, we work harder, have more difficult jobs, get paid less and
            still expected to raise children and be a mother.
          </p>
          <p>
            If you are okay with those stats, then you are okay being dependent
            and not pursuing your dreams, and that is okay.
          </p>
          <p>
            I am here to help independent woman who have BIG Dreams, woman who
            want to build a life that they can be proud of.
          </p>
          <p>
            I have a several core principals that have helped me become a
            Million Dollar Lady and I want to ley you know about 3 of them
            here..
          </p>
        </div>

        <div className={styles.images}>
          <Image src={ladiesImg1} width={275} height={412} />
          <Image src={ladiesImg2} width={361} height={541} />
          <Image src={ladiesImg3} width={275} height={412} />
        </div>

        <div>
          <h4>Principal #1:</h4>
          <p>
            Many women ger married, have kids, settle for getting paid less,
            repeat in their families footsteps and in the process they give up
            on their dreams.
          </p>
          <p>But it does NOT have to be that way.</p>
          <p>
            As woman, we have harder jobs. <br />
            4x more woman are "front-line" workers than men (Health Care, Social
            Work, Government/Community based services) <br />
            75% of the workers on wall-street are male <br />
            3x more women are paid minimum wage than men. <br />
            In EVERY industry men make more money woman.
          </p>
          <p>
            So, we work harder, have more difficult jobs, get paid less and
            still expected to raise children and be a mother.
          </p>
          <p>
            If you are okay with those stats, then you are okay being dependent
            and not pursuing your dreams, and that is okay.
          </p>
          <p>
            I am here to help independent woman who have BIG Dreams, woman who
            want to build a life that they can be proud of.
          </p>
          <p>
            I have a several core principals that have helped me become a
            Million Dollar Lady and I want to ley you know about 3 of them
            here..
          </p>
        </div>

        <CTA />

        <div>
          <h4>Principal #2:</h4>
          <p>
            Second thing you must to do to become a Million Dollar Lady, you
            must have confidence in yourself. White men are taught principals of
            megotiating more than any other demographic, there are many factors
            why white men tend to get paid more than any other demographic, but
            one of the many reasons is they negotiate.
          </p>
          <p>
            As woman, we are taught to settle for what is given to us. We are
            taught to be submissive. We don't ask for more, we take what is
            given to us. <br />
            Why? If we believe in ourselves, we know what we are worth. If we
            know what we are worth, we don't settle for less. We ask for what we
            are worth.
          </p>
          <p>
            So to be a Million Dollar Lady, you need to believe into yourself.
            <br />I will show you the steps to become a Million Dollar Lady, but
            for me to help you, you need to believe in youself.
          </p>
        </div>

        <div>
          <h4>Principal #3:</h4>
          <p>
            Another Principal for becoming a Million Dollar Lady is dreaming
            big. <br />
            Dreaming big helps you challenge yourself, become better in every
            area, and you choose growth.
          </p>
          <p>
            Once you know how to build wealth, you believe in yourself, and
            dream big then you have no limitaions. <br />
            As woman, people are always trying to limit us. Those limits are
            false. They are not real, but they become real the moment we let
            them sink out of mind. <br />
            To grow anything, including your wealth, you first have to dream of
            a new version of yourself that you wnat to become.
          </p>
          <p>
            One way I help myself dream big is I actively practice
            manifestation. I've manifested anything I have dreamed of, money
            being one of them.
          </p>
          <p>
            I constantly dream big, I choose to keep growing, I manifest my
            dreams into reality.
          </p>
          <p>
            On your Journey to becoming a Million Dollar Lady, I want to help
            you transform to where you are right now to what you dream of.
            <br />
            If you can follow these principals and everything I go over in the
            "Million Dollar Lady" Wealth program then you are on the right path.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToMyLadies;

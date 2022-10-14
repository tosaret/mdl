import type { NextPage } from "next";
import Head from "next/head";
import CourseContent from "../components/homepage/CourseContent";
import CTA from "../components/homepage/CTA";
import FAQ from "../components/homepage/FAQ";
import Followers from "../components/homepage/Followers";
import Hero from "../components/homepage/Hero";
import Testimonials from "../components/homepage/Testimonials";
import ToMyLadies from "../components/homepage/ToMyLadies";
import Video from "../components/homepage/Video";
import WhoIs from "../components/homepage/WhoIs";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MDL</title>
        <meta name="description" content="" />
      </Head>

      <Hero />
      <Followers />
      <Video />
      <CourseContent />
      <CTA />
      <WhoIs />
      <Testimonials />
      <CTA />
      <FAQ />
      <ToMyLadies />
      <CTA />
    </div>
  );
};

export default Home;

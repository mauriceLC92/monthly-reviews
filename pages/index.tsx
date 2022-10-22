import type { NextPage } from "next";
import Head from "next/head";
import { Question } from "../components/Question";
import { reviewQuestions } from "../config/questions";

const Home: NextPage = () => {
  return (
    // <div className="container mx-auto px-64">
    <div className="container mx-auto">
      <Head>
        <title>Monthly Reviews</title>
        <meta name="description" content="Monthly reviews" />
        <link rel="icon" href="/favicon.ico" />
        {/* This may not work. See console error and then fix it */}
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className="flex justify-start">
        <h1 className="text-3xl font-extrabold tracking-widest">
          October 18th, 2022
        </h1>
      </div>

      <Question
        title={reviewQuestions[0].title}
        placeholder={reviewQuestions[0].placeholder}
      />
    </div>
  );
};

export default Home;

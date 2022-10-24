import type { NextPage } from "next";
import Head from "next/head";
import { NavBar } from "../components/NavBar/Nav";
import { QuestionList } from "../components/QuestionList";
import { reviewQuestions } from "../config/questions";

const Home: NextPage = () => {
  return (
    // <nav>
    //   {/* Nav bar goes here */}
    // </nav>
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

      {/* <Question
        title={singleQuestion.title}
        placeholder={singleQuestion.placeholder}
      />
      <QuestionSplit
        title={splitQuestion.title}
        placeholder={splitQuestion.placeholder}
        titleOne={splitQuestion.titleOne}
        titleTwo={splitQuestion.titleTwo}
      /> */}
      <QuestionList questions={reviewQuestions} />
    </div>
  );
};

export default Home;

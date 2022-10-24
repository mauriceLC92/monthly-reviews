import test from "node:test";
import { QuestionList } from "../components/QuestionList";
import { ThreeColumnLayout } from "../components/ThreeColumnLayout";
import { reviewQuestions } from "../config/questions";

const Test = () => {
  return (
    <ThreeColumnLayout>
      <>
        <h1 className="text-3xl font-extrabold tracking-widest mb-6">
          October 18th, 2022
        </h1>
        <QuestionList questions={reviewQuestions} />
      </>
    </ThreeColumnLayout>
  );
};

export default Test;

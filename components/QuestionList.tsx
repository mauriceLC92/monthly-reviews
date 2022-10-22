import { Question as QuestionType } from "../config/questions";
import { Question, QuestionSplit } from "./Question";

interface QuestionList {
  questions: QuestionType[];
}
export const QuestionList = ({ questions }: QuestionList) => {
  return (
    <>
      {questions.map((question) => {
        if (question.questionType === "split") {
          return (
            <QuestionSplit
              key={question.title}
              title={question.title}
              placeholder={question.placeholder}
              titleOne={question.titleOne}
              titleTwo={question.titleTwo}
            />
          );
        }
        return (
          <Question
            key={question.title}
            title={question.title}
            placeholder={question.placeholder}
          />
        );
      })}
    </>
  );
};

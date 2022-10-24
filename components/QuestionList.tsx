import { Question as QuestionType } from "../config/questions";
import { Accordion } from "./Accordion/Accordion";
import { Question, QuestionSplit } from "./Question";

interface QuestionList {
  questions: QuestionType[];
}
export const QuestionList = ({ questions }: QuestionList) => {
  return (
    <div className="space-y-2">
      {questions.map((question, index) => {
        if (question.questionType === "split") {
          return (
            <Accordion
              key={question.title}
              question={question.title}
              answer={
                <QuestionSplit
                  key={question.title}
                  placeholder={question.placeholder}
                  titleOne={question.titleOne}
                  titleTwo={question.titleTwo}
                />
              }
            />
          );
        }
        return (
          <Accordion
            defaultOpen={index === 0}
            key={question.title}
            question={question.title}
            answer={<Question placeholder={question.placeholder} />}
          />
        );
      })}
    </div>
  );
};

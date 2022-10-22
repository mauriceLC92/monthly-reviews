interface question {
  title: string;
  placeholder: string;
  questionType: "single" | "split";
}

export const reviewQuestions: question[] = [
  {
    title: "What were my biggest wins?",
    placeholder:
      "These are things that you will look back on with pride & fond memories at the end of the year. Recapping wins & milestones kicks the review off on a positive note.",
    questionType: "single",
  },
  {
    title: "What were my biggest realizations?",
    placeholder:
      "Realizations about things such as your health, beliefs, business, lack of skills and relationships. By constantly iterating and distilling these lessons, you will level up month after month after month.",
    questionType: "single",
  },
  {
    title: "What areas am I most satisfied? Least satisfied?",
    placeholder:
      "The goal here is to identify in the present moment what's working and what's not working.",
    questionType: "split",
  },
  {
    title: "What am I going to do more of this month? Less of?",
    placeholder:
      "Use the 80/20 rule. 20% of your health, beliefs, actions etc are elading to 80% of both your positive and negative results.",
    questionType: "split",
  },
  {
    title: "What am I thinking about for the upcoming month?",
    placeholder:
      "This is a quick list of things you are excited about, thinking about, uncertain of. This turns into a letter to your future self you can read at the end of the month.",
    questionType: "single",
  },
];

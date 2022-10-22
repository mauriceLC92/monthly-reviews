interface Question {
  title: string;
  placeholder: string;
}
export const Question = ({ title, placeholder }: Question) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="comment"
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>
      <div className="mt-1">
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          defaultValue={""}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

interface QuestionSplit {
  title: string;
  placeholder: string;
  titleOne: string;
  titleTwo: string;
}
export const QuestionSplit = ({
  title,
  placeholder,
  titleOne,
  titleTwo,
}: QuestionSplit) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <div className="flex mt-1">
        <div className="basis-1/2">
          <label
            htmlFor="commentOne"
            className="block text-sm font-medium text-gray-700"
          >
            {titleOne}
          </label>
          <textarea
            rows={4}
            name="commentOne"
            id="commentONe"
            className=" block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={""}
            placeholder={placeholder}
          />
        </div>

        <div className="basis-1/2">
          <label
            htmlFor="commentOne"
            className="block text-sm font-medium text-gray-700"
          >
            {titleTwo}
          </label>
          <textarea
            rows={4}
            name="commentTwo"
            id="commentTwo"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={""}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

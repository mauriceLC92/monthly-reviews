import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface AccordionContainer {
  children: React.ReactElement;
}
export const AccordionContainer = ({ children }: AccordionContainer) => {
  return (
    <div className="w-full px-4 pt-16">
      {/* use max-w-md to contrain width */}
      <div className="mx-auto w-full rounded-2xl bg-white p-2">{children}</div>
    </div>
  );
};

interface Accordion {
  question: string;
  answer: string | React.ReactNode;
  defaultOpen?: boolean;
}
export const Accordion = ({ question, answer, defaultOpen }: Accordion) => {
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
            <span>{question}</span>
            <ChevronRightIcon
              className={`${
                open ? "rotate-90 transform" : ""
              } h-5 w-5 text-indigo-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            {answer}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

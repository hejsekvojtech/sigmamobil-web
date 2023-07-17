import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";

type Props = {
    question: string;
    children: ReactNode;
};

function FaqBlock({ question, children }: Props) {
    return (
        /* Classic FAQ block with icon */
        <div className="w-full md:mt-8 mt-5">
            <div className="md:flex items-center hidden">
                <div className="bg-red-200 h-max rounded-full p-2 mr-4">
                    <QuestionMarkCircleIcon className="h-10 text-brand-main fill-red-300" />
                </div>
                <div className="block">
                    <h2 className="mb-3">{question}</h2>
                    <p>{children}</p>
                </div>
            </div>
            {/* Mobile friendly FAQ block utilizing HeadlessUI */}
            <div className="md:hidden">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-brand-main p-4 text-left text-base items-center font-medium ">
                                <span>{question}</span>
                                <ChevronUpIcon
                                    className={`${
                                        open ? "" : "rotate-180"
                                    } w-5 h-5 flex-shrink-0 text-red-100 transform duration-300`}
                                />
                            </Disclosure.Button>
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700">
                                    <p>{children}</p>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
}

export default FaqBlock;

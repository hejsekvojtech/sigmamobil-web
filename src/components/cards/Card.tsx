import { useInView } from "react-intersection-observer";
import CommonProps from "../../interfaces/CommonProps";
import { Transition } from "@headlessui/react";

function Card({ children }: CommonProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.9,
    });

    return (
        <div ref={ref} className="flex">
            <Transition
                show={inView}
                enter="transition-transform duration-500"
                enterFrom=" translate-y-6 opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="transition-transform"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="translate-y-6 opacity-0"
            >
                <div className="h-full pb-2 rounded-lg bg-gradient-to-r from-red-500 to-brand-main shadow-lg">
                    <div className="h-full rounded-lg bg-white p-4">
                        <div id="card-content" className="flex-col text-center">
                            {children}
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    );
}

export default Card;

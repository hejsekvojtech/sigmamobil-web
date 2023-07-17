import { Transition } from "@headlessui/react";

type Props = {
    show: boolean;
    success: boolean;
};

function Toast({ show, success }: Props) {
    return (
        <Transition
            show={show}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="bg-white w-max font-bold shadow-lg rounded-lg p-5 uppercase text-center">
                {success === true ? (
                    <>
                        <p className="text-base">
                            E-mail byl úspěšně odeslán 📨
                        </p>
                        <p className="text-base">co nejdříve se Vám ozvu</p>
                    </>
                ) : (
                    <>
                        <p className="text-base">
                            Nastala chyba při odesílání zprávy
                        </p>
                        <p className="text-base">Zkuste to prosím později</p>
                    </>
                )}
            </div>
        </Transition>
    );
}

export default Toast;

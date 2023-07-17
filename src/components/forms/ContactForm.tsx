import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "../Toast";

function ContactForm() {
  const form = useRef<any | null>(null);

  const [email, setEmail] = useState<string>("");
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [descriptionLength, setDescriptionLength] = useState<number>(0);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [sentSuccessfuly, setSentSuccessfuly] = useState<boolean | null>(null);

  const descLengthHandler = (e: { target: { value: string | any[] } }) => {
    setDescriptionLength(e.target.value.length);
  };

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i038484",
        "template_wtn5ocs",
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSentSuccessfuly(true);
          console.log(result.text);
          form.current.reset();
          setDescriptionLength(0);
        },
        (error) => {
          setSentSuccessfuly(false);
          console.log(error.text);
        }
      );

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col">
        <div className="grid md:grid-cols-3 md:gap-3">
          <div>
            <label htmlFor="requestEmail">Váš E-mail</label>
            <input
              type="email"
              name="requestEmail"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vas.email@email.cz"
              defaultValue={""}
            />
          </div>
          <div>
            <label htmlFor="phoneMake">Výrobce</label>
            <input
              type="text"
              name="requestMake"
              id="make"
              onChange={(e) => setMake(e.target.value)}
              placeholder="Samsung"
              defaultValue={""}
            />
          </div>
          <div>
            <label htmlFor="phoneModel">Model</label>
            <input
              type="text"
              name="requestModel"
              id="model"
              onChange={(e) => setModel(e.target.value)}
              placeholder="SM-G950F (Galaxy S8)"
              defaultValue={""}
            />
          </div>
        </div>

        <div className="col-span-2">
          <label htmlFor="description">
            Popis závady ({descriptionLength}/200)
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            maxLength={200}
            onChange={descLengthHandler}
            placeholder="Baterie se při běžném používání zahřívá"
            defaultValue={""}
          />
        </div>

        {descriptionLength < 50 && (
          <p className=" text-sm md:text-base italic ">
            *popis závady musí mít minimálně 50 znaků
          </p>
        )}

        <button
          type="submit"
          disabled={
            descriptionLength < 50 ||
            email === "" ||
            make === "" ||
            model === ""
              ? true
              : false
          }
          className="self-center disabled:bg-brand-secondary bg-brand-main mt-5"
        >
          Odeslat
        </button>

        <div className="fixed bottom-0 z-[5] self-center my-10">
          {sentSuccessfuly != null && (
            <Toast show={showToast} success={sentSuccessfuly} />
          )}
        </div>
      </div>
    </form>
  );
}

export default ContactForm;

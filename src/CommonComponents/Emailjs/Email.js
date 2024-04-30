import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pl68zql",
        "template_wi1cacf",
        form.current,
        "qyVE2mG73op8zBIbj"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert('Message Sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}

      <div className="container max-w-full md:max-w-[50%] mx-auto p-2 sm:p-5">
        <div className="contact-form bg-[#f1f1f1] p-0 md:p-5 rounded-lg shadow-xl">
          <form ref={form} onSubmit={sendEmail} className="contact-inputs w-full p-3 my-3 border-solid border-[#ccc] border-spacing-1 rounded-md outline-none">
            <input
            className="w-full p-3 my-3 border-solid border border-[#ccc] border-spacing-1 rounded-md outline-none"
              type="text"
              name="from_name"
              placeholder="Name"
              autoComplete="off"
              required
            />

            <input
             className="w-full p-3 my-3 border-solid border border-[#ccc] border-spacing-1 rounded-md outline-none"
              type="email"
              name="from_email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
            className="w-full p-3 my-3 border-solid border border-[#ccc] rounded-md outline-none"
              name="message"
              placeholder="Your Message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>

            <input
             className="w-full p-3 my-3 border-[#ccc] border-spacing-1 rounded-md outline-none bg-[#7ED957]  text-[#fff] border-none  px-5 py-3 cursor-pointer transition-colors hover: bg-[ #128f7e]  "
            type="submit" value="send" />
          </form>
        </div>
      </div>
      {/* bg-[#17bf9e] */}
    </>
  );
};

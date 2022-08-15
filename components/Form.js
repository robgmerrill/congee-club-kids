import { useForm, ValidationError } from "@formspree/react";

import { useRef, useEffect } from "react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xknengrp");

  const emailRef = useRef();

  useEffect(() => {
    console.log(emailRef.current);
    emailRef.current.focus();
  }, []);

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <div
      className="bg-white p-4 rounded-lg shadow-lg h-96"
      style={{ width: "400px" }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div>
          <label className="block" htmlFor="email">
            Email Address:
          </label>
          <input
            ref={emailRef}
            id="email"
            type="email"
            name="email"
            placeholder="Email address"
            className="border px-2 rounded-md w-full"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="name" className="block">
            Name:
          </label>
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Please provide your name"
            className="border px-2 rounded-md w-full"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div>
          <label className="block">Message:</label>
          <textarea
            id="message"
            name="message"
            className="border px-2 rounded-md w-full"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-yellow-300 rounded-lg mt-4"
        >
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
}

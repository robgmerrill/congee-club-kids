import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xknengrp");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-96 h-96">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email address"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="name">name</label>
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Please provide name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div>
          <label>Message</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
}

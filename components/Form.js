import { useForm, ValidationError } from "@formspree/react";

import { useRef, useEffect, useCallback } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xknengrp");

  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  console.log(emailRef);
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    if (
      emailRef.current.value.length > 0 &&
      nameRef.current.value.length > 0 &&
      messageRef.current.value.length > 0
    ) {
      emailRef.current.value = "";
      nameRef.current.value = "";
      messageRef.current.value = "";
    }
    console.log("yo yo yo");
  });

  useEffect(() => {
    console.log(emailRef.current);
    emailRef.current.focus();
  }, []);

  const clearForm = () => {
    emailRef.current.value = "";
    nameRef.current.value = "";
    messageRef.current.value = "";
  };

  // if (state.succeeded) {
  //   return (
  //     <>
  //       <p>Thanks for your submission!</p>
  //       <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
  //     </>
  //   );
  // }

  // if (state.succeeded) {
  //   fire();
  // }

  return (
    <div
      className="bg-white p-4 rounded-lg shadow-lg h-84"
      style={{ width: "400px", fontFamily: "Andika" }}
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
            ref={nameRef}
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
            ref={messageRef}
            id="message"
            rows="6"
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
          // onClick={clearForm}
          disabled={state.submitting}
          className="bg-yellow-300 rounded-lg mt-4"
        >
          Submit
        </button>

        {/* <ValidationError errors={state.errors} /> */}
        {/* <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} /> */}
      </form>
    </div>
  );
}

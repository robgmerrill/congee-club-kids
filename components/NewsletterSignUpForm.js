import { useRef, useState, useCallback } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import styled from "styled-components";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

const SuccessState = styled.p`
  color: white;
  padding-top: 20px;
`;
const ErrorState = styled.p`
  color: white;
  padding-top: 20px;
`;

export default function NewsLetterSignUpForm() {
  const [state, setState] = useState("idle");
  const inputRef = useRef(null);
  //   const emailRef = useRef();

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

  const subscribeUser = async (e) => {
    e.preventDefault();
    setState("Loading");

    // this is where your mailchimp request is made
    try {
      const res = await fetch("/api/subscribeUser", {
        body: JSON.stringify({
          email: inputRef.current.value,
        }),

        headers: {
          "Content-Type": "application/json",
        },

        method: "POST",
      });
      setState("Success");
      fire();
    } catch (e) {
      console.log(e.response.data.error);
      setErrorMsg(e.response.data.error);
      setState("Error");
    }
  };

  const fire = useCallback(() => {
    if (inputRef.current.value.length > 0) {
      makeShot(0.25, {
        spread: 26,
        startVelocity: 55,
      });

      makeShot(0.2, {
        spread: 60,
      });

      makeShot(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });

      makeShot(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });

      makeShot(0.1, {
        spread: 120,
        startVelocity: 45,
      });
      inputRef.current.value = "";
    }
    console.log("yo yo yo");
  }, [makeShot]);

  return (
    <div
      className="rounded-lg overflow-hidden p-4 w-full md:w-4/5 max-w-xl bg-white shadow-md"
      style={{ fontFamily: "Andika" }}
    >
      <h4 className="sub-header">Subscribe to the newsletter</h4>
      <p className="sub-text">Keep up to date...</p>
      <div className="pt-4">
        <form onSubmit={subscribeUser}>
          {/* <label htmlFor="email-input" className="form__label">
            Your Best Email
          </label> */}

          <input
            type="email"
            id="email-input"
            name="email"
            placeholder="your best email"
            ref={inputRef}
            required
            autoCapitalize="off"
            autoCorrect="off"
            // className="mb-2 bg-yellow-200"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          />

          <button
            type="submit"
            // onClick={fire}
            value=""
            name="subscribe"
            className="bg-yellow-300 w-full rounded"
          >
            Subscribe
          </button>

          {state === "Error" && (
            <ErrorState className="error-state">{errorMsg}</ErrorState>
          )}
          {state === "Success" && (
            <SuccessState>Awesome, you have been subscribed!</SuccessState>
          )}
          <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        </form>
      </div>
    </div>
  );
}

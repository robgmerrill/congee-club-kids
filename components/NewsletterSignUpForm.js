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

const SubscribeContainer = styled.div`
  font-family: "Andika";
  margin: 20px 0px;
  padding: 24px;
  max-width: 768px;
  box-sizing: border-box;
  border: 1px solid #d0d0032e;
  /* background: #fde046; */
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 600px;
  .sub-header {
    font-size: 1.25rem;
    font-weight: bold;
  }
  .sub-text {
    margin-top: 10px;
    margin-bottom: 20px;
    color: #2d3748;
    line-height: 1.5;
  }
`;
const SubFormContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  @media (max-width: 531px) {
    width: 100%;
    display: block;
  }
  .form-input {
    width: 78%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    font-size: 16px;
    @media (max-width: 531px) {
      display: block;
    }
  }
  .form-input input {
    outline: #f9fafb;
    display: block;
    width: 100%;
    background-color: #f9fafb;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 4px;
    border: 1px solid #6a4feb2e;
    font-size: 16px;
    @media (max-width: 531px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .sub-form-btn {
    margin-left: 10px;
    .form-btn {
      padding-top: 0.7rem;
      padding-bottom: 0.7rem;
      padding-left: 1.2rem;
      padding-right: 1.2rem;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      background: #7f5bd5b0;
      color: #ff0;
      cursor: pointer;
      /* :disabled {
  background: #636262;
color: #cbced0;
} */
      :disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
    @media (max-width: 531px) {
      margin-top: 10px;
      margin-left: 0;
    }
  }
`;

export default function NewsLetterSignUpForm() {
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

    // this is where your mailchimp request is made

    const res = await fetch("/api/subscribeUser", {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });
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
    <SubscribeContainer>
      <h4 className="sub-header">Subscribe to the newsletter</h4>
      <p className="sub-text">Keep up to date...</p>
      <SubFormContainer>
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
          />

          <button
            type="submit"
            onClick={fire}
            value=""
            name="subscribe"
            className="bg-yellow-300 w-full"
          >
            Subscribe
          </button>
          <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        </form>
      </SubFormContainer>
    </SubscribeContainer>
  );
}

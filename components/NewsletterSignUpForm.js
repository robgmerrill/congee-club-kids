import { useRef, useState } from "react";
import styled from "styled-components";

export default function NewsLetterSignUpForm() {
  const inputRef = useRef(null);

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

  const SubscribeContainer = styled.div`
    padding: 16px 0;
    font-family: "Andika";
    margin: 20px 0px;
    padding: 24px;
    max-width: 768px;
    box-sizing: border-box;
    border: 1px solid #d0d0032e;
    /* background: #fde046; */
    background: white;
    border-radius: 16px;
    width: 80%;
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

  return (
    <SubscribeContainer>
      <h4 className="sub-header">Subscribe to the newsletter</h4>
      <p className="sub-text">
        Get to notified on quality articles about frontend development and more
        sent to your inbox. I will send you an email once a month, no spam.
      </p>
      <SubFormContainer>
        <form onSubmit={subscribeUser}>
          <label htmlFor="email-input" className="form__label">
            Your Best Email
          </label>

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
            value=""
            name="subscribe"
            className="bg-yellow-300 w-full"
          >
            Subscribe
          </button>
        </form>
      </SubFormContainer>
    </SubscribeContainer>
  );
}

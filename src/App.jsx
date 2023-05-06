import { useRef, useState } from "react";
import error from "./assets/icon-error.svg";

function App() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [isValid, setIsValid] = useState([true, true, true, true]);

  function isValidEmail(email) {
    return /^.+@[^\.].*\.[a-z]{2,}$/.test(email);
  }

  return (
    <main>
      <section className="section-description">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <section className="section-price">
        <span>
          <strong>Try it free 7 days</strong> then
        </span>
        <span>$20/mo. thereafter</span>
      </section>
      <form action="">
        <div className="wrapper">
          <div className={isValid[0] ? "input-section" : "input-section-error"}>
            <input
              type="text"
              ref={firstNameRef}
              placeholder={isValid[2] ? "First Name" : ""}
              required
            />
            <img
              src={error}
              className={isValid[0] ? "hidden" : "error-icon"}
              alt=""
            />
          </div>
          <p className={isValid[0] ? "hidden" : "error-message"}>
            First Name cannot be empty
          </p>
        </div>

        <div className="wrapper">
          <div className={isValid[1] ? "input-section" : "input-section-error"}>
            <input
              type="text"
              ref={lastNameRef}
              placeholder={isValid[2] ? "Last Name" : ""}
              required
            />
            <img
              src={error}
              className={isValid[1] ? "hidden" : "error-icon"}
              alt=""
            />
          </div>
          <p className={isValid[1] ? "hidden" : "error-message"}>
            Last Name cannot be empty
          </p>
        </div>

        <div className="wrapper">
          <div className={isValid[2] ? "input-section" : "input-section-error"}>
            <input
              type="text"
              ref={emailRef}
              placeholder="Email Address"
              className={isValid[2] ? "" : "email-error"}
              required
            />
            <img
              src={error}
              className={isValid[2] ? "hidden" : "error-icon"}
              alt=""
            />
          </div>
          <p className={isValid[2] ? "hidden" : "error-message"}>
            Looks like this is not an email
          </p>
        </div>

        <div className="wrapper">
          <div className={isValid[3] ? "input-section" : "input-section-error"}>
            <input
              type="text"
              ref={passwordRef}
              placeholder={isValid[2] ? "Password" : ""}
              required
            />
            <img
              src={error}
              className={isValid[3] ? "hidden" : "error-icon"}
              alt=""
            />
          </div>
          <p className={isValid[3] ? "hidden" : "error-message"}>
            Password cannot be empty
          </p>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            console.log([
              firstNameRef.current.value != "",
              lastNameRef.current.value != "",
              isValidEmail(emailRef.current.value),
              passwordRef.current.value != "",
            ]);
            setIsValid([
              firstNameRef.current.value != "",
              lastNameRef.current.value != "",
              isValidEmail(emailRef.current.value),
              passwordRef.current.value != "",
            ]);
          }}
        >
          Claim your free trial
        </button>
        <p>
          By clicking the button, you are agreeing to our{" "}
          <a href="">Terms and Services</a>{" "}
        </p>
      </form>
    </main>
  );
}

export default App;

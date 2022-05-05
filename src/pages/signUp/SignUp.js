import React, { useState } from "react";
import "./signup.scss";

const SignUp = () => {
  const initialState = {
    adminName: "",
    adminId: "",
    email: "",
    password: "",
  };
  const [isSign, setSign] = useState(true);
  const [form, setForm] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSign) {
      //

      setSign(false);
    } else {
      //
    }
  };

  const switchMode = (e) => {
    e.preventDefault();
    setForm(initialState);
    setSign((prevIsSignup) => !prevIsSignup);
  };

  return (
    <div className="loginSection">
      <div className="signUpSection">
        <form onSubmit={handleSubmit}>
          <h1>{isSign ? "Register" : "Login"}</h1>

          {isSign && (
            <>
              <input
                name="admiName"
                label="First Name"
                placeholder="Admin Name"
                // value={form.adminName}
              />
              <input
                name="adminId"
                label="Last Name"
                placeholder="Admin ID"
                // value={form.adminName}
              />
            </>
          )}
          <input
            type="email"
            required
            placeholder="Email ID"
            // value={form.email}
          />
          <input
            type="password"
            required
            placeholder="Password"
            // value={form.password}
          />
          <input type="submit" />
          <button onClick={switchMode}>
            {isSign
              ? "Already have an account? Click to Login Now"
              : "Don't have an account? Click to Register Now"}
          </button>
        </form>
      </div>
      <div className="bannerSection"></div>
    </div>
  );
};

export default SignUp;

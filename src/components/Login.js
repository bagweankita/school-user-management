import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!trimmedEmail) {
    alert("Please enter your email.");
    return;
  }

  if (!emailRegex.test(trimmedEmail)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!trimmedPassword) {
    alert("Please enter your password.");
    return;
  }

  onLogin(trimmedEmail, trimmedPassword);
};


  return (
    <div
      className="flex justify-content-center align-items-center h-screen"
      style={{
        background: "linear-gradient(135deg, #f8fafc, #dbeafe)",
        padding: "1rem",
      }}
    >
      <Card
        title={
          <div className="text-center">
            <i className="pi pi-book mr-2 text-primary" style={{ fontSize: "2rem" }}></i>
            <h3 className="m-0">School Data System</h3>
            <small className="text-color-secondary">Login to continue</small>
          </div>
        }
        className="shadow-3 border-round-xl p-4 w-full sm:w-30rem"
      >
        <form onSubmit={handleSubmit} className="p-fluid">
          <div className="field mb-3">
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="field mb-3">
            <label htmlFor="password" className="block mb-2 font-semibold">
              Password
            </label>
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              feedback={false}
              toggleMask
            />
          </div>

          <Divider />

          <Button type="submit" label="Login" icon="pi pi-sign-in" className="p-button-rounded p-button-info" />
        </form>
      </Card>
    </div>
  );
}

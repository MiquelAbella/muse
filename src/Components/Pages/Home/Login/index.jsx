import React, { useEffect, useState } from "react";
import { Button } from "../../../Button";
import InputWithLabel from "../../../Form";
import { Typography } from "../../../Typography";

export const Login = ({ changeLogRegister }) => {
  const [recEmail, setRecEmail] = useState(false)
  useEffect(() => {
    const storedEmail = localStorage.getItem('recEmailMuse');
    if (storedEmail !== null) {
      setLoginData({ ...loginData, email: [storedEmail] })
    }
  }, []);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleRecEmailChange = (e) => {
    setRecEmail(!recEmail)
  }
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginData);
    if (recEmail) {
      localStorage.setItem("recEmailMuse", loginData.email)
    }
  };
  const handleLoginInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col h-screen justify-center w-1/4 ml-24 gap-8 ">
      <Typography text="Login" color="primary" type="important" />
      <form className="flex flex-col gap-8">
        <InputWithLabel name="email" label="Email" type="text" value={loginData.email} onInputChange={handleLoginInputChange} />
        <InputWithLabel name="password" label="Password" type="password" value={loginData.password} onInputChange={handleLoginInputChange} />
        <div className="flex gap-4 items-center">
          <Typography text="Remember my email?" color="primary" type="p1" />
          <input name="recEmail" type="checkbox" onChange={handleRecEmailChange} />
        </div>
        <Button onClick={handleLogin} text="Log In" />
      </form>
      <div className="flex gap-5">
        <Typography text={"I don't have an account"} type="p1" />
        <p onClick={changeLogRegister} className="cursor-pointer self-end w-1/4 text-white">Register</p>
      </div>
    </div>
  );
};

import React from "react";
import { useState } from "react";
// import {
//   Button,
//   Col,
//   Container,
//   Form,
//   FormGroup,
//   FormLabel,
//   Row,
// } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../auth/authProvider";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitLoginForm = async (event) => {
    event.preventDefault();
    const res = await handleLogin(userName, password);
    if (res) {
      navigate("/");
    }
  };

  const renderLogin = () => {
    return (
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type={"text"}
              id={"username"}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={submitLoginForm}
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    );
  };

  // const newLocal = <div className="container">
  //   <h2 className="text-3xl font-bold underline">Login To React Auth Demo</h2>

  //   <form class="from-gray-400" id="loginForm" onSubmit={submitLoginForm}>
  //     <div className="group-[]:">
  //       <label className="lable"> Username </label>
  //       <input
  //         type={"text"}
  //         className="input"
  //         id={"login-username"}
  //         value={userName}
  //         onChange={(e) => setUserName(e.target.value)}
  //         required />
  //     </div>
  //     <div className="group-[]:">
  //       <FormLabel>Password</FormLabel>
  //       <input
  //         type={"password"}
  //         className="form-control"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //         required />
  //     </div>
  //     <Button type="submit" className="btn-success mt-2" id="login-btn">
  //       Login
  //     </Button>
  //   </Form>

  // </div>;
  return <React.Fragment>{renderLogin()}</React.Fragment>;
};
export default Login;

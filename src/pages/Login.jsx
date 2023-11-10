import React, { useState } from 'react';

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData(prevData => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  return (
    <>
      <div className="text-center mt-12">
        <h1 className="text-3xl">Sign in to your account</h1>
      </div>

      <form
        className="flex flex-col gap-1 max-w-md w m-auto min-h-[calc(100vh-187px)] items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          className="border border-cyan-950 p-2 w-full"
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email address"
        />
        <input
          className="border border-cyan-950 p-2 w-full"
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="bg-[#FF8C38] p-2 max-w-md w-full">Log in</button>
      </form>
    </>
  );
}

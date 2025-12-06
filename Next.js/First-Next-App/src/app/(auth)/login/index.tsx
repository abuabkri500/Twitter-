"use client";
import React, { useState, type ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { gql } from "graphql-tag";
import { useRouter } from "next/navigation";

const LOGINUSER = gql`
  mutation loginuser($email: String!, $password: String!) {
    loginuser(email: $email, password: $password) {
      id
      username
    }
  }
`;

const LoginForm = () => {
  const [loginUser, { loading }] = useMutation(LOGINUSER);
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleinputchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const router = useRouter();

  const HandleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser({ variables: formdata });
      if (response?.data?.loginuser) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <main className="w-full max-w-md bg-gray-900 shadow-xl rounded-2xl p-8 border border-gray-700">
        <h1 className="text-center font-extrabold text-3xl text-white mb-6">
          Welcome Back
        </h1>
        <form onSubmit={HandleLogin} className="space-y-5">
          <div>
            <input
              onChange={handleinputchange}
              type="text"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <input
              onChange={handleinputchange}
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white font-semibold py-3 rounded-lg shadow-md disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-blue-400 hover:text-blue-500 font-medium"
          >
            Sign up
          </a>
        </p>
      </main>
    </div>
  );
};

export default LoginForm;

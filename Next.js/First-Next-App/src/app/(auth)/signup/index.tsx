"use client";
import React from "react";
import { useMutation } from "@apollo/client";
import { gql } from "graphql-tag";
import { useForm } from "react-hook-form";
import { UserInput, userShema } from "../../shared/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const CREATEUSER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      id
      username
    }
  }
`;

const SignUpForm = () => {
  const router = useRouter();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<UserInput>({
    resolver: zodResolver(userShema),
  });

  const [createUser, { loading }] = useMutation(CREATEUSER);

  const Register = async (data: UserInput) => {
    try {
      const response = await createUser({ variables: data });

      if (response?.data?.createUser) {
        router.push("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <main className="w-full max-w-md bg-gray-900 shadow-xl rounded-2xl p-8 border border-gray-700">
        <h1 className="text-center font-extrabold text-3xl text-white mb-6">
          Create Account
        </h1>
        <form onSubmit={handleSubmit(Register)} className="space-y-5">
          <div>
            <input
              {...register("name")}
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-2">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("email")}
              type="text"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white font-semibold py-3 rounded-lg shadow-md disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-400 hover:text-blue-500 font-medium"
          >
            Log in
          </a>
        </p>
      </main>
    </div>
  );
};

export default SignUpForm;

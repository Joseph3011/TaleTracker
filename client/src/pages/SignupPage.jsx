import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../components/InputField";
import SocialButtons from "../components/SocialButtons";
import AuthCard from "../components/AuthCard";
import api from "../services/api"; //import axios instance

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      //send request to backend
      const res = await api.post("/auth/signup", { name, email, password });

      //save token if backend sends it
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      console.log("Signup success:", res.data);

      //redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-black text-white p-3 rounded-lg">📖</div>
          </div>
          <h2 className="text-2xl font-bold">Create an account</h2>
          <p className="text-gray-500">Start your reading journey today</p>
        </div>

        <AuthCard title="Sign up" footer={<SocialButtons />}>
          <form onSubmit={handleSignup} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <InputField
              label="Full Name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              label="Email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Enter a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
            >
              Sign up
            </button>
          </form>
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-600 font-medium">
              Sign in
            </Link>
          </p>
        </AuthCard>
      </div>
    </div>
  );
};

export default SignupPage;

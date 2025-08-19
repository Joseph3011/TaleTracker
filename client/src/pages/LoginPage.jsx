import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../components/InputField";
import SocialButtons from "../components/SocialButtons";
import AuthCard from "../components/AuthCard";
import api from "../services/api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      //call backend API
      const res = await api.post("/auth/login", { email, password });

      //store token in localStorage
      localStorage.setItem("token", res.data.token);

      console.log("Login success:", res.data);

      //redirect after login
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.response?.data?.msg || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-black text-white p-3 rounded-lg">📖</div>
          </div>
          <h2 className="text-2xl font-bold">Welcome back</h2>
          <p className="text-gray-500">Continue your reading journey</p>
        </div>

        <AuthCard title="Sign in" footer={<SocialButtons />}>
          <form onSubmit={handleLogin} className="space-y-4">
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
            >
              Sign in
            </button>
          </form>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

          <p className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-yellow-600 font-medium">
              Sign up
            </Link>
          </p>
        </AuthCard>
      </div>
    </div>
  );
};

export default LoginPage;

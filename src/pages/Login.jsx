import { useState } from "react";
import "../App.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError("");
    setSuccess("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (isLogin) {
      if (
        formData.email === "" ||
        formData.password === ""
      ) {
        setError(
          "Please enter your email and password."
        );
        return;
      }

      setSuccess("Login successful!");

      return;
    }

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      setError("Please fill in all the fields.");
      return;
    }

    if (formData.password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError("Passwords do not match.");
      return;
    }

    setSuccess("Account created successfully!");
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setError("");
    setSuccess("");

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="login-page">
      <div className="login-form">

        <h1>
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <p className="login-subtitle">
          {isLogin
            ? "Login to continue shopping with Sandy Store."
            : "Sign up to start shopping with Sandy Store."}
        </p>

        {error && (
          <p className="login-error">
            {error}
          </p>
        )}

        {success && (
          <p className="login-success">
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <>
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </>
          )}

          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          {!isLogin && (
            <>
              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </>
          )}

          <button type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>

        </form>

        <div className="login-switch">

          <p>
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>

          <button
            type="button"
            className="switch-btn"
            onClick={switchMode}
          >
            {isLogin
              ? "Create an account"
              : "Login instead"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default Login;
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    // Basic validation
    if (email === "" || password === "") {
      setError("Please enter your email and password.");
      return;
    }

    // Login successful for now
    setError("");

    console.log("Email:", email);
    console.log("Password:", password);

    alert("Login successful!");
  };

  return (
    <div className="login-page">

      <form
        className="login-form"
        onSubmit={handleLogin}
      >

        <h1>Login</h1>

        {error && (
          <p className="login-error">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ResidentLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      setMessage("Please enter both username and password");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/login", { // Resident login endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        if (data.data.role === "user") {
          setMessage("Login successful! Welcome Resident.");
          // Optionally redirect to resident dashboard
          window.location.href = "/resident-dashboard";
        } else {
          setMessage("You are not authorized as a Resident");
        }
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      console.error("Error connecting to backend:", err);
      setMessage("Cannot connect to backend");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-300 p-12">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-6">Resident Login</h2>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 mb-3 rounded-lg border border-gray-300 focus:outline-none"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 mb-4 rounded-lg border border-gray-300 focus:outline-none"
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-lg text-lg"
        >
          Login
        </button>

        {/* Message */}
        {message && <p className="mt-3 text-sm text-red-600">{message}</p>}
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-4 text-center text-sm w-full">
        <nav className="space-x-3">
          <Link to="/landing-page" className="text-blue-700 hover:underline">
            Home
          </Link>
          <span>|</span>
          <Link to="/admin-login" className="text-blue-700 hover:underline">
            Admin
          </Link>
          <span>|</span>
          <Link to="/resident-login" className="text-blue-700 hover:underline">
            Resident
          </Link>
          <span>|</span>
          <Link to="/meter-reader" className="text-blue-700 hover:underline">
            Meter Reader
          </Link>
        </nav>
      </div>
    </div>
  );
}

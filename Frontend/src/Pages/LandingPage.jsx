import { Routes, Route, Link } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import ResidentLogin from "./ResidentLogin";
import MeterReaderLogin from "./MeterReaderLogin";
import Dashboard from "./Dashboard";
import ResidentDashboard from "./ResidentDashboard";
import NotificationCenter from "./NotificationCenter";
import '../App.css'


export default function LandingPage() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route
        path="/"
        element={
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-200 via-blue-100 to-white">
            
            {/* Header */}
            <header className="py-12 text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-4">
                Sucol Water System
              </h1>
              <p className="text-gray-700 text-lg md:text-xl max-w-xl mx-auto">
                Efficient water management for communities. 
              </p>
              <h1 className="text-4xl md:text-4xl  text-black mb-4 pt-20">
                Get started As:
              </h1>
            </header>

            {/* Cards / Login Options */}
            <main className="flex flex-col md:flex-row justify-center items-center gap-8 flex-grow px-6 md:px-20">
              {/* Admin */}
              <Link to="/admin-login" className="group relative bg-white shadow-lg rounded-2xl p-8 w-64 md:w-72 text-center transform transition hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-4xl mb-4 text-blue-800 group-hover:text-blue-900">🛠️</div>
                <h2 className="text-xl font-bold mb-2">Admin</h2>
              </Link>

              {/* Resident */}
              <Link to="/resident-login" className="group relative bg-white shadow-lg rounded-2xl p-8 w-64 md:w-72 text-center transform transition hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-4xl mb-4 text-green-600 group-hover:text-green-700">👤</div>
                <h2 className="text-xl font-bold mb-2">Resident</h2>
              </Link>

              {/* Meter Reader */}
              <Link to="/meter-reader" className="group relative bg-white shadow-lg rounded-2xl p-8 w-64 md:w-72 text-center transform transition hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-4xl mb-4 text-yellow-600 group-hover:text-yellow-700">📏</div>
                <h2 className="text-xl font-bold mb-2">Meter Reader</h2>
              </Link>
            </main>

            {/* Footer */}
            <footer className="py-6 text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Sucol Water System. All rights reserved.
            </footer>

          </div>
        }
      />

      {/* Routes */}
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/resident-login" element={<ResidentLogin />} />
      <Route path="/meter-reader" element={<MeterReaderLogin />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/admin-dashboard" element={<Dashboard />} />
      <Route path="/resident-dashboard" element={<ResidentDashboard />} />
      <Route path="/notification-center" element={<NotificationCenter />} />
    </Routes>
  );
}

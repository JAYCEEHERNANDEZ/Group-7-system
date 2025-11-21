import React from "react";

const NotificationCenter = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white font-sans">

      {/* Sidebar */}
      <aside className="w-64 hidden md:block bg-white/5 backdrop-blur-xl border-r border-blue-500/20 shadow-xl">
        <div className="p-6 font-bold text-blue-400 text-lg drop-shadow-lg">Sucol Water System</div>
        <nav className="mt-6 space-y-2 text-gray-300">
          <a href="Dashboard" className="block py-2 px-6 hover:bg-blue-400/20 rounded cursor-pointer">Dashboard</a>
          <a href="#" className="block py-2 px-6 hover:bg-blue-400/20 rounded cursor-pointer">Records</a>
          <a href="Notification" className="block py-2 px-6 hover:bg-blue-400/20 rounded cursor-pointer">Notification</a>
          <a href="Profile" className="block py-2 px-6 hover:bg-blue-400/20 rounded cursor-pointer">Profiles</a>
          <a href="Manage" className="block py-2 px-6 hover:bg-blue-400/20 rounded cursor-pointer">Manage Customers</a>
          <a href="#" className="block py-2 px-6 hover:bg-blue-400/20 rounded cursor-pointer">Reports</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 max-w-6xl mx-auto w-full">

        {/* Header */}
        <header className="bg-blue-600/40 backdrop-blur-lg text-white p-4 rounded-xl mb-6 border border-blue-500/30 shadow-lg shadow-blue-900/40">
          <h1 className="text-xl font-bold text-center drop-shadow-md">Notification Center</h1>
        </header>

        {/* Notification Form */}
        <div className="bg-white/10 backdrop-blur-xl border border-gray-700/40 shadow-lg p-6 rounded-xl mb-6">
          <form action="#" method="POST" className="grid grid-cols-1 gap-4">
            <textarea
              name="message"
              placeholder="Enter message for all customers..."
              className="p-2 border border-gray-600/50 rounded w-full h-24 resize-none bg-white/5 text-white placeholder-gray-300 backdrop-blur-sm"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600 w-full md:w-1/3 transition-all"
            >
              Send Notification
            </button>
          </form>
        </div>

        {/* Notification History */}
        <div className="bg-white/10 backdrop-blur-xl border border-gray-700/40 shadow-lg p-6 rounded-xl">
          <h2 className="font-semibold mb-4 text-blue-300">Sent Notifications</h2>
          <ul className="space-y-2 text-gray-300">
            {[
              "Welcome to our service! Check out new offers.",
              "Maintenance alert: System will be down tomorrow 2AM-4AM.",
              "Don't miss our weekend special discount!"
            ].map((msg, idx) => (
              <li key={idx} className="bg-white/5 p-3 rounded hover:bg-blue-500/10 transition">
                {msg}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default NotificationCenter;

import React from "react";

const ResidentDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white font-sans">

      {/* Sidebar */}
      <aside className="w-64 hidden md:block bg-white/5 backdrop-blur-xl border-r border-blue-500/20 shadow-xl">
        <div className="p-6 font-bold text-blue-400 text-lg drop-shadow-lg">Sucol Water System</div>
        <nav className="mt-6 space-y-2 text-gray-300">
          <p className="block py-2 px-6 bg-blue-500/20 rounded font-semibold cursor-pointer">Dashboard</p>
          <p className="block py-2 px-6 hover:bg-blue-400/20 rounded cursor-pointer">Profile</p>
          <p className="block py-2 px-6 hover:bg-blue-400/20 rounded cursor-pointer">Bills</p>
          <p className="block py-2 px-6 hover:bg-blue-400/20 rounded cursor-pointer">Payments</p>
          <p className="block py-2 px-6 hover:bg-blue-400/20 rounded cursor-pointer">Settings</p>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 max-w-6xl mx-auto w-full">

        {/* Header */}
        <header className="bg-blue-600/40 backdrop-blur-lg text-white p-4 rounded-xl mb-6 border border-blue-500/30 shadow-lg shadow-blue-900/40">
          <h1 className="text-xl font-bold text-center drop-shadow-md">Customer Dashboard</h1>
        </header>

        {/* Consumption Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            { title: "Total Consumption", value: "120 m³", color: "blue" },
            { title: "Total Bill", value: "₱ 3,600", color: "blue" },
            { title: "Balance", value: "₱ 1,200", color: "red" },
            { title: "Last Payment", value: "2025-11-01", color: "blue" }
          ].map((item) => (
            <div key={item.title} className="bg-white/10 backdrop-blur-xl border border-gray-700/40 p-4 rounded-xl shadow-lg text-center hover:shadow-blue-800/40 transition-all">
              <h2 className="font-semibold text-gray-300 mb-2">{item.title}</h2>
              <p className={`text-${item.color}-400 text-2xl font-bold drop-shadow-md`}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Consumption Table */}
        <div className="bg-white/10 backdrop-blur-xl border border-gray-700/40 shadow-lg p-6 rounded-xl overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4 text-blue-300">Consumption Records</h2>
          <table className="w-full text-left border-collapse text-gray-300">
            <thead>
              <tr className="bg-white/5">
                {["Month", "Cubic Meter Used", "Bill Amount", "Date of Payment", "Balance", "Action"].map((col) => (
                  <th key={col} className="border-b border-gray-600 p-2 text-blue-300">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { month: "October 2025", used: "30 m³", bill: "₱ 900", date: "2025-10-15", balance: "₱ 0", paid: true },
                { month: "September 2025", used: "28 m³", bill: "₱ 840", date: "—", balance: "₱ 840", paid: false },
                { month: "August 2025", used: "25 m³", bill: "₱ 750", date: "—", balance: "₱ 750", paid: false }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition">
                  <td className="border-b border-gray-700/50 p-2">{row.month}</td>
                  <td className="border-b border-gray-700/50 p-2">{row.used}</td>
                  <td className="border-b border-gray-700/50 p-2">{row.bill}</td>
                  <td className="border-b border-gray-700/50 p-2">{row.date}</td>
                  <td className={`border-b border-gray-700/50 p-2 ${row.balance === "₱ 0" ? "text-green-400" : "text-red-400"}`}>{row.balance}</td>
                  <td className="border-b border-gray-700/50 p-2 text-center">
                    {row.paid ? (
                      <button disabled className="bg-gray-300 text-gray-600 px-3 py-1 rounded cursor-not-allowed">Paid</button>
                    ) : (
                      <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Pay Bill</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ResidentDashboard;

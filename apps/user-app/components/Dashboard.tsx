
export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Balance Section */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Your Balance</p>
          <p className="text-3xl font-semibold">₹12,500.00</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Money
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          "Send Money",
          "Pay Bills",
          "Recharge",
          "Transaction History",
        ].map((action) => (
          <div
            key={action}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md transition text-center"
          >
            <div className="w-10 h-10 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
              ₹
            </div>
            <p className="font-medium">{action}</p>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <ul className="space-y-3 text-sm">
          <li className="flex justify-between">
            <span>Recharge - Jio</span>
            <span className="text-red-500">-₹299</span>
          </li>
          <li className="flex justify-between">
            <span>Received from Rahul</span>
            <span className="text-green-600">+₹1,000</span>
          </li>
          <li className="flex justify-between">
            <span>Electricity Bill</span>
            <span className="text-red-500">-₹1,500</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <div className="admin-page">
      <h1>Dashboard</h1>
      <p>Welcome to the Freeman Control Panel.</p>
      
      <div className="admin-stats">
        <div className="stat-card">
          <h3>Total Products</h3>
          <p className="stat-number">0</p>
        </div>
      </div>
    </div>
  );
}

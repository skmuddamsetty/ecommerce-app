import React, { useEffect } from "react";

function Dashboard(props) {
  useEffect(() => {
    document.title = "Dashboard - eCommerce";
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;

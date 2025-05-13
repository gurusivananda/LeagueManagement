import React from 'react';
import './AdminPanel.css';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <div className="admin-buttons">
        <Link to="/ScheduleMatches">
          <button>Schedule Matches</button>
        </Link>
        <Link to="/Players">
          <button>Add Players</button>
        </Link>
        <Link to="/PointsTable">
          <button>Modify Points Table</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPanel;

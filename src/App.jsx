import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './signup.jsx';
import Login from './Login.jsx';
import SportsPage from './SportsPage.jsx';
import Teams from './teams/Teams.jsx';
import PointsTable from './PointsTable/PointsTable.jsx';
import Admin from './Admin/admin.jsx';
import AdminPanel from './AdminPanel/AdminPanel.jsx';
import ScheduleMatches from './AdminPanel/ScheduleMatches.jsx';
import Fixtures from './Fixtures/Fixtures.jsx';
import Players from './AdminPanel/Players.jsx';
import Result from './Result/Result.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SportsPage" element={<SportsPage />} />
      <Route path="/Teams" element={<Teams />} />
      <Route path="/PointsTable" element={<PointsTable />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/AdminPanel" element={<AdminPanel />} />
      <Route path="/ScheduleMatches" element={<ScheduleMatches />} />
      <Route path="/Fixtures" element={<Fixtures />} />
      <Route path="/Players" element={<Players />} />
      <Route path="/Result" element={<Result />} />
    
     
     
    </Routes>
  );
}

export default App;

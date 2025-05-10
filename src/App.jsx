import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './signup.jsx';
import Login from './Login.jsx';
import SportsPage from './SportsPage.jsx';
import Teams from './teams/Teams.jsx';
import PointsTable from './PointsTable/PointsTable.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SportsPage" element={<SportsPage />} />
      <Route path="/Teams" element={<Teams />} />
      <Route path="/PointsTable" element={<PointsTable />} />
      
      
      
    </Routes>
  );
}

export default App;

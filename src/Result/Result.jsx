import React from 'react';
import './Result.css';

const completeMatches = [
  {
    teams: ['Amaravathi Avengers', 'Chennai Champions'],
    date: '2025-05-01',
    time: '04:30 PM',
    winner: 'Amaravathi Avengers'
  },
  {
    teams: ['Bengaluru Rockets', 'Kerala Kings'],
    date: '2025-05-02',
    time: '06:00 PM',
    winner: 'Kerala Kings'
  },
  {
    teams: ['Mumbai Titans', 'Hyderabad lions'],
    date: '2025-05-03',
    time: '03:00 PM',
    winner: 'Mumbai Titans'
  },

];
const Result = () => {
  return (
    <div className="complete-container">
      <h2 className="complete-title">🏁 Completed Matches</h2>
      <div className="matches-grid">
        {completeMatches.map((match, index) => (
          <div className="match-card" key={index}>
            <h3 className="teams">{match.teams[0]} vs {match.teams[1]}</h3>
            <p className="date-time">📅 {match.date} &nbsp; 🕒 {match.time}</p>
            <p className="winner">🏆 Winner: <strong>{match.winner}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;

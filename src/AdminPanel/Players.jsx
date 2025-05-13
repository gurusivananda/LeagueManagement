import React, { useState } from 'react';
import './Players.css';

const teams = [
  'Amaravathi Avengers',
  'Chennai Champions',
  'Bengaluru Rockets',
  'Kerala Kings',
  'Mumbai Titans',
  'Hyderabad lions',
  'Goa Gladiators',
  'Surat Gangsters',
  'Lucknow Devils',
  'Jaipur Panthers',
  'Kolkata Tigers',
  'Bihar Viamls',
  'Haryana Steelers',
  'Rajastan Royals',
  'Chattisgarh Warriors',
  'Pune Prowlers',
  'Madhya Pradesh Mavericks',
  'Vizag Vikings',
  'Bhopal Blasters',
  'Jammu Express'
];

const Players = () => {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [teamPlayers, setTeamPlayers] = useState({});

  const handleAddPlayer = () => {
    if (!selectedTeam || !playerName.trim()) return;

    setTeamPlayers((prev) => {
      const updated = { ...prev };
      if (!updated[selectedTeam]) updated[selectedTeam] = [];
      updated[selectedTeam].push(playerName.trim());
      return updated;
    });

    setPlayerName('');
  };

  return (
    <div className="player-container">
      <h2 className="title">👤 Add Players to Teams</h2>

      <div className="form-section">
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
        >
          <option value="">Select Team</option>
          {teams.map((team, idx) => (
            <option key={idx} value={team}>
              {team}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Enter player name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />

        <button onClick={handleAddPlayer}>Add Player</button>
      </div>

      {selectedTeam && (
        <div className="player-list">
          <h3>Players in {selectedTeam}:</h3>
          <ul>
            {(teamPlayers[selectedTeam] || []).map((player, idx) => (
              <li key={idx}>{player}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Players;

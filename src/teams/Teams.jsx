import React from 'react';
import './Teams.css';


const teams = [
  { name: 'Amaravathi Avengers', logo: 'Andhra.png' },
  { name: 'Chennai Champions', logo: 'Chennai.png' },
  { name: 'Bengaluru Rockets', logo: 'Bengaluru.png' },
  { name: 'Kerala Kings', logo: 'Kerala.png' },
  { name: 'Mumbai Titans', logo: 'Mumbai.png' },
  { name: 'Hyderabad lions', logo: 'Hyderabad.png' },
  { name: 'Goa Gladiators', logo: 'Goa.png' },
  { name: 'Surat Gangsters', logo: 'Surat.png' },
  { name: 'Lucknow Devils', logo: 'Lucknow.png' },
  { name: 'Delhi Dynamates', logo: 'Delhi.png' },
  { name: 'Kolkata Tigers', logo: 'Kolkata.png' },
  { name: 'Bihar Viamls', logo: 'Bihar.png' },
  { name: 'Haryana Steelers', logo: 'Haryana.png' },
  { name: 'Rajastan Royals', logo: 'Rajasthan.png' },
  { name: 'Chattisgarh Warriors', logo: 'Chattisgrah.png' },
  { name: 'Pune Prowlers', logo: 'Pune.png' },
  { name: 'Madhya Pradesh Mavericks', logo: 'Madhya.png' },
  { name: 'Vizag Vikings', logo: 'vizag.png' },
  { name: 'Bhopal Blasters', logo: 'Bhopal.png' },
  { name: 'Jammu Express', logo: 'Jammu.png' },
];

const Teams = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">🏏 Teams</h1>
      <div className="team-grid">
        {teams.map((team, index) => (
          <div className="team-card" key={index}>
            <img src={`/images/${team.logo}`} alt={team.name} className="team-logo" />
            <p className="team-name">{team.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;

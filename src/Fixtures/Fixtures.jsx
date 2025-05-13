import React, { useState } from 'react';
import './Fixtures.css';

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
const getLogo = (teamName) => {
  const team = teams.find(t => t.name === teamName);
  return team ? team.logo : '';
};

const getRandomDate = (start, end) => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
};

const getRandomTime = () => {
  const hour = Math.floor(Math.random() * 12) + 1;
  const minute = Math.floor(Math.random() * 60);
  const period = Math.random() > 0.5 ? 'AM' : 'PM';
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${period}`;
};

const generateRandomMatches = (teams, count) => {
  const matches = new Set();
  const results = [];

  while (results.length < count) {
    const team1 = teams[Math.floor(Math.random() * teams.length)].name;
    let team2 = team1;
    while (team2 === team1) {
      team2 = teams[Math.floor(Math.random() * teams.length)].name;
    }

    const matchKey = [team1, team2].sort().join('-');
    if (!matches.has(matchKey)) {
      matches.add(matchKey);
      results.push({
        teams: [team1, team2],
        date: getRandomDate(new Date(), new Date(2025, 11, 31)),
        time: getRandomTime(),
      });
    }
  }

  return results;
};

const Fixtures = () => {
  const [matches] = useState(generateRandomMatches(teams, 30));

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">🏏 Upcoming Matches</h1>
      <div className="match-list">
        <ul>
          {matches.map((match, index) => (
            <li key={index} className="match-item">
              <span className="team">
                <img src={`./images/${getLogo(match.teams[0])}`} alt={match.teams[0]} className="team-logo" />
                <strong>{match.teams[0]}</strong>
              </span>
              &nbsp;vs&nbsp;
              <span className="team">
                <img src={`./images/${getLogo(match.teams[1])}`} alt={match.teams[1]} className="team-logo" />
                <strong>{match.teams[1]}</strong>
              </span>
              &nbsp;— {match.date} at {match.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Fixtures;

import React, { useState } from 'react';
import './ScheduleMatches.css'; 

const teams = [
  { name: 'Amaravathi Avengers', logo: 'logo.png' },
  { name: 'Chennai Champions', logo: 'kkr.png' },
  { name: 'Bengaluru Rockets', logo: 'kxp.png' },
  { name: 'Kerala Kings', logo: 'csk.png' },
  { name: 'Mumbai Titans', logo: 'rr.png' },
  { name: 'Hyderabad lions', logo: 'mi.png' },
  { name: 'Goa Gladiators', logo: 'srh.png' },
  { name: 'Surat Gangsters', logo: 'dc.png' },
  { name: 'Lucknow Devils', logo: 'lsg.png' },
  { name: 'Jaipur Panthers', logo: 'gt.png' },
  { name: 'Kolkata Tigers', logo: 'a.png' },
  { name: 'Bihar Viamls', logo: 'b.png' },
  { name: 'Haryana Steelers', logo: 'c.png' },
  { name: 'Rajastan Royals', logo: 'd.png' },
  { name: 'Chattisgarh Warriors', logo: 'e.png' },
  { name: 'Pune Prowlers', logo: 'f.png' },
  { name: 'Madhya Pradesh Mavericks', logo: 'g.png' },
  { name: 'Vizag Vikings', logo: 'h.png' },
  { name: 'Bhopal Blasters', logo: 'i.png' },
  { name: 'Jammu Express', logo: 'j.png' },
];

const ScheduleMatches = () => {
  const [matchSchedule, setMatchSchedule] = useState([]);
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  
  const scheduleMatch = () => {
    if (team1 !== team2 && date && time) {
      const match = {
        teams: [team1, team2],
        date,
        time,
      };
      setMatchSchedule([...matchSchedule, match]);
     
      setTeam1('');
      setTeam2('');
      setDate('');
      setTime('');
    } else {
      alert('Please select two different teams and provide valid date and time.');
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">🏏 Schedule Matches</h1>
      
      <div className="match-scheduler">
        <select value={team1} onChange={(e) => setTeam1(e.target.value)}>
          <option value="">Select Team 1</option>
          {teams.map((team, index) => (
            <option key={index} value={team.name}>
              {team.name}
            </option>
          ))}
        </select>

        <select value={team2} onChange={(e) => setTeam2(e.target.value)}>
          <option value="">Select Team 2</option>
          {teams.map((team, index) => (
            <option key={index} value={team.name}>
              {team.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={scheduleMatch}>Schedule Match</button>
      </div>

      <div className="match-list">
        <h2>Scheduled Matches:</h2>
        {matchSchedule.length === 0 ? (
          <p>No matches scheduled yet.</p>
        ) : (
          <ul>
            {matchSchedule.map((match, index) => (
              <li key={index}>
                {match.teams[0]} vs {match.teams[1]} - {match.date} at {match.time}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ScheduleMatches;

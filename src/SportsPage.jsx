import React from 'react';
import { Link } from 'react-router-dom';
import './SportsPage.css';

function SportsPage() {
  const matches = [
    {
      date: 'Sat, May 10, 2025',
      time: '04:28 PM',
      team1: 'Amaravathi Avengers ',
      team2: 'Chennai',
      location: 'Amaravathi ',
    },
    {
      date: 'Sun, May 11, 2025',
      time: '04:28 PM',
      team1: 'Delhi Dynamates',
      team2: 'Bengaluru Rockets',
      location: 'Delhi',
    },
    {
      date: 'Fri, May 16, 2025',
      time: '04:28 PM',
      team1: 'Hyderabad Lions',
      team2: 'Goa Gladiators',
      location: 'Hyderabad',
    },
  ];

  return (
    <div className="sports-page">
      
      <header className="header">
    
        <h1>🏆 Indian City League</h1>
        <nav>
          <Link to="/Teams">Teams</Link>
          <Link to="/Fixtures">Fixtures</Link>
          <Link to="/Result">Result</Link>
          <Link to="/PointsTable">PointsTable</Link>
          <Link to="/Admin">Admin</Link>
          <Link to="/">Logout</Link>
        </nav>
      </header>

      
      <section className="hero">
        <h2>Welcome to League Manager</h2>
        <p>Your complete solution for managing sports leagues</p>
        <div className="hero-buttons">
          <Link to="/Teams">
            <button>View Teams</button>
          </Link>
          <Link to="/Fixtures">
            <button className="secondary" >Check Matches</button>
          </Link>
        </div>
      </section>

 
      <section className="features">
        <h3>Manage Your League</h3>
        <p>Everything you need to run your sports league in one place</p>
        <div className="feature-cards">
          <div className="card">
            <h4>🏐 Teams</h4>
            <p>View and manage all teams in the league.</p>
            <Link to="/Teams">Learn more →</Link>
          </div>
          <div className="card">
            <h4>📅 Matches</h4>
            <p>Check upcoming fixtures and past results.</p>
            <Link to="/Fixtures">Learn more →</Link>
          </div>
          <div className="card">
            <h4>📊 Standings</h4>
            <p>See the current league table and team rankings.</p>
            <Link to="/PointsTable">Learn more →</Link>
          </div>
        </div>
      </section>

    
      <section className="matches">
        <h4>Upcoming Matches</h4>
        <div className="match-list">
          {matches.map((match, index) => (
            <div key={index} className="match-card">
              <p><strong>{match.date}</strong> at {match.time}</p>
              <p>{match.team1} <strong>vs</strong> {match.team2}</p>
              <p><em>{match.location}</em></p>
              <span className="status">Upcoming</span>
            </div>
          ))}
        </div>
        <Link to="/Fixtures">
          <button className="view-all">View All Matches</button>
        </Link>
      </section>

    
      <footer className="footer">
        <p>League Manager &copy; 2025 | Managing your league with ease</p>
        <div className="footer-links">
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link><br/>
          
        </div>
      </footer>
    </div>
  );
}

export default SportsPage;

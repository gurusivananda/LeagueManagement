import React from "react";
import "./PointsTable.css"; 

const Teams = [
  { name: "Amaravathi Avengers", p: 10, w: 8, l: 2, nrr: "+1.25", pts: 16 },
  { name: "Chennai Champions", p: 10, w: 7, l: 3, nrr: "+0.95", pts: 14 },
  { name: "Hyderabad Lions", p: 10, w: 7, l: 3, nrr: "+0.75", pts: 14 },
  { name: "Bengaluru Rockets", p: 10, w: 6, l: 4, nrr: "+0.60", pts: 12 },
  { name: "Kerala Kings", p: 10, w: 6, l: 4, nrr: "+0.35", pts: 12 },
  { name: "Surat Gangsters", p: 10, w: 5, l: 5, nrr: "+0.10", pts: 10 },
  { name: "Goa Gladiators", p: 10, w: 5, l: 5, nrr: "0.00", pts: 10 },
  { name: "Mumbai Titans", p: 10, w: 5, l: 5, nrr: "-0.05", pts: 10 },
  { name: "Jaipur Panthers", p: 10, w: 4, l: 6, nrr: "-0.20", pts: 8 },
  { name: "Kolkata Tigers", p: 10, w: 4, l: 6, nrr: "-0.30", pts: 8 },
  { name: "Lucknow Devils", p: 10, w: 4, l: 6, nrr: "-0.40", pts: 8 },
  { name: "Bihar Vimals", p: 10, w: 4, l: 6, nrr: "-0.50", pts: 8 },
  { name: "Haryana Steelers", p: 10, w: 3, l: 7, nrr: "-0.60", pts: 6 },
  { name: "Rajastan Royals", p: 10, w: 3, l: 7, nrr: "-0.70", pts: 6 },
  { name: "Chattisgarh Warriors", p: 10, w: 3, l: 7, nrr: "-0.75", pts: 6 },
  { name: "Pune Prowlers", p: 10, w: 3, l: 7, nrr: "-0.80", pts: 6 },
  { name: "Madhya Pradesh Mavericks", p: 10, w: 2, l: 8, nrr: "-0.85", pts: 4 },
  { name: "Vizag Vikings", p: 10, w: 2, l: 8, nrr: "-0.90", pts: 4 },
  { name: "Bhopal Blasters", p: 10, w: 2, l: 8, nrr: "-1.10", pts: 4 },
  { name: "Jammu Express", p: 10, w: 1, l: 9, nrr: "-1.25", pts: 2 }
];

const PointsTable = () => {
  const sortedTeams = [...Teams].sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    return parseFloat(b.nrr) - parseFloat(a.nrr);
  });

  return (
    <div className="p-4"><center>
      <h1 className="text-3xl font-bold mb-4 text-center"></h1>
      </center>
    
      <div className="overflow-x-auto">
        <center>
        <table className="min-w-full text-sm text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">Team</th>
              <th className="px-4 py-2">P</th>
              <th className="px-4 py-2">W</th>
              <th className="px-4 py-2">L</th>
              <th className="px-4 py-2">NRR</th>
              <th className="px-4 py-2">Pts</th>
            </tr>
          </thead>
          <tbody>
            {sortedTeams.map((team, index) => (
              <tr key={team.name} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{team.name}</td>
                <td className="px-4 py-2">{team.p}</td>
                <td className="px-4 py-2">{team.w}</td>
                <td className="px-4 py-2">{team.l}</td>
                <td className="px-4 py-2">{team.nrr}</td>
                <td className="px-4 py-2 font-bold">{team.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </center>
      </div>
    </div>
  );
};

export default PointsTable;

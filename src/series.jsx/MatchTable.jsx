import React from "react";

const MatchTable = ({ data }) => {
  console.log(data)

  return (
    <>
    <table className="table table-striped">
    <thead>
      <tr>
        <th>Match</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>ODI</th>
        <th>T20</th>
        <th>Test</th>
        <th>Squads</th>
        <th>Matches</th>
      </tr>
    </thead>
    <tbody>
      {data.map((match) => (
        <tr key={match.id}>
          <td>{match.name}</td>
          <td>{match.startDate}</td>
          <td>{match.endDate}</td>
          <td>{match.odi}</td>
          <td>{match.t20}</td>
          <td>{match.test}</td>
          <td>{match.squads}</td>
          <td>{match.matches}</td>
        </tr>
      ))}
    </tbody>
  </table>
  </>
  );
};

export default MatchTable;

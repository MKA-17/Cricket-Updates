import React from 'react'

export default function Table({rank_data}) {
  return (
    <div>
      <div className="container mt-4 mb-4">
  <table className="table table-striped">
    <tbody>
      {rank_data.rank.map((player) => (
        <tr key={player.id}>
          <th scope="row">{player.rank}</th>
          <td>{player.name}</td>
          <td>{player.country}</td>
          <td>{player.rating}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  )
}

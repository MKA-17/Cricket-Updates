import React from 'react';

const ScoreTile = ({format, venue, status, matchTime, team1, team2, scoreTeam1, scoreTeam2}) => {
  
    console.log(matchTime, venue,  format, matchTime, team1?.img,team1?.name, scoreTeam1?.r, scoreTeam1?.w, scoreTeam1?.o, scoreTeam2?.r, scoreTeam2?.w, scoreTeam2?.o, status)

    return (
      <div
      style={{
        borderRadius: '12px',
        background: '#f2f2f2',
        padding: '20px',
        width: '400px',
        margin: '10px',
        marginLeft: '110px', // Add this line to increase the left margin
        display: 'inline-block',
      }}
  >
    <div style={{ marginBottom: '15px' }}>
      <h5 style={{ fontSize: '20px', marginBottom: '5px' }}>{matchTime}</h5>
      <p style={{ fontSize: '16px', marginBottom: '0' }}>{venue}-{format}</p>
    </div>
    <div style={{ marginBottom: '15px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={`${team2?.img}`}
          alt={`${team2?.name} flag`}
          style={{ width: '40px', height: '40px', marginRight: '10px' }}
        />
        <p style={{ fontSize: '18px', margin: '0' }}>
          {team2?.name} {scoreTeam1?.r}/{scoreTeam1?.w} ({scoreTeam1?.o})
        </p>
      </div>
      <br />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={`${team1?.img}`}
          alt={`${team1?.name} flag`}
          style={{ width: '40px', height: '40px', marginRight: '10px' }}
        />
        <p style={{ fontSize: '18px', margin: '0' }}>
          {team1?.name} {scoreTeam2?.r}/{scoreTeam2?.w} ({scoreTeam2?.o})
        </p>
      </div>
    </div>
    <div>
      <p style={{ fontSize: '16px', margin: '0' }}>Match Status: {status}</p>
    </div>
  </div>
  );
};

export default ScoreTile;

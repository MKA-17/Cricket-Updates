import React, {useEffect, useState}from 'react';
import { options } from '../apis_keys';

export default function PlayerStatTable({player_id, format, player_name, setShowspinner}) {

    const [player_stat, setPlayer_stat] = useState('');


      
      const fetch_Player_Stat = async (player_id, format) => {
        try {
          console.log(player_id, format);
          let resp = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${player_id}/${format}`, options);
          console.log("resp", resp);
      
          if (resp.ok) {
            let data_from_resp = await resp.json();
            setPlayer_stat(data_from_resp);
            console.log("data of player ", data_from_resp);
          } else {
            throw new Error('Failed to fetch player stats');
          }
        } catch (error) {
          alert(error);
        }
        try{
        setShowspinner(false);
      }
        catch(error)
        {console.log(error)
        }
      };
      
      useEffect(() => {
       fetch_Player_Stat(player_id, format);
      }, [player_id]);
      console.log("player stat",player_stat)

  return (
    <div>
        
      {
      (typeof (player_stat) === 'object')? 
      (<table className="table table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
        {player_stat?.headers.map((header) => (
            <th >{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        
        
        {
          player_stat?.values.map((e)=>
        (<tr>
          {(e)?.values.map((v)=>(<td>{v}</td>))}
          
          
        </tr>)
         
          )
        }
        
      </tbody>
    </table>):
    "No Stats Available."
}

    </div>

  )
}

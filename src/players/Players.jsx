import React, { useState, useEffect} from 'react'
import { options, data } from '../apis_keys';
import Navbar from './Navbar';
import PlayerAccordian from "./PlayerAccordian";
import { v4 as uuidv4 } from 'uuid';
import Spinner from '../componenets/Spinner';

export default function Players() {

  const [player, setPlayer] = useState('');
  const [playerData, setPlayerData] = useState([]);
  const [showSpinner, setShowspinner] = useState(false);
  

  const fetch_Players = async(player) =>{
  
    
    if(player !== ''){
      setPlayerData([])
      setShowspinner(true);
    
    try  {let resp = await fetch(
      `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search?plrN=${player}`,
      options
    );
    console.log("player name: ", resp)
if(resp.ok){
    let data = await resp.json();
    setPlayerData(()=>{
      return data.player;
    })
  }
else return setPlayerData('')

}
    catch(error)
    {
      console.log(error);
      
    }
    setShowspinner(false);

    }
  
  }
  useEffect(()=>{
    
   // setPlayerData([{name:'virat',teamName:'india'}, {name:'Babar',teamName:'pak'}])
    fetch_Players(player);
    console.log(playerData)

}, [player])


  //console.log(player)
  return (
    <>
    <Navbar setPlayer={setPlayer}/>
{/* {   !!playerData? (<PlayerAccordian id={uuidv4()} name={playerData[0].name} teamName={playerData[0].teamName} player_id={playerData[0].id} />):''
}   */}
{!!playerData? playerData.map((e)=>( <PlayerAccordian id={uuidv4()} name={e.name} teamName={e.teamName} player_id={e.id} />)):"Page not found."}
{showSpinner?(<Spinner/>):' '}
{/* {!!data.headers? data.headers.map((e)=>( <PlayerAccordian id={uuidv4()} name={e} teamName={e} player_id={e} />)):"Page not found."}
{showSpinner?(<Spinner/>):' '}  */}

  </>
   
  )
}

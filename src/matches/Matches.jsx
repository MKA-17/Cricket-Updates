import React, { useEffect, useState } from 'react'
import ScoreTile from './ScoreTile'
import { MATCH_API_KEY } from '../apis_keys';
import Nav from './Nav';
import Spinner from '../componenets/Spinner';
export default function Matches() {


    const [matches, setMatches] = useState('');
    const [spinner, setSpinner] = useState(true);
    const [refresh, setRefresh] = useState(true)
    const fetch_Matches = async()=>{

      try{
        let resp = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=17489d47-19d1-4e81-962a-44f60df929e3&offset=0`);
      if(resp.ok)
      {
        let respData = await resp.json();
        setMatches(respData);
      }
      else{
        setMatches('');
      }}
      catch(error)
      {
        console.log(error);
      }

      setSpinner(false);
    }

    useEffect(()=>{
      fetch_Matches();
      console.log("Inside useEffect", matches);

    },[refresh])
    


   try{ 
     return (
    <div>
      <Nav setRefresh={setRefresh} setSpinner={setSpinner}/>
      {spinner?(<Spinner/>):''}
      <br />

{
(!!matches?.data.length && typeof(matches) === 'object')?
matches?.data.map((e)=>{
    
    console.log("matches", e.matchType, e.venue, e.status, e.dateTimeGMT, e.teamInfo[0], e.teamInfo[1], !!e.score.length?e.score[0]:'' ,!!e.score.length?e.score[1]:'' )
    return (<ScoreTile format={e.matchType} venue={e.venue} status={e.status}  matchTime={e.dateTimeGMT} team1={e.teamInfo[0]} team2={e.teamInfo[1]} scoreTeam1={!!e.score.length?e.score[0]:''} scoreTeam2={!!e.score.length?e.score[1]:''} />)
}):''
     
     
}      
    </div>
  )}
  catch(error)
{
  return
  <>
  <Nav/>
  'Page not found'
  </> 
  
}
}

import React, { useState } from 'react';
import { options } from '../apis_keys';
import Spinner from '../componenets/Spinner';
import PlayerStatTable from './PlayerStatTable';
let x = 1
export default function PlayerAccordian({id, name, teamName, player_id}) {

 const [showStat, setShowstat] = useState(false);
 const [showSpinner, setShowspinner] = useState(true);

    
  return (
    <div>
        <div className="accordion" id="accordionExample"     
        onClick={(e)=>{
          !showStat? setShowstat(true) : setShowstat(false) 
          console.log(e.target,"meowwwww", x)
          x+=1}}
>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
        aria-expanded="false"
        aria-controls={`${id}`}
      >
        <h4>{name}</h4>  ({teamName})
      </button>
    </h2>
    <div
      id={`${id}`}
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body" id={`${player_id}`} >
      <h3>Batting Records</h3>
        <br />

        
      {showStat?(
         <>
       {showSpinner?( <Spinner/>):''}
      <PlayerStatTable player_id = {player_id} format={'batting'} player_name={name} setShowspinner={setShowspinner}/>
       <br />  
       <h3>Bowling Records</h3>
       {/* {console.log("ghjkhgj")} */}
       <PlayerStatTable player_id = {player_id} format={'bowling'} player_name={name} />
       </> ):''}
      </div>
    </div>
  </div>

</div>
    </div>
  )
}

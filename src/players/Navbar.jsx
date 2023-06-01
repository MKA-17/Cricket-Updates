import React, { useEffect, useState } from 'react'

export default function Navbar({setPlayer}) {
 
    const [player_name, setPlayer_name] = useState('');

    useEffect(()=>{
        console.log(player_name);
    }, [player_name])

    return (
    <nav className="navbar navbar-expand-lg bg-lightgreen my-3">
    <div className="container">
      <nav className="d-flex mx-auto">
        <input className="form-control me-2" type="search" placeholder="Search player..." aria-label="Search"   onChange={(e)=>{
            e.preventDefault();
            setPlayer_name(e.target.value);
        }}/>
        <button className="btn btn-outline-success" type="submit" onClick={()=>{
            setPlayer(()=>player_name)
        }}>Search</button>
      </nav>
    </div>
  </nav>
  )
}

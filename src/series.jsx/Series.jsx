import React, { useState, useEffect } from 'react'
import MatchTable from './MatchTable';
import Spinner from '../componenets/Spinner';
import { MATCH_API_KEY } from '../apis_keys';
// import { series } from '../apis_keys';
export default function Series() {

    const [series, setSeries] = useState('');
    const [spinner, setSpinner] = useState(true);

    const fetch_Series = async()=>{

      try{
        let resp = await fetch(`https://api.cricapi.com/v1/series?apikey=${MATCH_API_KEY}&offset=0`);
      if(resp.ok)
      {
        let respData = await resp.json();
        setSeries(respData);
      }
      else{
        setSeries('');
        console.log(series)
      }}
      catch(error)
      {
        console.log(error);
      }

      setSpinner(false);
    }

    useEffect(()=>{
      fetch_Series();
      console.log("Inside useEffect", series);

    },[])

  try{return (
    <div>
        <br />
        <h3>Series List</h3>
        <br />
        {spinner?(<Spinner/>):''}
        {(typeof(series === 'object')&&!!series?.data.length )?
        (<MatchTable data={series.data}/>):
        'Page not found'
        }
        </div>
  )}
  catch(error)
  {
    console.log(error);
    return 'Page not found.';
  }
}

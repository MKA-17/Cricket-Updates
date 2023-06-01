import React, { useEffect, useState } from 'react'
import { News_API_KEY } from '../apis_keys';
import NewsTile from './NewsTile';
import { v4 as uuidv4 } from 'uuid';
import Spinner from '../componenets/Spinner';
export default function News() {
  const [news, setNews] = useState('');
  //console.log(News_API_KEY)
  const [spinner, setSpinner] = useState(true);


  const fetch_News = async () => {
    try {
      let resp = await fetch(`https://newsapi.org/v2/everything?q=${'cricket'}&apiKey=${News_API_KEY}`);

      if (resp.status === 200) {
        let data = await resp.json();
        console.log(data);
        setNews(()=>{
          return data.articles;
        })

      }
      else console.log("status not ok!");
    }
    catch (error) {
      console.log(error);
    }

    setSpinner(false);
  }

  useEffect(() => {
    fetch_News();
    console.log(news)
  }
    , []);

  return (
    <>
    
    <br />
    <h1>Cricket News and Editorials</h1>
    <br />
    {spinner?(<Spinner/>):''}
  { 
     !!news ? news.map( (e)=> (<NewsTile id={uuidv4()} title={e.title} url={e.url} urlToImage={e.urlToImage} content={e.content} publishedAt={e.publishedAt} />))
  : 'Page not found.'
    } 
   </>
  )
}

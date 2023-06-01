import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { options } from '../apis_keys';
import Table from './Table';
import Spinner from '../componenets/Spinner';
export default function PlayerRankings() {
    console.log("format ", window.location.pathname.split('/').reverse()[0]);
    const [rank_data, setRank_data] = useState('');
    const [spinner, setSpinner] = useState(true);

    let type = ['batsmen', 'bowlers', 'allrounders'];
    const fetch_Rankings = async (format) => {
        let obj = {}
        try {

            for (let i of type) {
                let resp = ((await fetch(`https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/${i}?formatType=${format}`, options)));

                if (resp.ok) {
                    let data = await (resp.json());
                    obj[i] = data;
                }
                else
                {

                console.log("Page Not found");
                return ''
}
            }
            console.log("meowwwwww", obj)
            // setRank_data(()=>obj);



        }

        catch (error) {
            console.log(error);

        }

        //console.log("Ranking of bat bowl field: ",rank_data);
        return obj


    }

    useEffect(() => {

        fetch_Rankings(window.location.pathname.split('/').reverse()[0])
            .then(data => {
                setSpinner(false);
                setRank_data(() => data);
                console.log("Ranking of bat bowl field: ", rank_data);
            });

            return ()=>{}


    }, [window.location.pathname.split('/').reverse()[0]])

  try { return (
        <div>
            <Navbar />
            <br />
            <br />
            {spinner ? (<Spinner />) : ''}

            {


                (!!rank_data && typeof (rank_data) === 'object') ? (type.map((e) => (
                    <>
                    {console.log("inside return", rank_data)}
                        <h3>{`${e.toUpperCase()} Rankings`}</h3>
                        <Table rank_data={rank_data[e]} />
                    </>
                ))) : "Page not found."

            }
        </div>
    )}
    catch(error)
    {
        return "Page not found"
    }
}

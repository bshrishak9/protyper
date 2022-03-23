import React, { useState } from 'react'
import Profiles from './profile';
import { Leaderboard } from './database';

export default function Board() {

    const [period] = useState(0);

  

  return (
    <div className="board">
       
        <h1 className='leaderboard'>Leaderboard</h1>

        <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>

    </div>
  )
}



function between(data, between){
    
    let filter = data.filter(val => {
        let userScore = new Date(val.dt);
        if (between == 0) return val;
    })

    // sort with asending order
    return filter.sort((a, b) => {
        if ( a.score === b.score){
            return b.score - a.score;
        } else{
            return b.score - a.score;
        }
    })

}
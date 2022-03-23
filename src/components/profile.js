import React from 'react'

export default function Profiles({ Leaderboard }) {
  return (
        <div id="profile">
            <div className='flex'>
              <div className='item'>
                 <h1>Participaints</h1>
              </div>
              <div className='item'>
               <h1>  Scores(wpm) </h1> 
              </div>
                </div>
            {Item(Leaderboard)}
        </div>
  )
}

function Item(data){
    return (

        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.img} alt="" />
            
                            <div className="info">
                                <h3 className='name text-dark'>{value.name}</h3>    
                                <span>{value.class}</span>
                            </div>                
                        </div>
                        <div className="item">
                            <span>{value.score}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}
'use client'
import React, { useEffect, useState } from 'react';


import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://myqgvtknkeilmcxriqhc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15cWd2dGtua2VpbG1jeHJpcWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4NTUwODcsImV4cCI6MjAyOTQzMTA4N30.GmiWzn2Lr6fD99UvA69qmS7NyAijGh0Zb_-EGKEXGMY'
const supabase = createClient(supabaseUrl, supabaseKey)

const Page = () => {


    useEffect(()=>{
        const fetchData = async()=>{

     const {data,error} = await supabase.from('Stats').select('*').eq('id',1)
     

     const dam = data[0]

     setTeam1(dam.team1)
     setTeam2(dam.team2)
     setMul1(dam.mul1)
     setMul2(dam.mul2)
    }


     fetchData()

    }


    
    
    ,[])





  const [team1, setTeam1] = useState('');
  const [mul1, setMul1] = useState('');
  const [team2, setTeam2] = useState('');
  const [mul2, setMul2] = useState('');


  const save = async()=>{

    const pack ={
        team1 : team1,
        team2 : team2,
        mul1 : mul1,
        mul2 : mul2
    }


   const { error } = await supabase
  .from('Stats')
  .update(pack)
  .eq('id', 1)

  }

  const handleSubmit = (event) => {
    event.preventDefault();


    save()


 
  };

  return (
    <div style={{ backgroundImage: 'url(background.jpg)', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit}>
        <div>
          
          <input className='border-black border-1 p-2'
            type="text"
            id="team1"
            value={team1}
            onChange={(e) => setTeam1(e.target.value)}
          />
        </div>
        <div>
      
          <input
            type="text"
            id="mul1"
            value={mul1}
            onChange={(e) => setMul1(e.target.value)}
          />
        </div>
        <div>
      
          <input
            type="text"
            id="team2"
            value={team2}
            onChange={(e) => setTeam2(e.target.value)}
          />
        </div>
        <div>
        
          <input
            type="text"
            id="mul2"
            value={mul2}
            onChange={(e) => setMul2(e.target.value)}
          />
        </div>
        <br></br>
        <button type="submit">Change</button>
      </form>
    </div>
  );
};

export default Page;

'use client'
import React, { useEffect, useState } from 'react';

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://myqgvtknkeilmcxriqhc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15cWd2dGtua2VpbG1jeHJpcWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4NTUwODcsImV4cCI6MjAyOTQzMTA4N30.GmiWzn2Lr6fD99UvA69qmS7NyAijGh0Zb_-EGKEXGMY'
const supabase = createClient(supabaseUrl, supabaseKey)

const Page = () => {
  // State variables for the first form
  const [team1, setTeam1] = useState('');
  const [mul1, setMul1] = useState('');
  const [team2, setTeam2] = useState('');
  const [mul2, setMul2] = useState('');

  // State variables for the second form
  const [team3, setTeam3] = useState('');
  const [mul3, setMul3] = useState('');
  const [team4, setTeam4] = useState('');
  const [mul4, setMul4] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data for the first form
      const { data: data1, error: error1 } = await supabase.from('Stats').select('*').eq('id', 1)
      if (error1) {
        console.error('Error fetching data for Stats:', error1.message)
        return
      }

      const row1 = data1[0]
      setTeam1(row1.team1)
      setMul1(row1.mul1)
      setTeam2(row1.team2)
      setMul2(row1.mul2)

      // Fetch data for the second form
      const { data: data2, error: error2 } = await supabase.from('Stats2').select('*').eq('id', 1)
      if (error2) {
        console.error('Error fetching data for Stats2:', error2.message)
        return
      }

      const row2 = data2[0]
      setTeam3(row2.team1)
      setMul3(row2.mul1)
      setTeam4(row2.team2)
      setMul4(row2.mul2)
    }

    fetchData()
  }, [])

  const saveData = async (tableName, pack) => {
    const { error } = await supabase.from(tableName).update(pack).eq('id', 1)
    if (error) {
      console.error(`Error updating data for ${tableName}:`, error.message)
    }
  }

  const handleSubmit = (event, tableName, pack) => {
    event.preventDefault();
    saveData(tableName, pack)
  };

  return (
    <div style={{ backgroundImage: 'url(background.jpg)', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={(e) => handleSubmit(e, 'Stats', { team1, team2, mul1, mul2 })}>
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
        <button type="submit">Change Stats</button>
      </form>

      <form onSubmit={(e) => handleSubmit(e, 'Stats2', { team1: team3, team2: team4, mul1: mul3, mul2: mul4 })}>
        <div>
          <input className='border-black border-1 p-2'
            type="text"
            id="team3"
            value={team3}
            onChange={(e) => setTeam3(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            id="mul3"
            value={mul3}
            onChange={(e) => setMul3(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            id="team4"
            value={team4}
            onChange={(e) => setTeam4(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            id="mul4"
            value={mul4}
            onChange={(e) => setMul4(e.target.value)}
          />
        </div>
        <br></br>
        <button type="submit">Change Stats2</button>
      </form>
    </div>
  );
};

export default Page;

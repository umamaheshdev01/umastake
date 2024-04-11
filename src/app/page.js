'use client'
import React, { useState } from 'react';

const Page = () => {
  const [m1, setM1] = useState('');
  const [m2, setM2] = useState('');
  const [a, setA] = useState('');
  const [s1, setS1] = useState('');
  const [s2, setS2] = useState('');
  const [t2, setT2] = useState('');
  const [t1, setT1] = useState('');
  const [t12, setT12] = useState('');
  const [toggle, setToggle] = useState(true);

  const calc = () => {
    const numM1 = parseFloat(m1);
    const numM2 = parseFloat(m2);
    const numA = parseFloat(a);

    const total = numM1 + numM2;
    const split = numA / total;

    const split1 = split * numM2;
    const split2 = split * numM1;

    setS1(Math.round(split1).toString());
    setS2(Math.round(split2).toString());

    const team1 = split1 * numM1;
    const team2 = split2 * numM2;

    const tt1 = (team1 - a) / 2;
    const tt2 = (team2 - a) / 2;

    setT1(Math.round(tt1).toString());
    setT2(Math.round(tt2).toString());

    const both = (team1 + team2 - a) / 2;
    setT12(Math.round(both).toString());

    setToggle((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Team Split Calculator</h1>
        <div className="mb-4">
          <label htmlFor="m1" className="block text-sm font-medium text-gray-700 mb-2">Team 1 X</label>
          <input
            id="m1"
            type="number"
            value={m1}
            onChange={(e) => setM1(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="m2" className="block text-sm font-medium text-gray-700 mb-2">Team 2 X</label>
          <input
            id="m2"
            type="number"
            value={m2}
            onChange={(e) => setM2(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
          <input
            id="amount"
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          onClick={calc}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Calculate
        </button>
        {toggle && (
          <div className="mt-6">
            <h1 className="text-xl font-bold mb-4">The split Ratio</h1>
            <div className="flex justify-between mb-2">
              <input value={s1} readOnly className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              <input value={s2} readOnly className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <h1 className="text-xl font-bold mb-4">Team Wins</h1>
            <div className="flex justify-between">
              <input value={t1} readOnly className="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              <input value={t2} readOnly className="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              <input value={t12} readOnly className="w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
          </div>
        )}

        {!toggle && (
  <div>
    <br></br>
    <h1 className="text-xl font-bold mb-4">The Original Ratio</h1>
    
  
    <div className="mb-4">
      <h1 className="text-lg font-bold">Wins</h1>
      <input
        value={Math.round(((parseFloat(a) / 2) * parseFloat(m1) - parseFloat(a)) / 2)}
        readOnly
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
    <div className="mb-4">
      
      <input
        value={Math.round(((parseFloat(a) / 2) * parseFloat(m2) - parseFloat(a)) / 2)}
        readOnly
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
    <div>
     
      <input
        value={Math.round(
          Math.round(((parseFloat(a) / 2) * parseFloat(m2)) + Math.round((parseFloat(a) / 2) * parseFloat(m1)) - parseFloat(a)) / 2
        )}
        readOnly
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default Page;

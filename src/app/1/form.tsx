"use client";
import {useEffect,useState} from "react";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { cn } from "../utils/cn";


import { createClient } from '@supabase/supabase-js'
import Link from "next/link";
const supabaseUrl = 'https://myqgvtknkeilmcxriqhc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15cWd2dGtua2VpbG1jeHJpcWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4NTUwODcsImV4cCI6MjAyOTQzMTA4N30.GmiWzn2Lr6fD99UvA69qmS7NyAijGh0Zb_-EGKEXGMY'
const supabase = createClient(supabaseUrl, supabaseKey)




export function SignupFormDemo() {

  supabase
  .channel('room1')
  .on('postgres_changes', { event: '*', schema: 'Stats2' }, payload => {
    
     const dam = payload.new

     SetT1name(dam.team1)
     SetT2name(dam.team2)
     setM1(dam.mul1)
     setM2(dam.mul2)


     const apk = Math.round(Math.round(2000/dam.mul1)+Math.round(2000/dam.mul2))

     setA(apk)



  })
  .subscribe()


  


  useEffect(()=>{
   

   const fetchData = async()=>{

     const {data,error} = await supabase.from('Stats2').select('*').eq('id',1)
     

     const dam = data[0]
     

     SetT1name(dam.team1)
     SetT2name(dam.team2)
     setM1(dam.mul1)
     setM2(dam.mul2)


     const apk = Math.round(Math.round(2000/dam.mul1)+Math.round(2000/dam.mul2))

     setA(apk)



   }

   
   fetchData()



  },[])

    const [team1,SetT1name] = useState('Team 1')
    const [team2,SetT2name] = useState('Team 2')
    const [m1, setM1] = useState('');
  const [m2, setM2] = useState('');
  const [a, setA] = useState('');
  const [s1, setS1] = useState('');
  const [s2, setS2] = useState('');
  const [t2, setT2] = useState('');
  const [t1, setT1] = useState('');
  const [t12, setT12] = useState('');
  const [toggle, setToggle] = useState(true);

  useEffect(()=>{

    const apk = Math.round(Math.round(2000/m1)+Math.round(2000/m2))

     setA(apk)

  },[m1,m2])

  useEffect(()=>{
    
     calc()
  },[a,m1,m2])

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

  }











  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-h-[100vh] max-w-md w-[85vw] md:w-full mx-auto  rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border-blue-400 border-[1px]">
      <h2 className="font-bold text-xl text-neutral-800 ml-1 dark:text-neutral-200">
        Team Split Calculator
      </h2>
    

      <form className="my-6 mx-2" onSubmit={handleSubmit}>
        <div className="flex flex-row  space-y-0 space-x-2 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">{team1}</Label>
            <Input id="firstname" placeholder="-" type="text"
            value={m1}
            onChange={(e) => setM1(e.target.value)} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">{team2}</Label>
            <Input id="lastname" placeholder="-" type="text"
            value={m2}
            onChange={(e) => setM2(e.target.value)} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Amount</Label>
          <Input id="email" placeholder="-" type="text"
            value={a}
            onChange={(e) => setA(e.target.value)} />
        </LabelInputContainer>
       
       

      <Link href='/'> <button
          className="mb-5 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="button" 
        >
          Switch Match &rarr;
          <BottomGradient />
        </button></Link> 

        

       {toggle && <div>
            <div className="flex flex-row  space-y-0 space-x-2 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">{team1} Split</Label>
           <Input id="firstname" placeholder="-" type="text" value={isNaN(s1) ? 0 : s1} readOnly />

          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">{team2} Split</Label>
           <Input id="firstname" placeholder="-" type="text" value={isNaN(s2) ? 0 : s2} readOnly />

          </LabelInputContainer>
        </div>

      <div className="flex flex-row  space-y-0 space-x-2 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">{team1} Wins</Label>
            <Input id="firstname" placeholder="-" type="text" value={isNaN(t1) ? 0 : t1} readOnly />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">{team2} Wins</Label>
            <Input id="lastname" placeholder="-" type="text" value={isNaN(t2) ? 0 : t2} readOnly  />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Both Team Wins</Label>
          <Input id="email" placeholder="-" type="text" value={isNaN(t12) ? 0 : t12} readOnly  />
        </LabelInputContainer>
        


        </div>}

        {toggle || <div>
            <div className="flex flex-row  space-y-0 space-x-2 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">{team1} Split</Label>
           <Input id="firstname" placeholder="-" type="text" value={a ? (a/2): 0} readOnly />

          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">{team2} Split</Label>
           <Input id="firstname" placeholder="-" type="text" value={a ? (a/2) : 0} readOnly />

          </LabelInputContainer>
        </div>

      <div className="flex flex-row  space-y-0 space-x-2 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">{team1} Wins</Label>
            <Input id="firstname" placeholder="-" type="text" 
            value={Math.round(((parseFloat(a) / 2) * parseFloat(m1) - parseFloat(a)) / 2)}
        readOnly />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">{team2} Wins</Label>
            <Input id="lastname" placeholder="-" type="text" 
             value={Math.round(((parseFloat(a) / 2) * parseFloat(m2) - parseFloat(a)) / 2)}
             readOnly
             />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Both Team Wins</Label>
          <Input id="email" placeholder="-" type="text" 

 value={Math.round(
          Math.round(((parseFloat(a) / 2) * parseFloat(m2)) + Math.round((parseFloat(a) / 2) * parseFloat(m1)) - parseFloat(a)) / 2
        )}
        readOnly

          
            />
        </LabelInputContainer>
        
        </div>}


       

      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

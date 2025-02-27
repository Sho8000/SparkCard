'use client'

import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./ReadyToStart.css"

interface ReadyToStartProps{
  sectionTitle:string;
  message:string;
  btnText:string;
  attention:string;
}

interface Items {
  allData:ReadyToStartProps
}

export default function RedyToStartYourFinancialJourny(
  {allData}:Items
) {
  const [email, setEmail] = useState("");
  const {sectionTitle,message,btnText,attention}=allData

  const handleSubmit = async(e: any) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if(response.ok) {
      alert("Your address was sent!!");
      setEmail("");
    } else {
      console.log("failed");
    }
  }

  return (
    <section id="redyToStartYourFinancialJournySection" className="text-center">  
      <SectionTitle sectionTitle={sectionTitle}/>
      <p className="ReadySubText w-[60%] m-auto mt-[2rem]">{message}</p>
      <form className="formContainer w-[60%] flex m-auto justify-center gap-4 my-[1rem]" onSubmit={handleSubmit}>
        <input 
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          className="basis-1/2 border-2 border-black rounded-md p-2" type="email" placeholder="Enter your Email" />
        <button className="bg-black text-white p-2 text-sm rounded-md">{btnText}</button>
      </form>
      <p className="text-sm">{attention}</p>
    </section>
  );
}

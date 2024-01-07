"use client";

import "../input.css";
import { FormEvent, useState, useEffect } from "react";
import { Props } from "@/lib/types/props";

export default function StepEight({
  nextStep,
  previousStep,
  unitData,
  setUnitData,
}: Props) {
    const [keywordString, setKeywordString]= useState('')
    const [character, setCharacter] = useState(false)
    const [epicHero, setEpicHero] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const keywordArray = keywordString.split(/,|\n/)

    if (keywordArray.includes('character')) {
        if (keywordArray.includes('epic hero')){
            console.log("epic hero!")
        } else {
            console.log('character!')
        } 
    }  else (console.log(keywordArray)) 
// todo:create a method for capturing notes about characters, specifically: can't be a warlord or can't have enhancement abilities
    const formData={
        keywords: keywordArray
    }

    // console.log(formData);
  };

  const handleBack = () => {
    previousStep();
  };

  return (
    <form className="form-inputs" onSubmit={handleSubmit}>
      <h1>Keywords</h1>
      <textarea 
      className="keyword-area" 
      value={keywordString}
      name="keywords" 
      cols={30} 
      rows={10} 
      placeholder="Enter keywords seperated by a comma or new line"
      onChange={(e)=>setKeywordString(e.target.value)}
      />

      <button onClick={handleBack}>Back</button>
      <button type="submit">Submit</button>
    </form>
  );
}

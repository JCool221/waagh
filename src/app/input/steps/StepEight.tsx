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
  const [keywords, setKeywords] = useState<string[]>([])
    const [keywordString, setKeywordString]= useState<string>('')
 
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const keywordArray = keywordString.split(/,|\n/)
    setKeywords(keywordArray)
  }

  useEffect(()=>{
    const formData={keywords: keywords}
    setUnitData({...unitData, ...formData})
    nextStep();
  },[keywords])

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

      <button onClick={previousStep}>Back</button>
      <button type="submit">Submit</button>
    </form>
  );
}

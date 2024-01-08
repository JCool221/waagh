"use client";

import "../input.css";
import { FormEvent, useState } from "react";
import { Props } from "@/lib/types/props";

export default function StepEight({
  nextStep,
  previousStep,
  unitData,
  setUnitData,
}: Props) {
  const [keywords, setKeywords] = useState<string[]>([])
    const [keywordString, setKeywordString]= useState<string>('')
    const [character, setCharacter] = useState(false)
    const [epicHero, setEpicHero] = useState(false)
    const [warlord, setWarlord] = useState(false)
    const [enhancement, setEnhancement] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const keywordArray = keywordString.split(/,|\n/)
    setKeywords(keywordArray)

    if (keywordArray.includes('character')) {
        if (keywordArray.includes('epic hero')){
          setEpicHero(true)          
        } else {
          setCharacter(true)
               } 
    }  else (console.log(keywordArray)) 

  };

const handleFinalSubmit = () => {

    const formData={
        keywords: keywords,
        ...(warlord ? {warlordRestriction: 'true'}: {}),
        ...(enhancement ? {enhancementRestriction: 'true'}: {})
    }
    setUnitData({...unitData, ...formData})
    nextStep();
  }

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


      {epicHero && <div className="modal-backdrop">
      <div className="modal-checkbox">
      <label>
      <input 
      type="checkbox" 
      className="checkbox"
      name="warlordRestriction"
      checked={warlord}
      onChange={()=>setWarlord(!warlord)}
      />
        This character cannot be your warlord
      </label>
      <button
      className="modal-button" 
      onClick={handleFinalSubmit}
      >
        Complete
        </button>
      </div>
      </div>}

      {character && <div className="modal-backdrop">
      <div className="modal-checkbox">
      <label>
      <input 
      type="checkbox" 
      className="checkbox"
      name="enhancementRestriction"
      checked={enhancement}
      onChange={()=>setEnhancement(!enhancement)}
      />
        This character may not take enhancements
      </label>
      <button
      className="modal-button" 
      onClick={handleFinalSubmit}
      >
        Complete
        </button>
      </div>
      </div>}




      {character && <p>character</p>}
      
      <button onClick={handleBack}>Back</button>
      <button type="submit">Submit</button>
    </form>
  );
}

"use client";

import "../input.css";
import { FormEvent } from "react";
import { useState, useRef } from 'react'
import { Props } from "@/lib/types/props";
import Abilities from "@/lib/abilities/Abilities";

export default function StepSix({ nextStep, previousStep, unitData, setUnitData }: Props) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitButton, setSubmitButton] = useState<string | null>(null);
  const [abilities, setAbilities] = useState<string[]>([]);
  const type = 'unit'



  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (e.target instanceof HTMLFormElement) {
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());

        const updatedUnitData = {...unitData, ...formData}

        setUnitData(updatedUnitData)
        if (submitButton==='continue') {
          nextStep();
        } else if (submitButton==='addAnother') {
          formRef.current?.reset();
        }
      } else {
        console.error("e is not a form element, why?");
      }
      };
      
  const handleBack =()=> {
    previousStep();
  }


  return (
    // refactor for step six abilities, keywords are accesible under abilties.unit need to think about how to refactor the abilities component for that
    <form className="form-inputs"  ref={formRef} onSubmit={handleSubmit}>
      <h1>Abilities</h1>
      <div className="ability-form">
        <input
          type="text"
          id="ability-name"
          name="ability-name"
          className="ability-name"
          autoComplete="off"          
          placeholder="ability name"
        />
        <textarea 
        name="ability-text" 
        id="ability-text" 
        cols={30} 
        rows={10}
        placeholder="Enter the Ability Description"
        >
        </textarea>

      </div>
      <button onClick={handleBack}>Back</button>
      <button 
      type="submit" 
      name="continue"
      onClick={() => setSubmitButton('continue')}
      >
        Submit
        </button>
      <button 
      type="submit" 
      name="addAnother"
      onClick={()=> setSubmitButton('addAnother')}
      >
        Add Another
        </button>
        <Abilities type={type} abilities={abilities} setAbilities={setAbilities} />

        {/* abilities will go here but still needs refactored to add a set of keyword abilities.  or i'll make a new component, that might be easier at this point */}
    </form>
  );
}
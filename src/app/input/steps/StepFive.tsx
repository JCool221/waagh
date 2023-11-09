"use client";

import "../input.css";
import { FormEvent } from "react";
import { useState, useRef } from 'react'
import Abilities from "@/lib/abilities/Abilities";
import { Props } from "@/lib/types/props";

export default function StepFour({ nextStep, previousStep, unitData, setUnitData }: Props) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitButton, setSubmitButton] = useState<string | null>(null);

  const [abilities, setAbilities] = useState<string[]>([])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      if (e.target instanceof HTMLFormElement) {
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());

        const abilitiesString = abilities.join(',')
        formData.abilities = abilitiesString
        
        if (Array.isArray(unitData.melee)){
          unitData.melee.push(formData)
        } else {
          unitData.melee = [formData]
        }

        setUnitData(unitData)

        if(submitButton === 'addAnother') {
          formRef.current?.reset()
        } else if (submitButton === 'continue') {
          nextStep()
        }

      } else {
        console.error("e is not a form element, why?");
      }
  };

  const handleBack =()=> {
    previousStep();
  }


  return (
    // for step four we will be refactoring step three for ranged weapons (and then 5 will be melee)
    <form className="form-inputs"  ref={formRef} onSubmit={handleSubmit}>
      <h1>Melee Weapons</h1>
      <p className="instructions">submit empty if none</p>
      <div className="att-form">
        <input
          type="text"
          id="weapon"
          name="weapon"
          className="weapon-name"
          autoComplete="off"          
          placeholder="weapon name"
        />

        <div className="attributes">

          <div className="att-block">
            <label className="att-label" htmlFor="a">
              A
            </label>
            <input
              type="text"
              name="a"
              id="a"
              className="att-values"
              autoComplete="off"
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="ws">
              WS
            </label>
            <input
              type="text"
              name="ws"
              id="ws"
              className="att-values"
              autoComplete="off"
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="s">
              S
            </label>
            <input
              type="text"
              name="s"
              id="s"
              className="att-values"
              autoComplete="off"
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="ap">
              AP
            </label>
            <input
              type="text"
              name="ap"
              id="ap"
              className="att-values"
              autoComplete="off"
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="d">
              D
            </label>
            <input
              type="text"
              name="d"
              id="d"
              className="att-values"
              autoComplete="off"
            />
          </div>
        </div>
        <Abilities abilities={abilities} setAbilities={setAbilities}/>
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
    </form>
  );
}

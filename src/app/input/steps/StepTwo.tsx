"use client";

import "../input.css";
import { FormEvent } from "react"
import { Props } from "@/lib/types/props";

export default function StepTwo({ nextStep, previousStep, unitData, setUnitData }: Props) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const existingData = unitData;

    if(existingData){
      if (e.target instanceof HTMLFormElement) {
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());

        const updatedUnitData = {...unitData, ...formData}

        setUnitData(updatedUnitData)
        nextStep();
      } else {
        console.error("e is not a form element, why?");
      }
    } else {
      console.error('no unit data found in storage')
    }
  };

  const handleBack =()=> {
    previousStep();
  }

  return (
    <form className="form-inputs" onSubmit={handleSubmit}>
      <label htmlFor="name">Unit name</label>
      <input
        type="text"
        name="name"
        id="name"
        autoComplete="off"
        className="form-name"
        placeholder="enter name"
        required
      />
      <label htmlFor="points">Points</label>
      <input
        type="text"
        name="points"
        id="points"
        pattern="[0-9]*"
        autoComplete="off"
        className="form-points"
        placeholder="enter points"
        required
      />
      <button onClick={handleBack}>Back</button>
      <button type="submit">Submit</button>
    </form>
  );
}

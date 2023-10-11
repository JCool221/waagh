"use client";

import "../input.css";
import { FormEvent } from "react"

interface StepTwoProps {
  nextStep: () => void;
  previousStep: () => void
}

export default function StepTwo({ nextStep, previousStep }: StepTwoProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const existingData = localStorage.getItem('unit');

    if(existingData){
      const existingUnitData = JSON.parse(existingData)
      if (e.target instanceof HTMLFormElement) {
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());

        const updatedUnitData = {...existingUnitData, ...formData}

        console.log(updatedUnitData);
        localStorage.setItem("unit", JSON.stringify(updatedUnitData));
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

"use client";

import "../input.css";
import { FormEvent } from "react"

export default function StepTwo() {
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
      } else {
        console.error("e is not a form element, why?");
      }
    } else {
      console.error('no unit data found in storage')
    }
  };

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
      <button type="submit">Submit</button>
    </form>
  );
}

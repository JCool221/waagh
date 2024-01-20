"use client";

import "../input.css";
import { FormEvent } from "react";
import { Props } from "@/lib/types/props";

export default function StepTwo({
  nextStep,
  previousStep,
  unitData,
  setUnitData,
}: Props) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUnitData({
      ...unitData,
      ...Object.fromEntries(new FormData(e.target as HTMLFormElement)),
    });

    nextStep();
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
        autoFocus
        required
      />
      <button onClick={previousStep}>Back</button>
      <button type="submit">Submit</button>
    </form>
  );
}

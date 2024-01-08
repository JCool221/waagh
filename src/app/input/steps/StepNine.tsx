"use client";

import "../input.css";
import { FormEvent, useState } from "react";
import { Props } from "@/lib/types/props";
// import data for build purposes
import unitData from "@/lib/teststuff/testdata.json"

export default function StepNine({
  nextStep,
  previousStep,
  // unitData,
  setUnitData,
}: Props) {

  const handleSubmit=(e: FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    console.log(Object.fromEntries(new FormData(e.target as HTMLFormElement)))
  }


    return(
        <form className="form-inputs" onSubmit={handleSubmit}>
          <label >enter minimum amount of {unitData.name}
          <input 
          type="text" 
          name="minSize"
          size={1}
          className="checkbox-numeral"
          />
          </label>
          <label >enter maximum amount of {unitData.name}
          <input 
          type="text" 
          name="maxSize"
          size={1}
          className="checkbox-numeral"
          />
          </label>

          <button type="submit">Submit</button>
        </form>
    )
}

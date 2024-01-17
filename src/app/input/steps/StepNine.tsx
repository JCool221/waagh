"use client";

import "../input.css";
import { FormEvent, useState } from "react";
import { Props } from "@/lib/types/props";

export default function StepNine({
  nextStep,
  previousStep,
  unitData,
  setUnitData,
}: Props) {
  const [another, handleAnother] = useState(false)
  const handleSubmit=(e: FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    setUnitData({
      ...unitData,
      ...Object.fromEntries(new FormData(e.target as HTMLFormElement))})
      nextStep();
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
          <label>
            for
            <input 
            type="text" 
            name="minPoints"
            size={1}
            className="checkbox-numeral"
            />
            points
          </label>
          <label >enter maximum amount of {unitData.name}
          <input 
          type="text" 
          name="maxSize"
          size={1}
          className="checkbox-numeral"
          />
          </label>
          <label>
            for
            <input 
            type="text" 
            name="maxPoints"
            size={1}
            className="checkbox-numeral"
            />
            points
          </label>

          <button type="submit">Submit</button>
          <button onClick={previousStep}></button>
        </form>
    )
}

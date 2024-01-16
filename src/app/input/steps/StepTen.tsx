"use client";

import "../input.css";
import { FormEvent, useState } from "react";
import { Props } from "@/lib/types/props";
import unitData from '@/lib/teststuff/testdata.json'

export default function StepTen({
  nextStep,
  previousStep,
  // unitData,
  setUnitData,
}: Props) {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('hello world')
  }

  const addAdditionalWargear = () => {
    console.log('this will pop open a modal to add additional wargear')
  }
    return(
      <form className="form-inputs" onSubmit={handleSubmit}>
        <h1>Wargear Options</h1>
        <ul> ranged
          {unitData.ranged.map((item, index) => (
            <li key={index}>{item.weapon}</li>
          ))}
        </ul>
        <ul>melee
          {unitData.melee.map((item,index)=> (
            <li key={index}>{item.weapon}</li>
          ))}
        </ul>
        <button type="button" onClick={addAdditionalWargear}>additional wargear</button>
        <button type="submit">submit</button>
        <button type="button" onClick={previousStep}>back</button>
      </form>
    )
}

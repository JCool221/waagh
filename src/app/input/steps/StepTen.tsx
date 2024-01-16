"use client";

import "../input.css";
import { FormEvent, useState } from "react";
import { Props } from "@/lib/types/props";
import unitData from "@/lib/teststuff/testdata.json"

export default function StepTen({
  nextStep,
  previousStep,
  // unitData,
  setUnitData,
}: Props) {
  const [wargear, setWargear] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(Object.fromEntries(new FormData(e.target as HTMLFormElement)))
    // setUnitData({
    //   ...unitData,
    //   ...Object.fromEntries(new FormData(e.target as HTMLFormElement))
    // })
    // nextStep()
  }

    return(
      <form className="form-inputs" onSubmit={handleSubmit}>
        <h1>Standard loadouts</h1>
        <p>for linked items select either mode</p>

        {unitData.attributes.map((item: any, index: number) =>(
        <div key={index}>
          <h1 key={index}>the {item.model} is armed with</h1>
        <h1> ranged</h1>
          <select 
          name={`ranged.${item.model}`}
          id={`ranged.${item.model}`}
          autoComplete="off"
          >

          {unitData.ranged.map((item: any, index: number) => (
            <option key={index}>{item.weapon}</option>
            ))}
            </select>
        
        <h1>melee</h1>
        <select 
        name={`melee.${item.model}`}
        id={`melee.${item.model}`}
        autoComplete="off"
        >


          {unitData.melee.map((item:any,index:number)=> (
            <option key={index}>{item.weapon}</option>
            ))}

            </select>
            </div>
            ))}

            {wargear && (
              <div className="modal-backdrop">
                <div className="modal-body">
                <p>taking a break but this shall have things and stuff soon!!!</p>
                <button 
                className="modal-button"
                onClick={()=>setWargear(!wargear)}
                >close</button>
                </div>
              </div>
            )}


        <button type="button" onClick={()=>setWargear(!wargear)}>additional wargear</button>
        <button type="submit">submit</button>
        <button type="button" onClick={previousStep}>back</button>
      </form>
    )
}

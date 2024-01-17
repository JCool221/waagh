"use client";

import "../input.css";
import { FormEvent, useState, useEffect } from "react";
import { Props } from "@/lib/types/props";
import unitData from "@/lib/teststuff/testdata.json"

export default function StepTen({
  nextStep,
  previousStep,
  // unitData,
  setUnitData,
}: Props) {
  const [wargear, setWargear] = useState(false)
  const [wargearName, setWargearName] = useState('')
  const [wargearEffect, setWargearEffect] = useState('')
  const [modalData, setModalData] = useState<any|null>([])
  const [wargearData, setWargearData] = useState()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(Object.fromEntries(new FormData(e.target as HTMLFormElement)))
    setWargearData({
      ...Object.fromEntries(new FormData(e.target as HTMLFormElement)),
      ...modalData
    })
    console.log(wargearData)
    // nextStep()
  }

  useEffect(()=>{console.log(wargearData)},[wargearData])

  const addAnother = () => {
    const itemData = [{[wargearName]: wargearEffect}]
    setModalData([...modalData, ...itemData])
  }

  useEffect(()=>{
    console.log(modalData)
    setWargearName('')
    setWargearEffect('')
  },[modalData])

    return(
      <form className="form-inputs" onSubmit={handleSubmit}>
        <p>Standard loadouts:</p>
        <p>for linked items select either mode</p>

        {unitData.attributes.map((item: any, index: number) =>(
        <div key={index}>
          <p key={index}>the {item.model} is armed with</p>
        <p>ranged</p>
          <select 
          name={`ranged.${item.model}`}
          id={`ranged.${item.model}`}
          autoComplete="off"
          >

          {unitData.ranged.map((item: any, index: number) => (
            <option key={index}>{item.weapon}</option>
            ))}
            </select>

            <div className="selection-override">
          <p>and can be replaced with: </p>
            <input 
            className="selection-input"
            type="text" 
            name={`rangedOptionValue.${item.model}`}
            autoComplete="off"
            />          
            <p>for every</p>
            <input 
            className="selection-input"
            type="text" 
            name={`rangedOptionValue.${item.model}`}
            autoComplete="off"
            />
            <p>models</p>
            </div>
            <p>(hold Ctrl or Cmd to select multiple items) </p>
          <select 
          multiple
          name={`rangedOptions.${item.model}`}
          id={`rangedOptions.${item.model}`}
          autoComplete="off"
          >

          {unitData.ranged.map((item: any, index: number) => (
            <option key={index}>{item.weapon}</option>
            ))}
            </select>

        <p>melee</p>
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
                  <p className="modal-title">Enter the item's name</p>
                  <input 
                  className="modal-input"
                  type="text" 
                  name="name"
                  value={wargearName}
                  onChange={(e)=> setWargearName(e.target.value)}
                  />
                  <p>Enter the item's effect</p>
                  <textarea 
                  className="modal-input"
                  name="effect" 
                  id="effect" 
                  cols={30} 
                  rows={10} 
                  value={wargearEffect}
                  onChange={(e)=> setWargearEffect(e.target.value)}
                  />
                  <button
                  className="modal-button"
                  type="button"
                  onClick={addAnother}
                  >
                    add another</button>
                  <button
                  className="modal-button"
                  type="button"
                  onClick={()=> {addAnother(), setWargear(!wargear)}}
                  >
                    done</button>
                <button 
                className="modal-button"
                type="button"
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

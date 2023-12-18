"use client"

import "../input.css"
import { FormEvent, useEffect, useState } from "react"
import { Props } from "@/lib/types/props"
import CheckBoxWithInput from "@/lib/checkboxes/checkboxwithinput/CheckBoxWithInput"
import CheckboxWithoutInput from "@/lib/checkboxes/checkboxwithoutinput/CheckboxWithoutInput"


export default function StepSeven({ nextStep, previousStep, unitData, setUnitData}: Props) {
    const [userInput, setUserInput] = useState<Record<string, string>[]>([])
    const [formInput, setFormInput] = useState<Record<string, string>[]>([])

    useEffect(() =>{console.log(formInput)}, [formInput])
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (e.target instanceof HTMLFormElement) {  
            console.log(userInput)
            // if (formInput.length===0) {
            //     setFormInput([userInput])
            // } else {
            //     setFormInput([...formInput, userInput])
            // }
             } else {
            console.error("e is not a form element, why?")
        }
    }

    const handleBack = () => {
        previousStep();
    }

    return (
        <form className="form-inputs" onSubmit={handleSubmit}>
            <h1>Other stuff</h1>
                <CheckBoxWithInput 
                label="invuln" 
                checkboxId="invuln" 
                inputId="invuln"
                userInput={userInput}
                setUserInput={setUserInput}
                />
                <CheckboxWithoutInput
                label="leader"
                checkboxId="leader"
                userInput={userInput}
                setUserInput={setUserInput}
                />

            <button onClick={handleBack}>Back</button>
            <button type="submit" >Submit</button>
        </form>
    )
}

"use client"

import "../input.css"
import { FormEvent, useState } from "react"
import { Props } from "@/lib/types/props"
import CheckBoxWithInput from "@/lib/checkboxwithinput/CheckBoxWithInput"

export default function StepSeven({ nextStep, previousStep, unitData, setUnitData}: Props) {
    const [userInput, setUserInput] = useState<Record<string, string>>({})


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (e.target instanceof HTMLFormElement) {  
            console.log(userInput)
            console.log("refactoring")
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

            <button onClick={handleBack}>Back</button>
            <button type="submit" >Submit</button>
        </form>
    )
}

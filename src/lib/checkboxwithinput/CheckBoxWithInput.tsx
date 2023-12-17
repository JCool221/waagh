"use client"

import { useState, useEffect, ChangeEvent, Dispatch, SetStateAction } from "react"

interface CheckboxWithInputProps {
    label: string;
    checkboxId: string;
    inputId: string;
    userInput: Record<string, string > | null;
    setUserInput: Dispatch<SetStateAction<Record<string, string>>>;
}

export default function CheckBoxWithInput({
    label, 
    checkboxId, 
    inputId,
    userInput,
    setUserInput
}: CheckboxWithInputProps) {

    const [isChecked, setIsChecked] = useState(false)
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        // console.log(checkboxId,': ',inputValue)
        let myObject: Record<string, string> | null = null
        myObject = { [checkboxId]: inputValue }
        setUserInput(myObject)
    }, [inputValue])

    const handleSelection = () => {
        setIsChecked((prev) => !prev)
        setInputValue('')
    }
    
    const handleInputChange =(e: ChangeEvent<HTMLInputElement>)=> {
        setInputValue(e.target.value)
    }

    return(
        <div>
            <label>
                <input 
                type="checkbox" 
                id={checkboxId}
                checked={isChecked}
                onChange={handleSelection}
                />
                {label}
            </label>
            {isChecked && (
                <input 
                type="text" 
                id={inputId}
                value={inputValue}
                onChange={handleInputChange}
                />
            )}
        </div>
    )
}
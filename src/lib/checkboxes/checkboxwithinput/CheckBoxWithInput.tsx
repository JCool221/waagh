"use client"

import '../checkboxes.css'

import { useState, useEffect, ChangeEvent, Dispatch, SetStateAction } from "react"

interface CheckboxWithInputProps {
    label: string;
    checkboxId: string;
    inputId: string;
    userInput: Record<string, string >[] | null;
    setUserInput: Dispatch<SetStateAction<Record<string, string>[]>>;
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
        let myObj: Record<string, string> | null = null
        myObj = { [checkboxId]: inputValue }
        setUserInput([...inputValue, myObj])
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
            <label className="checkbox-label">
                <input 
                className="checkbox"
                type="checkbox" 
                id={checkboxId}
                checked={isChecked}
                onChange={handleSelection}
                />
                {label}
            </label>
            {isChecked && (
                <input 
                className="checkbox-text-input"
                type="text" 
                autoComplete='off'
                id={inputId}
                value={inputValue}
                onChange={handleInputChange}
                />
            )}
        </div>
    )
}
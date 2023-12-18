"use client"

import "../checkboxes.css"
import { useState, useEffect, ChangeEvent, Dispatch, SetStateAction } from "react"
 interface CheckboxWithoutInputProps {
    label: string;
    checkboxId: string;
    userInput: Record<string, string>[] | null;
    setUserInput: Dispatch<SetStateAction<Record<string, string>[]>>;
 }

export default function CheckboxWithoutInput({
    label,
    checkboxId,
}: CheckboxWithoutInputProps) {

    const [isChecked, setIsChecked] = useState(false)

    useEffect(()=>{
        let myObj: Record<string, boolean> | null = null
        myObj = { [checkboxId]: isChecked}
        console.log(myObj)

    }, [isChecked])

    const handleCheckboxChange =()=> {
        setIsChecked(!isChecked)
    }

    return(
        <div>
            <label className="checkbox-label">
                <input 
                className="checkbox"
                type="checkbox" 
                id={checkboxId}
                checked={isChecked}
                onChange={handleCheckboxChangex}
                 />
                 {label}
            </label>
        </div>
    )
}
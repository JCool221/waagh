'use client'

import "../input.css";
import { FormEvent } from 'react'

interface StepOneProps {
    nextStep: () => void;
}

export default function StepOne({ nextStep }: StepOneProps) {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.removeItem('unit')
        if (e.target instanceof HTMLFormElement) {
            const form = new FormData(e.target);
            const formData = Object.fromEntries(form.entries());
            console.log(formData);
            localStorage.setItem("unit", JSON.stringify(formData));
            nextStep();
        } else {
            console.error("e is not a form element, why?");
        }
    };

 return (
    // TODO: refactor this to be a menu
    <form className="form-inputs" onSubmit={handleSubmit}>
        <h1>Welcome to the new unit wizard</h1>
        <label htmlFor="faction">Select your faction</label>
        <input 
        type="text" 
        name="faction"
        id="faction"
        autoComplete="off"
        className="form-name"
        placeholder="enter faction"
        required
        />
    <button type="submit">Submit</button>
    </form>
 )   
}
"use client";

import "../input.css";
import { FormEvent } from "react";
import { useState, useRef } from 'react'

interface StepTwoProps {
  nextStep: () => void;
  previousStep: () => void;
}

export default function StepThree({ nextStep, previousStep }: StepTwoProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitButton, setSubmitButton] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const existingData = localStorage.getItem('unit');

    if(existingData){
      const existingUnitData = JSON.parse(existingData)
      if (e.target instanceof HTMLFormElement) {
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());
        
        if (Array.isArray(existingUnitData.attributes)){
          existingUnitData.attributes.push(formData)
        } else {
          existingUnitData.attributes = [formData]
        }

        console.log(existingUnitData);
        localStorage.setItem("unit", JSON.stringify(existingUnitData));

        if(submitButton === 'addAnother') {
          formRef.current?.reset()
        } else if (submitButton === 'continue') {
          nextStep()
        }

      } else {
        console.error("e is not a form element, why?");
      }
    } else {
      console.error('no unit data found in storage')
    }
  };

  const handleBack =()=> {
    previousStep();
  }


  return (
    <form className="form-inputs"  ref={formRef} onSubmit={handleSubmit}>
      <div className="att-form">
        <input
          type="text"
          id="model"
          name="model"
          className="model-name"
          autoComplete="off
          "
          placeholder="model name (if different)"
        />

        <div className="attributes">
          <div className="att-block">
            <label className="att-label" htmlFor="m">
              M
            </label>
            <input
              type="text"
              name="m"
              id="m"
              pattern="[0-9]*"
              className="att-values"
              autoComplete="off"
              required
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="t">
              T
            </label>
            <input
              type="text"
              name="t"
              id="t"
              pattern="[0-9]*"
              className="att-values"
              autoComplete="off"
              required
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="sv">
              Sv
            </label>
            <input
              type="text"
              name="sv"
              id="sv"
              pattern="[0-9]*"
              className="att-values"
              autoComplete="off"
              required
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="w">
              W
            </label>
            <input
              type="text"
              name="w"
              id="w"
              pattern="[0-9]*"
              className="att-values"
              autoComplete="off"
              required
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="ld">
              LD
            </label>
            <input
              type="text"
              name="ld"
              id="ld"
              pattern="[0-9]*"
              className="att-values"
              autoComplete="off"
              required
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="oc">
              OC
            </label>
            <input
              type="text"
              name="oc"
              id="oc"
              pattern="[0-9]*"
              className="att-values"
              autoComplete="off"
              required
            />
          </div>
        </div>
      </div>
      <button onClick={handleBack}>Back</button>
      <button 
      type="submit" 
      name="continue"
      onClick={() => setSubmitButton('continue')}
      >
        Submit
        </button>
      <button 
      type="submit" 
      name="addAnother"
      onClick={()=> setSubmitButton('addAnother')}
      >
        Add Another
        </button>
    </form>
  );
}

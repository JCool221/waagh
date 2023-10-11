"use client";

import { useState } from 'react'

import "./input.css";
import StepTwo from "./steps/StepTwo";
import StepOne from './steps/StepOne';

export default function Input() {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(step + 1)
  }

  const previousStep = () => {
    setStep(step - 1)
  }

 
  return (
    <div className="form-container">
        {step === 1 && <StepOne nextStep={nextStep} />}
        {step === 2 && <StepTwo nextStep={nextStep} previousStep={previousStep} />}

    </div>
  );
}

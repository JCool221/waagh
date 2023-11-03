"use client";

import { useState } from 'react'

import "./input.css";
import StepTwo from "./steps/StepTwo";
import StepOne from './steps/StepOne';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import StepFive from './steps/StepFive'
import StepSix from './steps/StepSix';

export default function Input() {
  const [step, setStep] = useState(1)
  const [unitData, setUnitData] = useState()

  const nextStep = () => {
    setStep(step + 1)
  }

  const previousStep = () => {
    setStep(step - 1)
  }

 
  return (
    <div className="form-container">
        {step === 1 && <StepOne nextStep={nextStep} unitData={unitData} setUnitData={setUnitData}/>}
        {step === 2 && <StepTwo nextStep={nextStep} previousStep={previousStep} />}
        {step === 3 && <StepThree nextStep={nextStep} previousStep={previousStep} />}
        {step === 4 && <StepFour nextStep={nextStep} previousStep={previousStep} />}
        {step === 5 && <StepFive nextStep={nextStep} previousStep={previousStep} />}
        {step === 6 && <StepSix nextStep={nextStep} previousStep={previousStep} />}
{/* todo: invuln save, unit comp, wargear options, abilities, leader, keywords */}
    </div>
  );
}

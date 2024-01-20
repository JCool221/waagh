"use client";

import { useState, useEffect } from 'react'

import "./input.css";
import InputCard from '@/lib/card/inputCard';
import StepTwo from "./steps/StepTwo";
import StepOne from './steps/StepOne';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import StepFive from './steps/StepFive'
import StepSix from './steps/StepSix';
import StepSeven from './steps/StepSeven';
import StepEight from './steps/StepEight';
import StepNine from './steps/StepNine';
import StepTen from './steps/StepTen';
import FinalStep from './steps/FinalStep';

export default function Input() {
  const [step, setStep] = useState(1) 
  const [unitData, setUnitData] = useState(null)

  const nextStep = () => {
    setStep(step + 1)
    console.log(step)
  }

  const previousStep = () => {
    setStep(step - 1)
  }

  useEffect(()=>{
    console.log('update to unit data: ', unitData)
  },[unitData])
  
  return (
    <div className="form-container">
        {step === 1 && <StepOne nextStep={nextStep} previousStep={previousStep} unitData={unitData} setUnitData={setUnitData}/>}
        {step === 2 && <StepTwo nextStep={nextStep} previousStep={previousStep} unitData={unitData} setUnitData={setUnitData}/>}
        {step === 3 && <StepThree nextStep={nextStep} previousStep={previousStep} unitData={unitData} setUnitData={setUnitData}/>}
        {step === 4 && <StepFour nextStep={nextStep} previousStep={previousStep} unitData={unitData} setUnitData={setUnitData}/>}
        {step === 5 && <StepFive nextStep={nextStep} previousStep={previousStep} unitData={unitData} setUnitData={setUnitData}/>}
        {step === 6 && <StepSix nextStep={nextStep} previousStep={previousStep} unitData={unitData} setUnitData={setUnitData}/>}
        {step === 7 && <StepSeven nextStep={nextStep} previousStep={previousStep} unitData={unitData} setUnitData={setUnitData}/>}
        {step === 8 && <StepEight nextStep={nextStep} previousStep={previousStep} unitData={unitData} setUnitData={setUnitData}/>}
        {step === 9 && <StepNine nextStep={nextStep} previousStep={previousStep} unitData={unitData} setUnitData={setUnitData}/>}
        {step === 10 && <StepTen nextStep={nextStep} previousStep={previousStep} unitData={unitData} setUnitData={setUnitData}/>}
        {step === 11 && <FinalStep nextStep={nextStep} previousStep={previousStep} unitData={unitData} setUnitData={setUnitData}/>}

{/* todo: unit comp, wargear options */}
<InputCard unitData={unitData} />
    </div>
  );
}

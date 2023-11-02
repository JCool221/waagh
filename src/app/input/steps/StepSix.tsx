import "../input.css"

interface StepSixProps {
    nextStep: () => void;
    previousStep: () => void;
  }

export default function StepSix({ nextStep, previousStep }: StepSixProps){
    return(
        <div>step six will be the abilities</div>
    )
}
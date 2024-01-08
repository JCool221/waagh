export interface Props {
    previousStep: ()=>void,
    nextStep: ()=>void,
    setUnitData: React.Dispatch<React.SetStateAction<any>>,
    unitData: any,
}
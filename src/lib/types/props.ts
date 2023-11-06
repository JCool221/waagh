export interface Props {
    previousStep: ()=>void,
    nextStep: ()=>void,
    unitData: any,
    setUnitData: React.Dispatch<React.SetStateAction<any>>,
}
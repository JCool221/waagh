
import './card.css'
import { Props } from "@/lib/types/props"

type InputCardProps = Pick<Props, 'unitData'>

export default function InputCard({unitData}: InputCardProps) {

    return (
        <div className="inputcard-container">
            <pre>{JSON.stringify(unitData, null, 2)}</pre>
        </div>
    )
}
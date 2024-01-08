
import './card.css'
import { Props } from "@/lib/types/props"

export default function InputCard({unitData}: Props) {

    return (
        <div className="inputcard-container">
            <pre>{JSON.stringify(unitData, null, 2)}</pre>
        </div>
    )
}
import "./abilities.css"
// import { Ability, AbilityCategory } from "../types/abilities"
import data from "../data/abilities.json"

// interface AbilittiesProps {
//     abilities: AbilityCategory;
//     category: 'weapon' | 'unit';
//   }

export default function Abilities() {
    return(
        <div className="ability-container">
            <select name="abilities" id="abilities">
        {data.weapon.map((ability, index) => (
            <option key={index}>{ability.name}</option>
            ))}
            </select>
        </div>
    )
}
'use client'

import { useState } from 'react'
import "./abilities.css"
import data from "../data/abilities.json"

export default function Abilities() {
    const [abilities, setAbilities] = useState([])
    
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
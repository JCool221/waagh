'use client'

import { useState, ChangeEvent } from 'react'
import "./abilities.css"
import data from "../data/abilities.json"
import AbiltitiesList from './list'

export default function Abilities() {
    const [abilities, setAbilities] = useState<string[]>([])
    
    const handleAbilities = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedAbility = e.target.value;
        console.log(selectedAbility)
        if (!abilities.includes(selectedAbility)) {
            setAbilities((prevAbilities) => [...prevAbilities, selectedAbility]);
        }
        console.log(abilities)
    }

    const handleClear = () => {
        setAbilities([])
    }

    return(
        <div className="ability-container">
            <select 
            name="abilities" 
            id="abilities"
            onChange={handleAbilities}
            >
        {data.weapon.map((ability, index) => (
            <option key={index}>{ability.name}</option>
            ))}
            </select>
            <AbiltitiesList abilities={abilities}/>
            <button onClick={handleClear}>Clear</button>
        </div>
    )
}
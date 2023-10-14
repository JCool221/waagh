'use client'

import "../input.css";
import data from "../../../lib/factions.json"
import { FormEvent, ChangeEvent, useState } from 'react'
import { Faction, FactionsData, TopLevelFaction } from '../../../lib/types/factions'

interface StepOneProps {
    nextStep: () => void;
}
export default function StepOne({ nextStep }: StepOneProps) {
    const [selectedTopLevelFaction, setSelectedTopLevelFaction] = useState<string>('')
    const [selectedSubFaction, setSelectedSubFaction] = useState<string>('');
    const [subFactions, setSubFactions] = useState<Faction[]>([])
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.removeItem('unit')
        if (e.target instanceof HTMLFormElement) {
            const form = new FormData(e.target);
            const formData = Object.fromEntries(form.entries());
            console.log(formData);
            localStorage.setItem("unit", JSON.stringify(formData));
            nextStep();
        } else {
            console.error("e is not a form element, why?");
        }
    };

    const handleTopLevelFactionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedFaction = e.target.value;
    
        // Update the selected top-level faction
        setSelectedTopLevelFaction(selectedFaction);
    
        // Retrieve and set the subfactions for the selected top-level faction
        const subfactionsForSelectedFaction = (data.factions as unknown as TopLevelFaction[]).find(
          (f) => Object.keys(f)[0] === selectedFaction
        ) as TopLevelFaction;
    
        if (subfactionsForSelectedFaction) {
          setSubFactions(subfactionsForSelectedFaction[selectedFaction]);
        } else {
          // Handle if the selected faction is not found
          setSubFactions([]);
        }
    
        // Reset the selected subfaction
        setSelectedSubFaction('');
      };
    
      const handleSubFactionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        // Update the selected subfaction
        setSelectedSubFaction(e.target.value);
      };
    

 return (
    <form className="form-inputs" onSubmit={handleSubmit}>
        <h1>Welcome to the new unit wizard</h1>
        <label htmlFor="faction">Select your faction</label>
        <select 
        name="topLevelFaction" 
        id="faction"
        autoComplete="off"
        required
        value={selectedTopLevelFaction}
        onChange={handleTopLevelFactionChange}
        >
        <option value="" disabled>Select a faction</option>
        {data.factions.map((faction: TopLevelFaction, index: number) => (
          <option key={index} value={Object.keys(faction)[0]}>
            {Object.keys(faction)[0]}
          </option>
           ))}
        </select>

        {selectedTopLevelFaction && (
        <div>
          <label htmlFor="subFaction">Select your subfaction</label>
          <select
            name="subFaction"
            id="subFaction"
            autoComplete="off"
            className="form-name"
            required
            value={selectedSubFaction}
            onChange={handleSubFactionChange}
          >
            <option value="" disabled>Select a subfaction</option>
            {subFactions.map((faction, index) => (
              <option key={index} value={faction.faction}>
                {faction.faction}
              </option>
            ))}
          </select>
        </div>
      )}

    <button type="submit">Submit</button>
    </form>
 )   
}
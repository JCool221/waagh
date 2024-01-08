"use client";

import { ChangeEvent, Dispatch, SetStateAction } from "react";
import "./abilities.css";
import data from "../data/abilities.json";
import AbiltitiesList from "./list";

interface AbilitiesProps {
  type: keyof typeof data;
  abilities: string[];
  setAbilities: Dispatch<SetStateAction<string[]>>;
}

export default function Abilities({
  type,
  abilities,
  setAbilities,
}: AbilitiesProps) {
  const handleAbilities = (e: ChangeEvent<HTMLSelectElement>) => {
    let selectedAbility = e.target.value;
    const selectedAbiltiyObject = data[type].find(
      (ability) => ability.name === selectedAbility
    );

    if (selectedAbiltiyObject && selectedAbiltiyObject.extend === true) {
      const extendInput = window.prompt("Please enter a keyword:");
      if (extendInput !== null) {
        selectedAbility += "-" + extendInput;
      } else {
        console.log("input canceled");
        return;
      }
    }

    if (selectedAbiltiyObject && selectedAbiltiyObject.value === true) {
      const valueInput = window.prompt("Please enter a value:");
      if (valueInput !== null) {
        selectedAbility += " " + valueInput;
      } else {
        console.log("input canceled");
        return;
      }
    }

    if (!abilities.includes(selectedAbility)) {
      setAbilities((prevAbilities) => [...prevAbilities, selectedAbility]);
    }
  };

  const handleClear = () => {
    setAbilities([]);
  };

  const defaultOption = "defaultOption";

  return (
    <div className="ability-container">
      <select
        name="abilities"
        id="abilities"
        defaultValue={defaultOption}
        onChange={handleAbilities}
      >
        <option disabled value="defaultOption">
          --Select any ability keywords
        </option>
        {data[type].map((ability, index) => (
          <option key={index}>{ability.name}</option>
        ))}
      </select>
      <AbiltitiesList abilities={abilities} />
      <button className="ability-button" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}

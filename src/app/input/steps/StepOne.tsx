"use client";

import "../input.css";
import data from "../../../lib/data/factions.json";
import { FormEvent, ChangeEvent, useState } from "react";
import { Faction, TopLevelFaction } from "../../../lib/types/factions";
import { Props } from "../../../lib/types/props";

export default function StepOne({ nextStep, unitData, setUnitData }: Props) {
  const [selectedTopLevelFaction, setSelectedTopLevelFaction] =
    useState<string>("");
  const [selectedSubFaction, setSelectedSubFaction] = useState<string>("");
  const [subFactions, setSubFactions] = useState<Faction[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUnitData(null);
    localStorage.removeItem("unit");
    setUnitData(Object.fromEntries(new FormData(e.target as HTMLFormElement)));
    nextStep();
  };
  ``;
  const handleTopLevelFactionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedFaction = e.target.value;
    setSelectedTopLevelFaction(selectedFaction);
    const subfactionsForSelectedFaction = (
      data.factions as unknown as TopLevelFaction[]
    ).find((f) => Object.keys(f)[0] === selectedFaction) as TopLevelFaction;

    if (subfactionsForSelectedFaction) {
      setSubFactions(subfactionsForSelectedFaction[selectedFaction]);
    } else {
      setSubFactions([]);
    }
    setSelectedSubFaction("");
  };

  const handleSubFactionChange = (e: ChangeEvent<HTMLSelectElement>) => {
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
        <option value="" disabled>
          Select a faction
        </option>
        {(data.factions as unknown as TopLevelFaction[]).map(
          (faction: TopLevelFaction, index: number) => (
            <option key={index} value={Object.keys(faction)[0]}>
              {Object.keys(faction)[0]}
            </option>
          )
        )}
      </select>

      {selectedTopLevelFaction && (
        <div className="subfaction">
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
            <option value="" disabled>
              Select a subfaction
            </option>
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
  );
}

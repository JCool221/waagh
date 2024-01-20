"use client";
// todo:refactor this garbage component
import "../input.css";
import { FormEvent } from "react";
import { useState, useRef } from "react";
import Abilities from "@/lib/abilities/Abilities";
import { Props } from "@/lib/types/props";

export default function StepFour({
  nextStep,
  previousStep,
  unitData,
  setUnitData,
}: Props) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitButton, setSubmitButton] = useState<string | null>(null);
  const [linked, setLinked] = useState<boolean>(false);
  const [abilities, setAbilities] = useState<string[]>([]);
  const type = "weapon";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    );

    if (linked === true) {
      formData["linked"] = "true";
    }

    const abilitiesString = abilities.join(",");
    formData.abilities = abilitiesString;

    if (Array.isArray(unitData.melee)) {
      unitData.melee.push(formData);
    } else {
      unitData.melee = [formData];
    }

    setUnitData(unitData);

    if (submitButton === "addAnother") {
      setAbilities([]);
      setLinked(false);
      formRef.current?.reset();
    } else if (submitButton === "linkedProfile") {
      setAbilities([]);
      formRef.current?.reset();
    } else if (submitButton === "continue") {
      nextStep();
    }
  };

  return (
    <form className="form-inputs" ref={formRef} onSubmit={handleSubmit}>
      <h1>Melee Weapons</h1>
      <p className="instructions">submit empty if none</p>
      <div className="att-form">
        <input
          type="text"
          id="weapon"
          name="weapon"
          className="weapon-name"
          autoComplete="off"
          placeholder="weapon name"
          autoFocus
        />

        <div className="attributes">
          <div className="att-block">
            <label className="att-label" htmlFor="a">
              A
            </label>
            <input
              type="text"
              name="a"
              id="a"
              className="att-values"
              autoComplete="off"
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="ws">
              WS
            </label>
            <input
              type="text"
              name="ws"
              id="ws"
              className="att-values"
              autoComplete="off"
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="s">
              S
            </label>
            <input
              type="text"
              name="s"
              id="s"
              className="att-values"
              autoComplete="off"
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="ap">
              AP
            </label>
            <input
              type="text"
              name="ap"
              id="ap"
              className="att-values"
              autoComplete="off"
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="d">
              D
            </label>
            <input
              type="text"
              name="d"
              id="d"
              className="att-values"
              autoComplete="off"
            />
          </div>
        </div>
        <Abilities
          type={type}
          abilities={abilities}
          setAbilities={setAbilities}
        />
      </div>
      <button onClick={previousStep}>Back</button>
      <button
        type="submit"
        name="continue"
        onClick={() => setSubmitButton("continue")}
      >
        Submit
      </button>
      <button
        type="submit"
        name="addAnother"
        onClick={() => setSubmitButton("addAnother")}
      >
        Add Another
      </button>
      <button
        type="submit"
        name="linkedProfile"
        onClick={() => {
          setSubmitButton("linkedProfile");
          setLinked(true);
        }}
      >
        Add Weapon Mode
      </button>
    </form>
  );
}

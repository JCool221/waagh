"use client";

import "../input.css";
import { FormEvent } from "react";
import { useState, useRef } from "react";
import { Props } from "@/lib/types/props";

export default function StepThree({
  nextStep,
  previousStep,
  unitData,
  setUnitData,
}: Props) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitButton, setSubmitButton] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    );

    if (Array.isArray(unitData.attributes)) {
      unitData.attributes.push(formData);
    } else {
      unitData.attributes = [formData];
    }
    setUnitData(unitData);

    if (submitButton === "addAnother") {
      formRef.current?.reset();
    } else if (submitButton === "continue") {
      nextStep();
    }
  };

  return (
    <form className="form-inputs" ref={formRef} onSubmit={handleSubmit}>
      <div className="att-form">
        <input
          type="text"
          id="model"
          name="model"
          className="model-name"
          autoComplete="off
          "
          placeholder="model name (include unit leaders like sargeant or champion)"
        />

        <div className="attributes">
          <div className="att-block">
            <label className="att-label" htmlFor="m">
              M
            </label>
            <input
              type="text"
              name="m"
              id="m"
              pattern="[0-9]*"
              className="att-values"
              autoComplete="off"
              autoFocus
              required
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="t">
              T
            </label>
            <input
              type="text"
              name="t"
              id="t"
              pattern="[0-9]*"
              className="att-values"
              autoComplete="off"
              required
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="sv">
              Sv
            </label>
            <input
              type="text"
              name="sv"
              id="sv"
              pattern="[0-9]*"
              className="att-values"
              autoComplete="off"
              required
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="w">
              W
            </label>
            <input
              type="text"
              name="w"
              id="w"
              pattern="[0-9]*"
              className="att-values"
              autoComplete="off"
              required
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="ld">
              LD
            </label>
            <input
              type="text"
              name="ld"
              id="ld"
              pattern="[0-9]*"
              className="att-values"
              autoComplete="off"
              required
            />
          </div>

          <div className="att-block">
            <label className="att-label" htmlFor="oc">
              OC
            </label>
            <input
              type="text"
              name="oc"
              id="oc"
              pattern="[0-9]*"
              className="att-values"
              autoComplete="off"
              required
            />
          </div>
        </div>
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
    </form>
  );
}

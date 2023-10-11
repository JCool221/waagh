import "./attributes.css";
import { useState } from "react";

export default function Attributes() {
  return (
    <div className="att-form">
      <input
        type="text"
        id="model"
        name="model"
        className="model-name"
        placeholder="model name (if different)"
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
            required
          />
        </div>
      </div>
    </div>
  );
}

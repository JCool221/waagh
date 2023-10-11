"use client";

import "./input.css";
import { useDispatch } from "react-redux";
import { setUnit } from "../redux/slices/unitDataSlice";
import { FormEvent } from "react";

export default function Input() {
  const dispatch = useDispatch()
  const handleSubmit = (e:FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      const form = new FormData(e.target);
      const formData = Object.fromEntries(form.entries());
      console.log(formData)
      // dispatch(setUnit(formData))
      localStorage.setItem('unit', JSON.stringify(formData))
    } else {
      console.error('e is not a form element, why?')
    }
  }
 
  return (
    <div className="form-container">
        <h1>Form entry</h1>
      <form 
      className="form-inputs"
      onSubmit={handleSubmit}>
        <label htmlFor="name">Unit name</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          className="form-name"
          placeholder="enter name"
          required
        />
        <label htmlFor="points">Points</label>
        <input
          type="text"
          name="points"
          id="points"
          autoComplete="off"
          pattern="[0-9]*"
          className="form-points"
          placeholder="enter points"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

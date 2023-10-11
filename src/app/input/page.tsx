"use client";

import "./input.css";
import FormOne from "./form-one";
import { handleFormData } from "./handleFormData";
import { useDispatch } from "react-redux";
import { setUnit } from "../redux/slices/unitDataSlice";

export default function Input() {
  const dispatch = useDispatch()
  const handleSubmit = async (e:HTMLFormElement)=> {
    e.preventDefault();
    const formData= handleSubmit(e)
    dispatch(setUnit(formData))
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

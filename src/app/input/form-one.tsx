"use client";

import "./input.css";

import Attributes from "./attributes/attributes";

export default function FormOne() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      const form = new FormData(e.target);
      const formData = Object.fromEntries(form.entries());
      console.log(form)
      console.log(formData)
    } else {
      console.error('e is not a form element, why?')
    }
  };
  
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
          className="form-name"
          placeholder="enter name"
          required
        />
        <label htmlFor="points">Points</label>
        <input
          type="text"
          name="points"
          id="points"
          pattern="[0-9]*"
          className="form-points"
          placeholder="enter points"
          required
        />
        <Attributes />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

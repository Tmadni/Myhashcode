import React, { useState } from "react";

const Radio = () => {
const [Radio,setRadio]=useState("option1")
  return (
    <>
    <br />
    <br />
    <br />
    <h1>Radio Button</h1>
      <form>
        <label>Option1: </label>
        <input type="radio" checked={Radio=="option1"} value="option1" onChange={e=>setRadio(e.target.value)}/>
        <br />

        <label>Option2: </label>
        <input type="radio" checked={Radio=="option2"} value="option2" onChange={e=>setRadio(e.target.value)}/>
        <br />

        <label>Option3: </label>
        <input type="radio" checked={Radio=="option3"} value="option3" onChange={e=>setRadio(e.target.value)}/>
        <br />
        <h3>Selected Value is {Radio}</h3>
      </form>
    </>
  );
};

export default Radio;

import React from "react";
import { useState } from "react";

const WarrentyCard = () => {
  const [show, setShow] = useState(false);
  const [warrantyData, setWarrantydata] = useState([]);
  const [problem, setProblem] = useState("");
  const clicked = () => {
    setShow(!show);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    console.log(warrantyData);
  };
  const onchange = (e) => {
    console.log(e.target.label);
    {
      e.target.checked
        ? setWarrantydata([...warrantyData, e.target.value])
        : setWarrantydata(
            warrantyData.filter((data) => e.target.value !== data)
          );
    }
    setProblem(e.target.value);
  };

  return (
    <>
      <button
        onClick={clicked}
        style={{
          border: "none",
          padding: "10px",
          background: "grey",
          color: "white",
        }}
      >
        warrenty / Replacement
      </button>
      <div
        style={show ? { dispaly: "block" } : { display: "none" }}
        className="warrentyQueCard"
      >
        <form onSubmit={onSubmit}>
          {/* <input type='checkbox' id='question1'  onChange={onchange} value='question1'/>
        <label htmlFor='question1'>question 1</label>

        <input type='checkbox' id='question2' onChange={onchange} value='question2' />
        <label htmlFor='question2'>question 2</label>

        <input type='checkbox' id='question3' onChange={onchange} value='question3' />
        <label htmlFor='question3'>question 3</label> */}

          <input
            onChange={onchange}
            type="text"
            id="aboutDefect"
            value={problem}
            placeholder="Enter Defect"
            style={{
              border: "1px solid grey",
              margin: "2px",
              padding: "10px",
            }}
          />

          <input
            type="submit"
            id="submit"
            style={{
              border: "none",
              background: "lightgreen",
              padding: "10px",
            }}
          />
        </form>
      </div>
    </>
  );
};

export default WarrentyCard;

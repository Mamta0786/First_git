import React, { useState } from "react";

// const [count, setCount] = useState(0);

export default function TextForm(props) {
  const [text, setText] = useState("");
  const textHandle = (elem) => {
    setText(elem.target.value);
    // console.log("onchange")
  };
  const convertUpCase = () => {
    setText(text.toUpperCase());
    props.showAlert("change in to upper case", "success");
  };
  const convertLoCase = () => {
    setText(text.toLowerCase());
    props.showAlert("change in to lower case", "success");
  };

  const wordCount = (word) => {
    const l = word.split(" ");
    if (l[l.length - 1] === "") {
      return word === "" ? 0 : word.split(" ").length - 1;
    } else {
      console.log(l);
      return word === "" ? 0 : word.split(" ").length;
    }
  };
  return (
    <>
      <div className="container mt-4">
        <h1>Text Editor</h1>
        <div className="form-group">
          <label htmlFor="text">Enter your Text</label>
          <textarea
            className="form-control"
            style={{
              color: props.mode1 === "dark" ? "white" : "black",
              backgroundColor: props.mode1 === "dark" ? "#0b0632" : "white",
            }}
            id="text"
            rows="8"
            value={text}
            onChange={textHandle}
          ></textarea>
        </div>
      </div>
      <div className="container">

            <button className="btn btn-primary mx-1 my-1" onClick={convertUpCase}>
              Converting into UpperCase
            </button>

            <button className="btn btn-primary mx-1 my-1" onClick={convertLoCase}>
              Converting into LowerCase
            </button>
      </div>
      <div className="container my-3">
        <p>
          {wordCount(text)} word and {text.length} character.
        </p>
        <h2>Preview</h2>
        <p>
          {text === ""
            ? "plz write text in above box to see the preview"
            : text}
        </p>
      </div>
    </>
  );
}

'use client'
import React, { useState } from "react"
import { CreateEntry } from "./services/entryServices"
// import { EntryFormProps } from "./EntryFormProps"
// import { Entry } from "./Entry"

export default function Registerform () {
  const [stressLevel, setStressLevel] = useState("");
  const [productivityLevel, setProductivityLevel] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();

    const entry = {
      entryId: 0,
      stressLevel: parseInt(stressLevel),
      productivityLevel: parseInt(productivityLevel),
      message: message,
      timeOfEntry: new Date()
    };
    const response = await CreateEntry(entry);
    setStressLevel("");
    setProductivityLevel("");
    setMessage("");
    //Här behöver jag fixa så att jag visar någonting om att min entry sparats.
    alert("Inlägg skapat.")
  }

  return (
    <>
      <div className="formOuter">
        <div className="container">
          <div className="title">Fyll i nedanför</div>
          <form name="entryForm" onSubmit={formSubmit}>
            <div className="form-details">
              <div className="inputbox">
                <span className="details">Stressnivå</span>
                <input
                  name="stressLevel"
                  type="number"
                  placeholder="1"
                  min={1}
                  max={7}
                  value={stressLevel}
                  onChange={(e) => setStressLevel(e.target.value)}
                  required
                />
              </div>
              <div className="inputbox">
                <span className="details">Produktivitet</span>
                <input
                  name="productivityLevel"
                  type="number"
                  placeholder="1"
                  min={1}
                  max={7}
                  value={productivityLevel}
                  onChange={(e) => setProductivityLevel(e.target.value)}
                  required
                />
              </div>
              <div className="messageInput">
                <span className="details">Meddelande</span>
                <input
                  name="message"
                  type="textarea"
                  placeholder="Fyll i meddelande"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="btbDiv">
                <button type="submit" className="formBtn">
                  Submit
                </button>
                <button className="formBtn">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
  }
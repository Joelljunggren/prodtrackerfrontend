
export default function Registerform () {
    return <>
    <div className="formOuter">
    <div className="container">
    <div className="title">Fyll i nedanför</div>
      <form action="#">
        <div className="form-details">
        <div className="inputbox">
        <span className="details">Stressnivå</span>
        {/* <span className="inputvalue">7</span> */}
        <input type="number" placeholder="1" min={1} max={7} required></input>
      </div>
      <div className="inputbox">
        <span className="details">Produktivitet</span>
        {/* <span className="inputvalue">7</span> */}
        <input type="number" placeholder="1" min={1} max={7} required></input>
      </div>
      <div className="messageInput">
        <span className="details">Meddelande</span>
        <input type="textarea" placeholder="Fyll i meddelande" required></input>
      </div>
      <div className="btbDiv">
      <button type="submit" className="formBtn">Submit</button>
      <button className="formBtn">Cancel</button> 
      </div>
        </div>
      </form>
    </div>
    </div>
    </>
}
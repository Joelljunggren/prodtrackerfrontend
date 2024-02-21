

export default function Registerform () {
    return <>
          <div className="formDiv">
        <div>
        <h2>Registrera mående</h2>
        </div>
        <form className="formInside">
        <label>Fyll i dina nuvarande stressnivåer (1-7)</label>
            <div className="radioButtons">
            <input type="radio" name="stresslevel"></input>
            <input type="radio" name="stresslevel"></input>
            <input type="radio" name="stresslevel"></input>
            <input type="radio" name="stresslevel"></input>
            <input type="radio" name="stresslevel"></input>
            <input type="radio" name="stresslevel"></input>
            <input type="radio" name="stresslevel"></input>
            </div>
            <label>Fyll i hur produktiv du känner dig idag (1-7)</label>
            <div className="radioButtons">
            <input type="radio" name="productivitylevel"></input>
            <input type="radio" name="productivitylevel"></input>
            <input type="radio" name="productivitylevel"></input>
            <input type="radio" name="productivitylevel"></input>
            <input type="radio" name="productivitylevel"></input>
            <input type="radio" name="productivitylevel"></input>
            <input type="radio" name="productivitylevel"></input>
            </div>
            <label>Fyll i eventuellt meddelande om dagen</label>
            <textarea placeholder="Fyll i meddelande"></textarea>
            <div className="formButton">
                <button className="btn">Register</button>
                <button className="btn">Cancel</button>
            </div>
        </form>
      </div>
    </>
}

import React from "react";
import Header from "../components/navbar";

const YourComponent: React.FC = () => {
  const productivityRating = [1, 2, 3, 4, 5, 6, 7];
  const stressRating = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
    {/* Måste göra om det här till komponenter */}
    <Header/>
      <div className="formDiv">
        <div className="formGreeting">Redigstrera dina nuvarande nivåer</div>
        <form>
          <div className="textLabel">Fyll i produktivitetsnivå</div>
          {productivityRating.map((productivityRating) => (
            <label key={productivityRating}>
              <input type="radio" name="rating" value={productivityRating} />
              {productivityRating}
            </label>
          ))}
            <div className="textLabel">Fyll i stressnivå</div>
            {stressRating.map((stressRating) => (
            <label key={stressRating}>
              <input type="radio" name="rating" value={stressRating} />
              {stressRating}
            </label>
          ))}
            <div className="textLabel">Meddelande</div>
          <textarea className="inputField" />
        </form>
      </div>
    </>
  );
};

export default function Page() {
  return <YourComponent />;
}

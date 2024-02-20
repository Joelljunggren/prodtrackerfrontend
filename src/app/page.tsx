import Link from "next/link"
import Navbar from "./components/navbar"

export default function Home() {
  return <>
  <body>
  <Navbar/>
    <section className="split">
    <div className="infoDiv">
      <h1>
        Är du nöjd med hur du presterar?
      </h1>
      <p>
      Behöver du dra ner på stressmomenten?
      Kan du prestera bättre i ditt arbete?
      Ibland är det bra att hålla koll på hur man faktiskt mår. 
      Det finns alltid flera anledningar att hålla koll på läget. 
      Men framför allt är det en bra idé så att man får en överblick över sin arbetssituation.
      </p>
    </div>
    <div className="MainMenu">
      <Link className="MenuLink" href="/register">Registrera mående</Link>
      <Link className="MenuLink" href="/showall">Tidigare entries</Link>
      <Link className="MenuLink" href="/editprevious">Redigera entries</Link>
    </div>
    </section>
  </body>
  </>
}
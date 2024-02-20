import Link from "next/link"

export default function MainMenu() {
    return <>
    <div className="MainMenu">
      <Link className="MenuLink" href="/register">Registrera mående</Link>
      <Link className="MenuLink" href="/showall">Tidigare entries</Link>
      <Link className="MenuLink" href="/editprevious">Redigera entries</Link>
    </div>
    </>
}
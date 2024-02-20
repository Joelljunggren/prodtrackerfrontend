import Navbar from "./components/Navbar"
import InfoDiv from "./components/infodiv"
import MainMenu from "./components/MainMenu"

export default function Home() {
  return <>
    <section className="split">
      <InfoDiv/>
      <MainMenu/>
    </section>
  </>
}
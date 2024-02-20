import Navbar from "./components/navbar"
import InfoDiv from "./components/infodiv"
import MainMenu from "./components/mainmenu"

export default function Home() {
  return <>
  <Navbar/>
    <section className="split">
      <InfoDiv/>
      <MainMenu/>
    </section>
  </>
}
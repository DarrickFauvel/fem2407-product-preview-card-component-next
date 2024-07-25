import Attribution from "./components/attribution"
import Card from "./components/card"
import HiddenH1 from "./components/hidden-h1"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col md:justify-center items-center">
      <HiddenH1 />
      <Card />
      <Attribution />
    </main>
  )
}

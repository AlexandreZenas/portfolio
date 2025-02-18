import { Navbar } from "./elements/navbar"
import { About } from "./pages/home/about"
import { Experience } from "./pages/home/experience"
import { Hero } from "./pages/home/hero"
import { Portfolio } from "./pages/home/portfolio"



function App() {


  return (
    <div className="dark:bg-[#242126] bg-white transition-colors w-full scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Portfolio />

      </main>
    </div>
  )
}

export default App

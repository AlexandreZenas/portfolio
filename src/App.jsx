import { Navbar } from "./elements/navbar"
import { About } from "./pages/home/about"
import { Experience } from "./pages/home/experience"
import { Hero } from "./pages/home/hero"
import { Projects } from "./pages/home/projects"


function App() {


  return (
    <div className="dark:bg-[#242126] bg-white transition-colors w-full scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />

      </main>
    </div>
  )
}

export default App

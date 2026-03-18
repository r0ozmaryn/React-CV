import Abilities from "./components/Abilities"
import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts"
import Education from "./components/Education"
import Expirience from "./components/Expirience"
import Header from "./components/Header"

function App() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-3">
      <aside className="bg-[#2c3e50] text-white px-10 py-7.5 grid ">
        <Header />
        <Contacts />
        <Abilities />
      </aside>
      <main className="md:col-span-2 p-8 md:p-12 space-y-10">
        <AboutMe />
        <Education />
        <Expirience />
      </main>
    </div>
  )
}

export default App

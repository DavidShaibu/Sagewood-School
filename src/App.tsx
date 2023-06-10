import ContactDetails from "./components/ContactDetails/ContactDetails";
import GptDetails from "./components/GptDetails/GptDetails";
import Header from "./components/Header";
import LocationTimeline from "./components/LocationTimeline/LocationTimeline";
import NavBar from "./components/Nav/NavBar";
import Pattern from "./components/Patterns/Pattern";


function App() {
  return (
  <>
    <Header />
    <main>
      <Pattern />
      <LocationTimeline />
    </main>
    
  </>
  )
}

export default App

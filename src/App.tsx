import GptDetails from "./components/GptDetails/GptDetails";
import Header from "./components/Header";
import LocationTimeline from "./components/LocationTimeline/LocationTimeline";
import Hero from "./components/Hero/Hero";
import { locationTimelineInput } from "./input";


function App() {
  return (
  <>
    <Header />
    <main>
      <Hero />
      <LocationTimeline entries={locationTimelineInput}/>
    </main>
    
  </>
  )
}

export default App

import GptDetails from "./components/GptDetails/GptDetails";
import Header from "./components/Header";
import LocationTimeline from "./components/LocationTimeline/LocationTimeline";
import { locationTimelineInput } from "./MainInput";
import HeroHome from "./components/Hero/Home/HeroHome";



function App() {
  return (
  <>
    <Header />
    <main>
      <HeroHome />
      <LocationTimeline entries={locationTimelineInput}/>
    </main>
    
  </>
  )
}

export default App

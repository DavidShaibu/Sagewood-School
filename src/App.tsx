import GptDetails from "./components/GptDetails/GptDetails";
import Header from "./components/Header";
import HeroHome from "./components/Hero/Home/HeroHome";
import LocationTimeline from "./components/LocationTimeline/LocationTimeline";
import { locationTimelineInput, offeringsInput } from "./MainInput";
import Offerings from "./components/SchoolOfferings/Offerings";



function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="hero-wrapper">
          <HeroHome />
        </div>
        <div className="location">
          <LocationTimeline entries={locationTimelineInput}/>
        </div>
        <div className="offerings-wrapper">
          <Offerings entries={offeringsInput}/>
        </div>
      </main>
    </>

  )
}

export default App

/* <LocationTimeline entries={locationTimelineInput}/> */

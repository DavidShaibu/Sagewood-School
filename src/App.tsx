import Activities from "./components/Activities/Activities";
import Facilities from "./components/Facilities/facilities";
import Header from "./components/Header";
import HeroHome from "./components/Hero/Home/HeroHome";
import OperationDetails from "./components/OperationDetails/OperationDetails";
import Offerings from "./components/SchoolOfferings/MainOfferings/Offerings";
import MoreOfferings from "./components/SchoolOfferings/MoreOfferings/MoreOfferings";
import { operationDetailsInput, offeringsInput, moreOfferingsInput, activitiesInput } from "./MainInput";



function App() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="heroWrapper">
          <HeroHome />
        </section>
        <section className="locationWrapper">
          <OperationDetails entries={operationDetailsInput}/>
        </section>
        <section className="offeringsWrapper">
          <Offerings entries={offeringsInput}/>
          <MoreOfferings entries={moreOfferingsInput}/>
        </section>
        <section className="activitiesWrapper">
          <Activities entries={activitiesInput}/>
        </section>
        <section className="facilitiesWrapper">
          <Facilities />
        </section>
        <section className="additionalInfoWrapper">
          
        </section>

      </main>
    </>

  )
}

export default App

/* <LocationTimeline entries={locationTimelineInput}/> */

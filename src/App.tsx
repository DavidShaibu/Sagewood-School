import Activities from "./components/Activities/Activities";
import AdditionalInfo from "./components/AdditionalInfo/AdditionalInfo";
import Button from "./components/Button";
import Facilities from "./components/Facilities/Facilities";
import Header from "./components/Header";
import HeroHome from "./components/Hero/Home/HeroHome";
import OperationDetails from "./components/OperationDetails/OperationDetails";
import Offerings from "./components/SchoolOfferings/MainOfferings/Offerings";
import MoreOfferings from "./components/SchoolOfferings/MoreOfferings/MoreOfferings";
import { operationDetailsInput, offeringsInput, moreOfferingsInput, activitiesInput, statsInput } from "./MainInput";



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
          <AdditionalInfo entries={statsInput}/>
        </section>
      </main>
    </>

  )
}

export default App

/* <LocationTimeline entries={locationTimelineInput}/> */

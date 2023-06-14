import Activities from "./components/Activities/Activities";
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
        <div className="heroWrapper">
          <HeroHome />
        </div>
        <div className="locationWrapper">
          <OperationDetails entries={operationDetailsInput}/>
        </div>
        <div className="offeringsWrapper">
          <Offerings entries={offeringsInput}/>
          <MoreOfferings entries={moreOfferingsInput}/>
        </div>
        <Activities entries={activitiesInput}/>
      </main>
    </>

  )
}

export default App

/* <LocationTimeline entries={locationTimelineInput}/> */

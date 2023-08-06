import {
  Activities,
  AdditionalInfo,
  Facilities,
  Footer,
  Header,
  HeroHome,
  OperationDetails,
  Reviews,
  Offerings, 
  MoreOfferings,
  ScrollToTopButton,
  operationDetailsInput,
  offeringsInput,
  moreOfferingsInput,
  activitiesInput,
  statsInput,
  reviewsInput,
  heroHomeInput,
  facilitiesInput,
  additionalInfoImagesInput, 

} from "../../components";

export default function Home() {
  return (
    <>
      <section className="heroWrapper">
        <HeroHome entries={heroHomeInput} />
      </section>
      <section className="locationWrapper">
        <OperationDetails entries={operationDetailsInput} />
      </section>
      <section className="offeringsWrapper">
        <Offerings entries={offeringsInput} />
      </section>
      <section className="moreOfferingsWrapper">
        <MoreOfferings entries={moreOfferingsInput} />
      </section>
      <section className="activitiesWrapper">
        <Activities entries={activitiesInput} />
      </section>
      <section className="additionalInfoWrapper">
        <AdditionalInfo
          entries={statsInput}
          images={additionalInfoImagesInput}
          buttonProp={{
            initialColor: "#00beb0",
            hoverColor: "#ef5874",
            displayText: "More Information",
            endpoint: "/about",
          }}
        />
      </section>
      <section className="facilitiesWrapper">
        <Facilities entries={facilitiesInput} />
      </section>
      <section className="reviewWrapper">
        <Reviews entries={reviewsInput} />
      </section>
    </>
  );
}

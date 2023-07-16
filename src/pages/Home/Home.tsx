import Activities from "../../components/Activities/Activities";
import AdditionalInfo from "../../components/AdditionalInfo/AdditionalInfo";
import Facilities from "../../components/Facilities/Facilities";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroHome from "../../components/Hero/Home/HeroHome";
import OperationDetails from "../../components/OperationDetails/OperationDetails";
import Reviews from "../../components/Reviews.tsx/Reviews";
import Offerings from "../../components/SchoolOfferings/MainOfferings/Offerings";
import MoreOfferings from "../../components/SchoolOfferings/MoreOfferings/MoreOfferings";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import {
  operationDetailsInput,
  offeringsInput,
  moreOfferingsInput,
  activitiesInput,
  statsInput,
  ReviewsInput,
} from "../../MainInput";

export default function Home() {
  return (
    <>
      <section className="heroWrapper">
        <HeroHome />
      </section>
      <section className="locationWrapper">
        <OperationDetails entries={operationDetailsInput} />
      </section>
      <section className="offeringsWrapper">
        <Offerings entries={offeringsInput} />
        <MoreOfferings entries={moreOfferingsInput} />
      </section>
      <section className="activitiesWrapper">
        <Activities entries={activitiesInput} />
      </section>
      <section className="additionalInfoWrapper">
        <AdditionalInfo entries={statsInput} />
      </section>
      <section className="facilitiesWrapper">
        <Facilities />
      </section>
      <section className="reviewWrapper">
        <Reviews entries={ReviewsInput} />
      </section>
    </>
  );
}

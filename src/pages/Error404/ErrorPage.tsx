import { Link } from "react-router-dom";
import AdditionalInfo from "../../components/AdditionalInfo/AdditionalInfo";
import Facilities from "../../components/Facilities/Facilities";
import Hero from "../../components/Hero/Default/Hero";
import { styles } from "../../components/Hero/Home/input";
import OperationDetails from "../../components/OperationDetails/OperationDetails";
import MoreOfferings from "../../components/SchoolOfferings/MoreOfferings/MoreOfferings";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import {
  aboutUsInput,
  HeroInput,
  moreOfferingsInput,
  operationDetailsInput,
  statsInput,
} from "../../MainInput";
import cream from "./assets/cream2.png";

export default function ErrorPage() {
  return (
    <>
      <Hero />
      <div className="errorsContainer">
        <p className="text404">404 Error</p>
        <p className="textBold">Page Not Found</p>
        <div className="buttons">
          <Link to="/">
            <button>Go back</button>
          </Link>
          <Link to="/">
            <button>Take me Home</button>
          </Link>
        </div>
      </div>
    </>
  );
}

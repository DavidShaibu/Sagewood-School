import styles from "./About.module.css";
import { AdditionalInfo, Hero, MoreOfferings, WhoWeAre, Images  } from "../../components";
import {
  aboutUsInput,
  whoWeAreInput,
  aboutUsImagesForAdditonalInfo,
  aboutPageStatsInput,
  aboutUsButtonProp,
} from "./input";

export default function About() {
  return (
    <section>
      <Hero />
      <div style={{ backgroundImage: `url(${Images.creamBackground})` }}>
        <WhoWeAre />
        <MoreOfferings entries={whoWeAreInput} />
        <MoreOfferings entries={aboutUsInput} />
        <AdditionalInfo entries={aboutPageStatsInput} images={aboutUsImagesForAdditonalInfo} buttonProp={aboutUsButtonProp}/>
      </div>
    </section>
  );
}

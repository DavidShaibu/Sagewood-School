import { Images, statsInput  } from "../../components";


const aboutUsInput = [
  

  {
    offering: {
      heading: "Our Vision",
      description: "We are set to educate the child by ''Empowering'' him or her in every aspect of life, academically, mentally, socially, physically, physiologically, psychologically and morally. We are set out to cause a revival in the educational system of Nigeria in terms of quality education being imparted on children. We are committed to building an excellent education system.",
    }
  },
  { imageUrl: Images.pattern },
  { imageUrl: Images.pattern },
  {
    offering: {
      heading: "Our Ideology",
      description: "We believe in individual differences, so we relate with each child according to their uniqueness rather than as a member of a group. This helps us reach out to every child while learning. No child is left lagging behind at Sagewood School. Hence children are taught the principles behind concepts, such that they are able to relate with their everyday world, discuss them confidently and intellectually."
    }
  },

];

const whoWeAreInput = [
  { imageUrl: Images.pattern },

  {
    offering: {
      heading: "Our Mission",
      description: "We believe that ''allowing the natural course of a creature to unfold is most healthy, providing neccessary support to enhance such course is strenght''. Hence, our mission is to build a strong and healthy tomorrow."
    }
  },

];


const aboutUsImagesForAdditonalInfo = [Images.pattern, Images.greenBackground2];

const aboutPageStatsInput = statsInput.map((item) => ({ ...item }));

aboutPageStatsInput.forEach((item, index) => {
  switch (index) {
    case 0:
      item.statsIcon = Images.greenIcon1;
      break;
    case 1:
      item.statsIcon = Images.greenIcon2;
      break;
    case 2:
      item.statsIcon = Images.greenIcon3;
      break;
    case 3:
      item.statsIcon = Images.greenIcon4;
    default:
      break;
  }
});

const aboutUsButtonProp = {
  initialColor: "#ef5874",
  hoverColor: "#00beb0",
  displayText: "Contact Us",
  endpoint: "/contact-us"
}


export {aboutUsInput, whoWeAreInput, aboutUsImagesForAdditonalInfo, aboutPageStatsInput, aboutUsButtonProp};

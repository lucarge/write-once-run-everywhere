import React from "react";
import { Deck } from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import { Slide1 } from "./slides/Slide1";
import { Slide2 } from "./slides/Slide2";
import { Slide3 } from "./slides/Slide3";
import { Slide4 } from "./slides/Slide4";
import { Slide5 } from "./slides/Slide5";
import { Slide6 } from "./slides/Slide6";
import { Slide7 } from "./slides/Slide7";
import { Slide8 } from "./slides/Slide8";
import { Slide8b } from "./slides/Slide8b";
import { Slide9 } from "./slides/Slide9";
import { Slide10 } from "./slides/Slide10";
import { Slide11 } from "./slides/Slide11";
import { Slide12 } from "./slides/Slide12";
import { Slide13 } from "./slides/Slide13";
import { Slide14 } from "./slides/Slide14";
import { Slide15 } from "./slides/Slide15";
import { Slide16 } from "./slides/Slide16";
import { Slide17 } from "./slides/Slide17";
import { Slide18 } from "./slides/Slide18";
import { Slide19, Slide191 } from "./slides/Slide19";
import { Slide20 } from "./slides/Slide20";
import { Slide21 } from "./slides/Slide21";
import { Slide21b } from "./slides/Slide21b";
import { Slide22 } from "./slides/Slide22";
import { Slide23 } from "./slides/Slide23";
import { Slide24 } from "./slides/Slide24";
import { Slide25 } from "./slides/Slide25";
import { Slide26 } from "./slides/Slide26";
import { Slide27 } from "./slides/Slide27";

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE",
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica",
  }
);

const Presentation = () => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide1 />
    <Slide2 />
    <Slide3 />
    <Slide4 />
    <Slide5 />
    <Slide6 />
    <Slide7 />
    <Slide8 />
    <Slide8b />
    <Slide9 />
    <Slide10 />
    <Slide11 />
    <Slide12 />
    <Slide13 />
    <Slide14 />
    <Slide15 />
    <Slide16 />
    <Slide17 />
    <Slide18 />
    <Slide19 />
    <Slide191 />
    <Slide20 />
    <Slide21 />
    <Slide21b />
    <Slide22 />
    <Slide23 />
    <Slide24 />
    <Slide25 />
    <Slide26 />
    <Slide27 />
  </Deck>
);

export { Presentation };

export default undefined;

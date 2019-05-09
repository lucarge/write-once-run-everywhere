import React from 'react';
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import { Slide1 } from "./slides/Slide1";
import { Slide2 } from "./slides/Slide2";

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const Presentation = () => (
  <Deck
    transition={['zoom', 'slide']}
    transitionDuration={500}
    theme={theme}
  >
    <Slide1 />
    <Slide2 />
  </Deck>
);

export { Presentation }

export default undefined

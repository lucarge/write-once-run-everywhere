import React from "react";
import { Image, Slide, Text } from "spectacle";
import backgroundImage from './backgroundImage.png';

export const Slide3 = () => (
  <Slide>
    <Image src={backgroundImage} height={500} />

    <Text caps margin="30px 0" textColor="secondary">We're hiring!</Text>
  </Slide>
)

export default undefined

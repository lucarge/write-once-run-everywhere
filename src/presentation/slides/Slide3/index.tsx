import React from "react";
import { Image, Slide, SlideProps, Text } from "spectacle";
import { BoxShadow } from "../../../components/BoxShadow";
import backgroundImage from './backgroundImage.png';

export const Slide3 = (props: SlideProps) => (
  <Slide {...props}>
    <BoxShadow style={{ padding: 0 }}>
      <Image margin="0" src={backgroundImage} />
    </BoxShadow>

    <Text margin="30px 0 0">Do you want to join us?</Text>
    <Text bold>We're hiring!</Text>
  </Slide>
)

export default undefined

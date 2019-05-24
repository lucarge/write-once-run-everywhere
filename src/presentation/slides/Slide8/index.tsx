import React from "react";
import { Image, Slide, Text , SlideProps } from "spectacle";
import airbnbSunsettingReactNative from "./airbnbSunsettingReactNative.png";

export const Slide8 = (props: SlideProps) => (
  <Slide {...props}>
    <Text textAlign="left">Not long after we started, indeed...</Text>
    <Text bold textAlign="left">Airbnb announced they were sunsetting React Native</Text>

    <Image src={airbnbSunsettingReactNative} />
  </Slide>
)

export default undefined

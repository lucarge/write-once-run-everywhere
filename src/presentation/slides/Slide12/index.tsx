import React from "react";
import { Slide, Text, SlideProps } from "spectacle";
import { BoxShadow } from "../../../components/BoxShadow";
import sharingUiBetweenReactAndReactNative from "./sharingUiBetweenReactAndReactNative.png";

export const Slide12 = (props: SlideProps) => (
  <Slide
    bgImage={sharingUiBetweenReactAndReactNative}
    style={{ backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
  >
    <BoxShadow style={{ bottom: "50px", left: "25%", position: "absolute" }}>
      <Text italic margin="20px 0" textSize="24px">
        A more accurate representation of the UI tree
      </Text>
    </BoxShadow>
  </Slide>
);

export default undefined;

import React from "react";
import { Image, Slide, Text, SlideProps } from "spectacle";
import { BoxShadow } from "../../../components/BoxShadow";
import slide6 from "./slide6.png";

export const Slide6 = (props: SlideProps) => (
  <Slide {...props}>
    <Text>Eventually, we went for</Text>
    <Text margin="0 0 48px 0" bold>
      React Native
    </Text>

    <BoxShadow style={{ padding: 0 }}>
      <Image margin="0" src={slide6} />
    </BoxShadow>
  </Slide>
);

export default undefined;

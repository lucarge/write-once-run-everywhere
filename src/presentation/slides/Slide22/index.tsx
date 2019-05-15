import React from "react";
import { Image, Slide, Text } from "spectacle";
import { BoxShadow } from "../../../components/BoxShadow";
import metroTransformer from "./metroTransformer.png";

export const Slide22 = () => (
  <Slide>
    <Text bold textAlign="left">Embrace the bundlers</Text>
    <Text margin="0 0 30px 0" textAlign="left">and truncate the dependency tree when irrelevant</Text>

    <BoxShadow style={{ padding: 0 }}>
      <Image margin="0 auto" src={metroTransformer} />
    </BoxShadow>
  </Slide>
);

export default undefined

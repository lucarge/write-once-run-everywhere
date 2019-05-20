import React from "react";
import { Image, Slide } from "spectacle";
import { BoxShadow } from "../../../components/BoxShadow";
import whoAmI from "./whoAmI.png";

export const Slide2 = () => (
  <Slide>
    <BoxShadow style={{ padding: 0 }}>
      <Image margin="0" src={whoAmI} />
    </BoxShadow>
  </Slide>
)

export default undefined

import React from "react";
import { Image, Slide, Text } from "spectacle";
import { BoxShadow } from "../../../components/BoxShadow";
import buildOutputs from './buildOutputs.png'

export const Slide24 = () => (
  <Slide>
    <BoxShadow>
      <Image src={buildOutputs} />
    </BoxShadow>

    <Text italic margin="20px 0 0" textAlign="left" textSize="24px">
      On the left, the build output when targeting web.
    </Text>

    <Text italic margin="20px 0 0" textAlign="left" textSize="24px">
      On the right, the build output when targeting iOS or Android.
    </Text>

    <Text italic margin="20px 0 0" textAlign="left" textSize="24px">
      The path grayed out is removed at compile time.
    </Text>
  </Slide>
);

export default undefined

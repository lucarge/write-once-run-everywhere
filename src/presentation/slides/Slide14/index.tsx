import React from "react";
import { Slide, Text } from "spectacle";

export const Slide14 = () => (
  <Slide>
    <Text>We first looked at the community, to find</Text>
    <Text bold>existing solutions</Text>

    <Text bold margin="100px 0 0" textAlign="left" textSize="36px">react-native-web</Text>
    <Text textAlign="left" textSize="24px">
      While well mantained, and supported by create-react-app out of the box, it solves the issue of sharing code
      between web and native only for react-native itself. We needed a more generalized solution.
    </Text>

    <Text bold margin="50px 0 0" textAlign="left" textSize="36px">react-native-dom</Text>
    <Text textAlign="left" textSize="24px">
      Presented at ReactEurope 2018, it takes a completely new approach to the issue, "reimplementing" the web for
      providing native-like performances. It's too experimental to be considered production ready, even today.
    </Text>
  </Slide>
)

export default undefined

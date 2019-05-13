import React from "react";
import { Slide, Text } from "spectacle";
import { BoxShadow } from "../../../components/BoxShadow";
import architecturalProposalOverview from "./architecturalProposalOverview.png";

export const Slide10 = () => (
  <Slide
    bgImage={architecturalProposalOverview}
    style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}
  >
    <BoxShadow style={{ bottom: '50px', left: '25%', position: 'absolute' }}>
      <Text italic margin="20px 0" textSize="24px">A visual representation of the proposed architecture</Text>
    </BoxShadow>
  </Slide>
)

export default undefined

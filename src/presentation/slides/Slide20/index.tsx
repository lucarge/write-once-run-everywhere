import React from "react";
import { Image, Slide, Text , SlideProps } from "spectacle";
import dynamicImports from "./dynamicImports.png";

export const Slide20 = (props: SlideProps) => (
  <Slide {...props}>
    <Text bold textAlign="left">Issue #3</Text>
    <Text italic textAlign="left" textSize="24px">
      We should send down the wire the least amount of code necessary to run our apps. Ergo we should not include the
      native code in the web app (and the other way around)
    </Text>

    <Image margin="40px auto" src={dynamicImports} />

    <Text bold margin="20px 0 10px" textAlign="left" textSize="28px">First attempt</Text>
    <Text margin="20px 0 0" textAlign="left" textSize="24px">
      The obvious solution to this issue is to leverage dynamic imports, so that only the code that you'll need will be
      fetched.
    </Text>
  </Slide>
);

export default undefined

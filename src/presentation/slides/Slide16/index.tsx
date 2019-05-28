import React from "react";
import { List, ListItem, Slide, SlideProps, Text } from "spectacle";

const Fix = List as any;

export const Slide16 = (props: SlideProps) => (
  <Slide {...props}>
    <Text bold textAlign="left">
      Issues
    </Text>

    <Fix ordered margin="100px 0">
      <ListItem margin="0 0 48px" textAlign="left" textSize="24px">
        We should be able to <strong>differentiate implementations</strong> per platform if needed, at any level of
        abstraction.
      </ListItem>

      <ListItem margin="0 0 48px" textAlign="left" textSize="24px">
        Platform agnostic abstractions should be able to reference and{" "}
        <strong>use platform specific implementations</strong>, without having to be written twice.
      </ListItem>

      <ListItem margin="0 0 48px" textAlign="left" textSize="24px">
        We should send down the wire the <strong>least amount of code</strong> necessary to run our apps. Ergo we should
        not include the native code in the web app (and the other way around). Aside of performance reasons, webpack
        would fail to compile native code, and metro could fail to compile web too.
      </ListItem>
    </Fix>
  </Slide>
);

export default undefined;

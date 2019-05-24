import React from "react";
import { List, ListItem, Slide, SlideProps, Text } from "spectacle";

const Fix = List as any;

export const Slide16 = (props: SlideProps) => (
  <Slide {...props}>
    <Text bold textAlign="left">Issues</Text>

    <Fix ordered margin="100px 0">
      <ListItem margin="0 0 20px" textAlign="left" textSize="24px">
        We should be able to differentiate implementations per platform if needed, at any level of abstraction
      </ListItem>

      <ListItem margin="0 0 20px" textAlign="left" textSize="24px">
        Platform agnostic abstractions should be able to reference and use platform specific implementations,
        without having to be written twice
      </ListItem>

      <ListItem margin="0 0 20px" textAlign="left" textSize="24px">
        We should send down the wire the least amount of code necessary to run our apps. Ergo we should not include
        the native code in the web app (and the other way around)
      </ListItem>
    </Fix>
  </Slide>
);

export default undefined

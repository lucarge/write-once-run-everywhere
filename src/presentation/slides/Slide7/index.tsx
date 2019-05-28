import React from "react";
import { Emoji } from "../../../components/Emoji";
import { List, ListItem, Slide, Text, SlideProps } from "spectacle";

export const Slide7 = (props: SlideProps) => (
  <Slide {...props}>
    <Text bold textAlign="left">
      React Native wasn't in a great shape
    </Text>
    <Text textAlign="left">at the time...</Text>

    <List margin="100px 0 0">
      <ListItem margin="20px 0" textSize="24px">
        <Emoji style={{ fontSize: "32px" }} value="🐛" /> Lots of <strong>unresolved issues</strong>
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        <Emoji style={{ fontSize: "32px" }} value="⛏" /> Lots of <strong>breaking changes</strong> between versions,
        that made upgrading hard
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        <Emoji style={{ fontSize: "32px" }} value="🔮" /> <strong>Uncertainty</strong> about the future of the project
        inside Facebook
      </ListItem>
    </List>
  </Slide>
);

export default undefined;

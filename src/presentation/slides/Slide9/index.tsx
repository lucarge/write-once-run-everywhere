import React from "react";
import { Emoji } from "../../../components/Emoji";
import { List, ListItem, Slide, Text, SlideProps } from "spectacle";

export const Slide9 = (props: SlideProps) => (
  <Slide {...props}>
    <Text bold textAlign="left">
      Nevertheless, we saw a lot of potential
    </Text>
    <Text textAlign="left">in the technology</Text>

    <List margin="100px 0">
      <ListItem margin="20px 0" textSize="24px">
        <Emoji style={{ fontSize: "32px" }} value="🍻" /> We could <strong>share business logic</strong> between the web
        app and the mobile apps
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        <Emoji style={{ fontSize: "32px" }} value="😎" /> The technology would be <strong>easier</strong> to pick up for
        the frontend team, compared to going full Native
      </ListItem>

      <ListItem margin="20px 0" textSize="24px">
        <Emoji style={{ fontSize: "32px" }} value="🚀" /> If we needed juice in <strong>performance</strong>, we would
        be free to go full Native "over the bridge"
      </ListItem>
    </List>

    <Text italic textAlign="left" textSize="24px">
      However, we still needed to write the UI twice.
    </Text>
  </Slide>
);

export default undefined;

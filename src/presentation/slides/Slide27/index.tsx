import React from "react";
import { Slide, Text, SlideProps } from "spectacle";
import { Row } from "../../../components/Row";
import { Column } from "../../../components/Column";
import { Emoji } from "../../../components/Emoji";

export const Slide27 = (props: SlideProps) => (
  <Slide {...props}>
    <Text bold>Thank you!</Text>
    <Emoji style={{ fontSize: "60px", margin: "30px 0 0" }} value="🙏" />

    <Column paddingTop={100}>
      <Row alignItems="flex-start" justifyContent="space-between">
        <Column flexBasis="0" flexGrow={1}>
          <Text bold margin="0" textAlign="left" textSize="28px">
            Links
          </Text>
          <Text margin="20px 0 0" textAlign="left" textColor="tertiary" textSize="24px">
            https://twitter.com/lucarge
          </Text>
          <Text margin="20px 0 0" textAlign="left" textColor="tertiary" textSize="24px">
            https://github.com/lucarge
          </Text>
        </Column>

        <Column flexBasis="0" flexGrow={1}>
          <Text bold margin="0" textAlign="right" textSize="28px">
            And if you want to work with me
          </Text>
          <Text margin="20px 0 0" textAlign="right" textSize="24px">
            apply at <span style={{ color: "#03A9FC" }}>https://bit.ly/2WYUUq5</span>
          </Text>
        </Column>
      </Row>
    </Column>

    <Column padding="200px 0 100px">
      <Row alignItems="center" justifyContent="center">
        <Emoji style={{ fontSize: "96px", margin: "10px 20px" }} value="👨‍🏫" />
        <span style={{ fontSize: "36px", fontWeight: "bold" }}>Questions?</span>
      </Row>
    </Column>
  </Slide>
);

export default undefined;

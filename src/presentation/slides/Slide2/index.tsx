import React from "react";
import { CodePane, Heading, Slide } from "spectacle";

const source = `
  const user = {
    name: 'Luca',
    surname: 'Argenziano',
    age: 24,
    role: 'Software Engineer',
    company: 'ProntoPro',
    twitter: '@lucarge',
  }
`

export const Slide2 = () => (
  <Slide bgColor="secondary" transition={['slide']}>
    <Heading caps margin="0 0 30px" textAlign="left" textSize="48">
      Who am I?
    </Heading>

    <CodePane lang="javascript" source={source} style={{ fontSize: 24 }} theme="dark" />
  </Slide>
)

export default undefined

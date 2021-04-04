import { Box, Heading, Text, Stack } from '@chakra-ui/react'
import { Container } from 'next/app'
function Home() {
  return (
    <Box px={10}>
      <Stack spacing={5}>
        <Heading>Who Am I?</Heading>
        <Container>
          <Text fontSize="xl">{`I'm Dimitri Harding, a full-stack tester & developer, entrepreneur, and part-time photographer.`}</Text>
          <Text fontSize="xl">
            I share everything that I know about testing and making software
            through my articles, courses and soon tweets.
          </Text>
          <Text fontSize="xl">
            Although most of my professional life as been in testing, I spend a
            lot of time developing on my own.
          </Text>
          <Text fontSize="xl">
            This is where I will share what I am working on and the things that
            I have learn along the way
          </Text>
        </Container>
      </Stack>
    </Box>
  )
}

export default Home

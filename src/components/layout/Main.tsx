import { Box, Flex, useColorModeValue as mode } from '@chakra-ui/react'
const Main = ({ children }) => {
  return (
    <Box
      position="relative"
      marginInlineStart="var(--sidebar-wide)"
      py="6"
      pl="10"
      pr="6"
      transition="left 0.2s ease 0s"
      left="var(--chakra-space-0)"
      flex="1 1 0%"
      borderRadius="lg"
    >
      <Box
        maxWidth="2560px"
        borderRadius="lg"
        // background={mode('gray.50', 'gray.600')}
        h="100%"
        webkitfontsmoothing="blur(20px)"
        backdropfilter="blur(20px)"
        backgroundColor="var(--theme-bg-color)"
      >
        <Flex direction="column" height="full">
          {children}
        </Flex>
      </Box>
    </Box>
  )
}

export default Main

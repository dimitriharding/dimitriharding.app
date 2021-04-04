import { Badge, useColorModeValue, WrapItem, Center } from '@chakra-ui/react'

const Tag = ({ children }) => (
  <WrapItem>
    <Center>
      <Badge
        px={2}
        py={1}
        bg={useColorModeValue('gray.50', 'gray.800')}
        fontWeight={'400'}
      >
        {children}
      </Badge>
    </Center>
  </WrapItem>
)
export default Tag

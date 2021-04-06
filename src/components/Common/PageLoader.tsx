import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'

const PageLoader = ({ size = 'xl', ...rest }) => (
  <Center mt="20%">
    <Spinner {...rest} size={size} />
  </Center>
)

export default PageLoader

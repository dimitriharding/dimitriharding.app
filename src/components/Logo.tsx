import { Box } from '@chakra-ui/react'
import React from 'react'

function Logo() {
  return (
    <Box
      w="15px"
      h="15px"
      backgroundColor="#f96057"
      borderRadius="50%"
      boxShadow="24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65"
      marginRight="334.5px"
      flexShrink={0}
      display={['none', 'none', 'block']}
    />
  )
}

export default Logo

import { chakra } from '@chakra-ui/react'
import React from 'react'

const LeftSide = ({ children }) => (
  <chakra.div
    padding="26px"
    flexShrink={0}
    flexBasis="380px"
    borderRight="1px solid var(--border-color);"
    display={{
      base: 'none',
      sm: 'none',
      md: 'none',
      lg: 'block',
    }}
  >
    {children}
  </chakra.div>
)

export default LeftSide

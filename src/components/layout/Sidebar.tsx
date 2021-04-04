import { Box } from '@chakra-ui/react'

const Sidebar = ({ children }) => {
  return (
    <Box
      w="var(--sidebar-width)"
      position="fixed"
      color="gray.200"
      py="5"
      px="3"
      as="nav"
      display="flex"
      flexDirection="column"
      flex="1 1 0%"
    >
      {children}
    </Box>
  )
}

export default Sidebar

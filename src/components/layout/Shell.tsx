import { Flex } from '@chakra-ui/layout'
import SideBio from '../SideBio'
import Main from './Main'
import MainMenu from './MainMenu'
import Sidebar from './Sidebar'

const Shell = ({ children }) => (
  <Flex
    id="app"
    h="100vh"
    backgroundImage="url('/images/background-3.jpg')"
    overflow="hidden"
  >
    <Sidebar>
      <SideBio />
    </Sidebar>
    <Main>
      <MainMenu />
      {children}
    </Main>
  </Flex>
)

export default Shell

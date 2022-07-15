import Header from './Header'
import LogoHome from './LogoHome'
import HeaderWrapper from './HeaderWrapper'
import MyBookings from './MyBookings'
import HeaderFrame from './HeaderFrame'
import ExtraActionContainer from './ExtraActionContainer'

function HeaderContainer() {
  return (
    <>
      <Header>
        <HeaderWrapper>
          <HeaderFrame>
            <LogoHome />
            <ExtraActionContainer />
          </HeaderFrame>
        </HeaderWrapper>
      </Header>
    </>
  )
}

export default HeaderContainer

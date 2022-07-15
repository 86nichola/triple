import Header from 'components/Header'
import LogoHome from 'components/LogoHome'
import HeaderWrapper from 'components/HeaderWrapper'
import MyBookings from 'components/MyBookings'
import HeaderFrame from 'components/HeaderFrame'

function MyBooking() {
  return (
    <>
      <Header>
        <HeaderWrapper>
          <HeaderFrame>
            <LogoHome />
          </HeaderFrame>
        </HeaderWrapper>
      </Header>
      <div>
        <div
          style={{
            fontSize: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            height: '100vh',
            backgroundColor: '#f4f4f3',
          }}
        >
          MY BOOKINGS
        </div>
      </div>
    </>
  )
}
export default MyBooking

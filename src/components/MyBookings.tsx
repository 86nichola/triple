import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  font-size: 17px;
  padding: 10px 14px;
  color: rgba(58, 58, 58, 0.8);
`

function MyBookings() {
  return <StyledLink to="/my-bookings">내 예약</StyledLink>
}

export default MyBookings

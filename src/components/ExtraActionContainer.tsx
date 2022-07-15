import MyBookings from './MyBookings'
import styled from 'styled-components'

interface ExtraActionContainerProps {
  children: JSX.Element[] | JSX.Element
}

const StyledDiv = styled.div`
  margin-left: auto;
`
function ExtraActionContainer() {
  return (
    <StyledDiv>
      <MyBookings />
    </StyledDiv>
  )
}

export default ExtraActionContainer

import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 1040px;
  height: auto;
  margin: 0px auto;
  position: relative;
`

interface SectionWrapperProps {
  children: JSX.Element[] | JSX.Element
}

function SectionWrapper({ children }: SectionWrapperProps) {
  return <StyledDiv>{children}</StyledDiv>
}
export default SectionWrapper

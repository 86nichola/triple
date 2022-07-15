import styled from 'styled-components'

const StyledSection = styled.section`
  position: relative;
  overflow: hidden;
  background: inherit;
  background-size: cover;
  background-position: center;
`

interface SectionProps {
  children?: JSX.Element[] | JSX.Element
}

function Section({ children }: SectionProps) {
  return <StyledSection>{children}</StyledSection>
}
export default Section

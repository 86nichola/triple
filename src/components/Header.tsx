import styled from 'styled-components'

interface HeaderProps {
  children?: JSX.Element[] | JSX.Element
}

const StyledHeader = styled.header`
  top: 0px;
  left: 0px;
  right: 0px;
  float: none;
`

function Header({ children }: HeaderProps) {
  return <StyledHeader>{children}</StyledHeader>
}
export default Header

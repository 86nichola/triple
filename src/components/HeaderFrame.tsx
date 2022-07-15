import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;

  align-items: center;
  height: 80px;
  padding: 0px 42px;
  border-bottom: 1px solid rgb(239, 239, 239);
`
interface HeaderFrameProps {
  children: JSX.Element[] | JSX.Element
}

function HeaderFrame({ children }: HeaderFrameProps) {
  return <StyledDiv className="HeaderFrame">{children}</StyledDiv>
}

export default HeaderFrame

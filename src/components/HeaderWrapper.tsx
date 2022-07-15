import styled from 'styled-components'
interface HeaderWrapperProps {
  children: JSX.Element[] | JSX.Element
}

const StyledDiv = styled.div`
  height: 80px;
  padding: 0px 42px;
  padding-top: 0px;
  padding-right: 42px;
  padding-bottom: 0px;
  padding-left: 42px;
  display: flex;
  align-items: center;
`

function HeaderWrapper({ children }: HeaderWrapperProps) {
  return <div className="HeaderWrapper">{children}</div>
}

export default HeaderWrapper

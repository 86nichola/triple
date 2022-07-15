import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from './Icon'

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 10px 8px;
  display: flex;
`

const StyledImg = styled.img`
  width: 68px;
  height: 24px;
`

function LogoHome() {
  return (
    <>
      <StyledLink to="/">
        <StyledImg src="https://assets.triple.guide/images/img_intro_logo_dark.svg"></StyledImg>
      </StyledLink>
    </>
  )
}

export default LogoHome

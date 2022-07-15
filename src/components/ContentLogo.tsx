import styled from 'styled-components'
import triple2x from '../assets/images/triple2x.png'

const StyledDiv = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;

  box-sizing: border-box;
  background-image: url(${(props: { path: string }) => props.path});
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
`

function ContentLogo() {
  return <StyledDiv path={triple2x}>2021년 12월 기준</StyledDiv>
}
export default ContentLogo

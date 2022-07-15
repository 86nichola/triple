import styled from 'styled-components'

const StyledDiv = styled.div`
  display: inline-block;
  font-family: sans-serif;
  background-image: url(${(props: { path: string }) => props.path});
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;

  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
`
interface AwardItemProps {
  text?: string[]
  imagePath?: string
}

function AwardItem({ text = [], imagePath = '' }: AwardItemProps) {
  return (
    <StyledDiv path={imagePath}>
      {text[0]}
      <br />
      {text[1]}
    </StyledDiv>
  )
}

export default AwardItem

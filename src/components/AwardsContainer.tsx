import styled from 'styled-components'
import AwardItem from './AwardItem'
import playStore2x from '../assets/images/play-store2x.png'
import badgeAppl4x from '../assets/images/badge-apple4x.png'

const StyledDiv = styled.div`
  white-space: nowrap;
  margin: 50px 0px 140px 623px;

  font-size: 14px;
`

function AwardsContainer() {
  return (
    <>
      <StyledDiv className="AwardsContainer">
        <AwardItem
          imagePath={playStore2x}
          text={['2018 구글 플레이스토어', '올해의 앱 최우수상 수상']}
        />
        <AwardItem
          imagePath={badgeAppl4x}
          text={['2018 애플 앱스토어', '오늘의 여행앱 선정']}
        />
      </StyledDiv>
    </>
  )
}
export default AwardsContainer
/*

      <div>
        <img src={img1}></img>
        <img src={img2}></img>
        <img src={img3}></img>
      </div>
*/

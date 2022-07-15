import styled from 'styled-components'
import MetricsItem from './MetricsItem'

const StyledDiv = styled.div`
  margin-left: 623px;
  padding-top: 150px;
  font-size: 36px;
`

function MetricsContainer() {
  enum travelMetrics {
    'travler',
    'travelReview',
    'travelPlan',
  }

  const items = [
    {
      id: travelMetrics.travler,
      count: 700,
      addInfo1: '만 명',
      addInfo2: '의 여행자',
    },
    {
      id: travelMetrics.travelReview,
      count: 100,
      addInfo1: '만 개',
      addInfo2: '의 여행리뷰',
    },
    {
      id: travelMetrics.travelPlan,
      count: 470,
      addInfo1: '만 개',
      addInfo2: '의 여행일정',
    },
  ]

  return (
    <StyledDiv>
      {items.map((item) => (
        <MetricsItem
          key={item.id}
          totalCount={item.count}
          totalSeconds={2}
          addInfo1={item.addInfo1}
          addInfo2={item.addInfo2}
        />
      ))}
    </StyledDiv>
  )
}

export default MetricsContainer

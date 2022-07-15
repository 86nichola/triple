import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
interface MetricsItemProps {
  totalCount: number
  totalSeconds: number
  addInfo1?: string
  addInfo2?: string
}

const StyledDiv = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`

function MetricsItem({
  totalCount,
  totalSeconds,
  addInfo1,
  addInfo2,
}: MetricsItemProps) {
  interface animateProps {
    cancelAnimationFrame(handle: number): void
    requestAnimationFrame(callback: FrameRequestCallback): number
    current: number
  }
  const [viewCount, setViewCount] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const frameId = useRef<number>(0)
  /*====================
   * 최초렌더링 시 시작
   ====================*/
  useEffect(() => {
    animationCounting({ totalCount, totalSeconds })

    return () => {
      window.cancelAnimationFrame(frameId.current)
    }
  }, [])

  function animationCounting({ totalCount, totalSeconds }: MetricsItemProps) {
    setCurrentTime((prev) => Date.now())
    const duration = totalSeconds * 1000

    const step = (currentTime: number) => {
      if (!startTime) {
        setStartTime((prev: number) => currentTime)
      }

      const progress =
        Math.min((currentTime - startTime) / duration, 1) === 1
          ? 1
          : 1 - Math.pow(2, (-11 * (currentTime - startTime)) / duration)
      setViewCount((prev) => Math.floor(progress * (totalCount - viewCount)))

      if (progress < 1) {
        frameId.current = window.requestAnimationFrame(step)
      }
    }
    frameId.current = window.requestAnimationFrame(step)
  }

  return (
    <StyledDiv>
      <strong>
        <span>{viewCount}</span>
        {addInfo1}
      </strong>
      {addInfo2}
    </StyledDiv>
  )
}
export default MetricsItem

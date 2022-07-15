import AwardsContainer from './AwardsContainer'
import ContentLogo from './ContentLogo'
import MetricsContainer from './MetricsContainer'
import SectionWrapper from './SectionWrapper'
import Section from './Section'
import Transition from 'react-transition-group/Transition'

function SectionContainer() {
  return (
    <>
      <Section>
        <SectionWrapper>
          <ContentLogo />
          <MetricsContainer />
          <AwardsContainer />
        </SectionWrapper>
      </Section>
    </>
  )
}
export default SectionContainer

/*


    interface countingProps {
        dayCount: number;
        monthCount: number;
        people: number;
    }

    const [count, setCount] = useState({
        dayCount: 0,
        monthCount: 0,
        people: 0,
    } as countingProps);
    const [timerId, setTimerId] = useState(0);
    const counting = (limitTime: number, destination: number) => {
        const intervalTiminig = (limitTime / destination) * 100;
        const endPoint = destination;

        setTimerId((prevId: number) => {
            return window.setInterval(() => {
                if (endPoint === count.dayCount) {
                    clearInterval(prevId);
                    clearInterval(timerId);
                }
                setCount((prevCount) => {
                    return {
                        // 객체복사.
                        ...prevCount,
                        dayCount: prevCount.dayCount + 1,
                        monthCount: prevCount.monthCount + 1,
                        people: prevCount.people + 1,
                    };
                });
            }, intervalTiminig);
        });
    };

    useEffect(() => {
        return () => {
            clearInterval(timerId);
        };
    }, []);

    const onClickStart = () => {
        debugger;
        counting(10, 1000);
    };

    const onClickReset = () => {
        clearInterval(timerId);
        setCount((prev) => ({
            ...prev,
            dayCount: 0,
            monthCount: 0,
            people: 0,
        }));
    };

    const onClickStop = () => {
        clearInterval(timerId);
    };

*/

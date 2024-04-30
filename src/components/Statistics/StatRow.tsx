import styled from "styled-components"
import StatCard from "./StatCard";

interface StatData {
  id: number;
  top: string;
  bottom: string;
}

const StatRow = () => {

  const statsProps: StatData[]= [
      {id: 0, top: "1", bottom:"Projects Completed"},
      {id: 1, top: "2", bottom:"Years of Expertise"},
      {id: 2, top: "3", bottom:"Major Pursuits Won"},
      {id: 3, top: "4", bottom:"Revenue Generated"},
  ]
  return (
    <>
      <StatRowWrapper>
        {statsProps.map((stat) => (
          <StatCard key={stat.id} id={stat.id} top={stat.top} bottom={stat.bottom} />
        ))}
      </StatRowWrapper>
    </>
  )
}

const StatRowWrapper = styled.div`
  background-color: rebeccapurple;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 2rem auto;
  width: 90vw;
  min-height: 180px;
`

export default StatRow
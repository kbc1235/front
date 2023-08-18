import CustomDougnutChart from "./components/chart/doughnut";
import CustomBarChart from "./components/chart/bar";
import CustomLineChart from "./components/chart/line";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <CustomDougnutChart />
      <CustomBarChart />
      <CustomLineChart />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 500px;
`;

import "@mantine/core/styles.css";
import { theme } from "./theme";
import { Container, MantineProvider, Table } from "@mantine/core";
import { aggregateAverageYieldAndArea } from "./utils/aggregateAverageYieldAndArea";
import { aggregateMaxMinProduction } from "./utils/aggregations";
import { loadData } from "./utils/dataLoader";
import AverageTable from "./components/AverageTable";
import MaxMinTable from "./components/MaxMinTable";
import useWindowWidth from "./hooks/useWindowWidth";

const demoProps = {
  h: 50,
  mt: "md",
};

export default function App() {
  const width = useWindowWidth();

  const data = loadData();
  const maxMinData = aggregateMaxMinProduction(data);
  const avgData = aggregateAverageYieldAndArea(data);

  return (
    <MantineProvider theme={theme}>
      <Container {...demoProps}>
        <h1>Agriculture Data Analysis</h1>
        <h2>Max and Min Production by Year</h2>
        {width < 530 ? (
          <Table.ScrollContainer minWidth={500} type="native">
            <MaxMinTable data={maxMinData} />
          </Table.ScrollContainer>
        ) : (
          <MaxMinTable data={maxMinData} />
        )}
        <h2>Average Yield and Cultivation Area</h2>
        {width < 530 ? (
          <Table.ScrollContainer minWidth={500} type="native">
            <AverageTable data={avgData} />
          </Table.ScrollContainer>
        ) : (
          <AverageTable data={avgData} />
        )}
      </Container>
    </MantineProvider>
  );
}

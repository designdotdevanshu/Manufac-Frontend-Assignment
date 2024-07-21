import { Table } from "@mantine/core";

type AverageTableProps = {
  data: {
    crop: string;
    avgYield: string;
    avgArea: string;
  }[];
};

const AverageTable = ({ data }: AverageTableProps) => {
  const rows = data.map(({ crop, avgYield, avgArea }) => (
    <Table.Tr key={crop}>
      <Table.Td>{crop.replace(/([a-z])([A-Z])/g, "$1 $2")}</Table.Td>
      <Table.Td>{avgYield}</Table.Td>
      <Table.Td>{avgArea}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500} type="native">
      <Table horizontalSpacing="xl" striped highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Crop</Table.Th>
            <Table.Th>Average Yield of the Crop between 1950-2020</Table.Th>
            <Table.Th>Average Cultivation Area of the Crop between 1950-2020</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
};

export default AverageTable;

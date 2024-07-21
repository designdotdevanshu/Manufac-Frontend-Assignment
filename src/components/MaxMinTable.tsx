import { Table } from "@mantine/core";

type MaxMinTableProps = {
  data: {
    year: string;
    maxCrop: string;
    minCrop: string;
  }[];
};

const MaxMinTable = ({ data }: MaxMinTableProps) => {
  const rows = data.map(({ year, maxCrop, minCrop }) => (
    <Table.Tr key={year}>
      <Table.Td>{year.slice(-4)}</Table.Td>
      <Table.Td>{maxCrop.replace(/([a-z])([A-Z])/g, "$1 $2")}</Table.Td>
      <Table.Td>{minCrop.replace(/([a-z])([A-Z])/g, "$1 $2")}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table horizontalSpacing="xl" stickyHeader striped highlightOnHover withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Year</Table.Th>
          <Table.Th>Crop with Maximum Production in that Year</Table.Th>
          <Table.Th>Crop with Minimum Production in that Year</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default MaxMinTable;

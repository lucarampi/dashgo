import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function Dashboard() {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        "2022-07-12T00:00:00.000Z",
        "2022-07-13T00:00:00.000Z",
        "2022-07-14T00:00:00.000Z",
        "2022-07-15T00:00:00.000Z",
        "2022-07-16T00:00:00.000Z",
        "2022-07-17T00:00:00.000Z",
        "2022-07-18T00:00:00.000Z",
      ]
    },
    fill:{
        opacity: 0.3,
        type:'gradient',
        gradient: {
            shade:'dark',
            opacityFrom: 0.7,
            opacityTo: 0.15,

        }
    }
  };
  const series = [
    {
      name: "series1",
      data: [5, 21, 15, 36, 24, 11, 25]
    },
  ];

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" px="6" my="6" maxWidth={1480} mx="auto">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px">
          <Box p="8" pb="4" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da Semana{" "}
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>

          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de Abertura{" "}
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

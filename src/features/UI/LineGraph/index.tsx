// mui
import { LineChart } from "@mui/x-charts/LineChart";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";

interface ILineGraphProps {
  title: string;
  xValue: number[];
  yValue: number[];
}

export function LineGraph({ title, xValue, yValue }: ILineGraphProps) {
  return (
    <Box
      width="100%"
      sx={{
        backgroundColor: grey[900],
        borderRadius: 3,
        padding: 2,
      }}
    >
      <LineChart
        xAxis={[{ data: xValue, scaleType: "linear", label: `last ${xValue.length} values` }]}
        yAxis={[{ scaleType: "linear" }]}
        series={[
          {
            curve: "natural",
            data: yValue,
            label: title,
            showMark: false,
          },
        ]}
        height={300}
      />
    </Box>
  );
}

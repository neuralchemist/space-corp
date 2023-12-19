// MUI
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// custom types
import { ISensorDataWS } from "../../types";
// custom components
import { LineGraph } from "../../../UI";

interface IStatBoardProps {
  sensorDataBuffered: ISensorDataWS[];
}

export function ChartBoard({ sensorDataBuffered }: IStatBoardProps) {
  const xAxisValue = Array(sensorDataBuffered.length)
    .fill(0)
    .map((_, id) => id);

  return (
    <Stack direction={"column"} gap={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={4}
      >
        <LineGraph
          title="Velocity"
          xValue={xAxisValue}
          yValue={sensorDataBuffered.map((item) => item.Velocity)}
        />
        <LineGraph
          title="Altitude"
          xValue={xAxisValue}
          yValue={sensorDataBuffered.map((item) => item.Altitude)}
        />
        <LineGraph
          title="Temperature"
          xValue={xAxisValue}
          yValue={sensorDataBuffered.map((item) => item.Temperature)}
        />
      </Box>
    </Stack>
  );
}

// MUI
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SpeedIcon from "@mui/icons-material/Speed";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ThermostatIcon from "@mui/icons-material/Thermostat";
// custom types
import { ISensorDataREST } from "../../types";
// custom components
import { MessageBox, StatBox } from "../../../UI";

interface IStatBoardProps {
  sensorData: ISensorDataREST;
}

export function StatBoard({ sensorData }: IStatBoardProps) {
  return (
    <Stack direction={"column"} gap={2}>
      <MessageBox message={sensorData.statusMessage} />

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={4}
      >
        <StatBox
          title="Velocity"
          value={sensorData.velocity.toFixed(2)}
          unit="km/h"
          icon={SpeedIcon}
        />

        <StatBox
          title="Altitude"
          value={sensorData.altitude.toFixed(2)}
          unit="meters"
          icon={RocketLaunchIcon}
        />

        <StatBox
          title="Temperature"
          value={sensorData.temperature.toFixed(2)}
          unit="°C"
          icon={ThermostatIcon}
        />
      </Box>
    </Stack>
  );
}

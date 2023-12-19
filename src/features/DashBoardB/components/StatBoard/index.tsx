// MUI
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import SpeedIcon from "@mui/icons-material/Speed";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ThermostatIcon from "@mui/icons-material/Thermostat";
// custom types
import { ISensorDataWS } from "../../types";
// custom components
import { MessageBox, StatBox } from "../../../UI";

interface IStatBoardProps {
  sensorData: ISensorDataWS;
}

export function StatBoard({ sensorData }: IStatBoardProps) {
  return (
    <Stack direction={"column"} gap={2}>
      <MessageBox message={sensorData.StatusMessage} />

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={4}
      >
        <StatBox
          title="Velocity"
          value={sensorData.Velocity.toFixed(2)}
          unit="km/h"
          icon={SpeedIcon}
        />

        <StatBox
          title="Altitude"
          value={sensorData.Altitude.toFixed(2)}
          unit="meters"
          icon={RocketLaunchIcon}
        />

        <StatBox
          title="Temperature"
          value={sensorData.Temperature.toFixed(2)}
          unit="°C"
          icon={ThermostatIcon}
        />
      </Box>
    </Stack>
  );
}

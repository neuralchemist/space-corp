// mui
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// custom components
import { StatBoard } from "../StatBoard";
// custom api
import { useGetSensorData } from "../../api";
// custom types
import { ISensorDataREST } from "../../types";

export function DashboardA() {
  const { sensorData, queryStatus, refetchSensorData } = useGetSensorData();

  // TODO: Replace by Dashboard skeleton
  if (queryStatus === "pending") {
    return <h1>loading sensor data</h1>;
  }

  if (queryStatus === "error") {
    return <h1>failed to load sensor data</h1>;
  }

  const handleRefetchSensorData = () => {
    refetchSensorData();
  };

  return (
    <Stack m={5} gap={2}>
      <Typography variant="h4">Assignment A</Typography>
      <StatBoard sensorData={sensorData as ISensorDataREST} />
      <Button
        variant="contained"
        onClick={handleRefetchSensorData}
        sx={{ width: "200px" }}
      >
        Update Info
      </Button>
    </Stack>
  );
}

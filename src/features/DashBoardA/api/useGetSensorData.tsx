// axios
import axios from "axios";
// react-query
import { useQuery, useQueryClient } from "@tanstack/react-query";
// custom types
import { ISensorDataREST } from "../types";

/**
 * using react query to fetch sensor data
 */

const SENSORDATA_CACHENAME = "sensor-data";
const URL =
  "https://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumStatus";

async function findSensorData(): Promise<ISensorDataREST> {
  try {
    const { data } = await axios.get<ISensorDataREST>(URL);
    return data;
  } catch (err) {
    throw new Error("Could not fetch sensor data");
  }
}

export function useGetSensorData() {
  const { data, status, error } = useQuery<ISensorDataREST, Error>({
    queryKey: [SENSORDATA_CACHENAME],
    queryFn: findSensorData,
  });

  const queryClient = useQueryClient();

  const refetchSensorData = () => {
    queryClient.invalidateQueries({ queryKey: [SENSORDATA_CACHENAME] });
  };

  return { sensorData: data, queryStatus: status, error, refetchSensorData };
}

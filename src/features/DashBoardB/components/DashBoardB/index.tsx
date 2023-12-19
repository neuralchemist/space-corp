// react
import { useState, useEffect } from "react";
// react use websocket
import useWebSocket from "react-use-websocket";
// mui
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";

// custom components
import { StatBoard } from "../StatBoard";
import { ChartBoard } from "../ChartBoard";
// custom types
import { ISensorDataWS } from "../../types";
// custom api
import { actionOnSpectrum } from "../../api";

const WS_URL =
  "wss://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumWS";

const BUFFER_SIZE = 40;

export function DashboardB() {
  const [isActionRequired, setIsActionRequired] = useState(false);
  const [sensorData, setSensorData] = useState<null | ISensorDataWS>(null);
  const [sensorDataBuffered, setSensorDataBuffered] = useState<ISensorDataWS[]>(
    Array(BUFFER_SIZE).fill(0)
  );
  const { lastJsonMessage } = useWebSocket<ISensorDataWS>(WS_URL, {
    share: false,
    shouldReconnect: () => true,
    reconnectAttempts: 10,
    reconnectInterval: (attemptNumber) =>
      Math.min(Math.pow(2, attemptNumber) * 1000, 10000), // exponential back of
  });

  // Run when a new WebSocket message is received (lastJsonMessage)
  useEffect(() => {
    if (lastJsonMessage) {
      setSensorData(lastJsonMessage);
      setSensorDataBuffered((prevData) =>
        [lastJsonMessage, ...prevData].slice(0, BUFFER_SIZE)
      );

      if (lastJsonMessage.IsActionRequired) {
        setIsActionRequired(true);
      }
    }
  }, [lastJsonMessage]);

  const handleIsActionRequired = async () => {
    try {
      await actionOnSpectrum();
      setIsActionRequired(false);
    } catch (e) {
      console.log("could not fix spectrum");
    }
  };

  return (
    <Stack m={5} gap={4}>
      <Typography variant="h4">Assignment B</Typography>
      {sensorData ? (
        <>
          {isActionRequired && (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={isActionRequired}
            >
              <Alert
                variant="filled"
                severity="error"
                action={
                  <Button
                    onClick={handleIsActionRequired}
                    color="info"
                    size="small"
                    variant="contained"
                  >
                    Act On Spectrum
                  </Button>
                }
              >
                Critical Error. Take Action.
              </Alert>
            </Backdrop>
          )}

          <StatBoard sensorData={sensorData as ISensorDataWS} />
          <ChartBoard
            sensorDataBuffered={sensorDataBuffered as ISensorDataWS[]}
          />
        </>
      ) : (
        <p>Waiting for live data...</p>
      )}
    </Stack>
  );
}

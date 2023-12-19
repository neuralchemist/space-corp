import { useState } from "react";
// mui
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
// custom features
import { DashboardA } from "@features/DashBoardA";
import { DashboardB } from "@features/DashBoardB";

export function HomePage() {
  const [dashboard, setDashboard] = useState<"A" | "B">("A");

  const handleSwitchDashboard = () => {
    if (dashboard === "A") setDashboard("B");
    else setDashboard("A");
  };

  return (
    <Stack margin={2}>
      <Typography variant="h1">Space Corp</Typography>
      <Button
        onClick={handleSwitchDashboard}
        variant="contained"
        color="info"
        sx={{ width: 250, m: 2 }}
      >
        Swith to dashboard {dashboard === "A" ? "B" : "A"}
      </Button>
      {dashboard === "A" ? <DashboardA /> : <DashboardB />}
    </Stack>
  );
}

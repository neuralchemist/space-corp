import { ElementType } from "react";
// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { grey, green, orange } from "@mui/material/colors";

interface IStatBoxProps {
  title: string;
  value: string;
  unit: string;
  icon: ElementType<SvgIconProps>;
}

export function StatBox({ title, value, unit, icon: Icon }: IStatBoxProps) {
  console.log("StatBox -> value ", value);

  const isValuePositive = Number(value) >= 0;

  return (
    <Box
      width="100%"
      sx={{
        backgroundColor: grey[900],
        borderRadius: 3,
        padding: 2,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" fontWeight="bold" sx={{ color: grey[100] }}>
          {title}
        </Typography>

        <Icon
          sx={{
            color: isValuePositive ? green[500] : orange[500],
            fontSize: "26px",
          }}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography
          variant="h5"
          sx={{ color: isValuePositive ? green[500] : orange[500] }}
        >
          {value}
        </Typography>

        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: isValuePositive ? green[600] : orange[600] }}
        >
          {unit}
        </Typography>
      </Box>
    </Box>
  );
}

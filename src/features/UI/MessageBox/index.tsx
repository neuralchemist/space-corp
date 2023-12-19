// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

interface IMessageBoxProps {
  message: string;
}

export function MessageBox({ message }: IMessageBoxProps) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: grey[900],
        borderRadius: 3,
        padding: 2,
      }}
    >
      <Typography color={grey[400]} variant="body1" fontWeight="600">
        {message}
      </Typography>
    </Box>
  );
}

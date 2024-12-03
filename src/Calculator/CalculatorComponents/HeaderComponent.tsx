import { Typography } from "@mui/material";

const HeaderComponent = () => {
  return (
    <Typography
      variant="h4"
      component="h3"
      align="left"
      sx={{ marginBottom: 3, letterSpacing: "0.1rem" }}
    >
      String Calculator
    </Typography>
  );
};

export default HeaderComponent;

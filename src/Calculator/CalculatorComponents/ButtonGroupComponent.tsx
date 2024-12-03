import { Box } from "@mui/material";
import ButtonComponent from "./ButtonComponent";

interface ButtonGroupComponentProps {
  onCalculate: () => void;
  onClear: () => void;
}

const ButtonGroupComponent = ({
  onCalculate,
  onClear,
}: ButtonGroupComponentProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <ButtonComponent text="Calculate" color="success" onClick={onCalculate} />
      <ButtonComponent text="Clear" color="error" onClick={onClear} />
    </Box>
  );
};

export default ButtonGroupComponent;

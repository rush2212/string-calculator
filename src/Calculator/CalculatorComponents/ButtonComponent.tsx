import { Button } from "@mui/material";

interface ButtonComponentProps {
  text: string; // Text displayed on the button
  color: "success" | "error"; // Optional, default is 'primary'
  onClick: () => void; // Function to execute on button click
}

const ButtonComponent = (props: ButtonComponentProps) => {
  const { text, color, onClick } = props;

  return (
    <Button
      variant="contained"
      color={color}
      onClick={onClick}
      sx={{
        m: 1,
        mr: 1,
        ml: 1,
        size: "md",
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;

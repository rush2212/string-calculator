import React from "react";
import { TextField } from "@mui/material";
interface InputComponentProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
}

const InputComponent = ({ value, onChange, error }: InputComponentProps) => {
  return (
    <TextField
      label="Enter numbers (comma or newline separated)"
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      multiline
      rows={4}
      sx={{
        marginBottom: 3,
        fontSize: "1.25rem",
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
          "&:hover fieldset": {
            borderColor: "#3f51b5",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#3f51b5",
          },
        },
      }}
      error={error}
    />
  );
};

export default InputComponent;

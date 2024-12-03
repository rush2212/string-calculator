import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import { add } from "../CalculatorFunction/Add";
import InputComponent from "./CalculatorComponents/InputComponent";
import ResultComponent from "./CalculatorComponents/ResultComponent";
import ButtonGroupComponent from "./CalculatorComponents/ButtonGroupComponent";
import HeaderComponent from "./CalculatorComponents/HeaderComponent";
import SnackbarComponent from "./CalculatorComponents/SnackBarComponent";

const Calculator = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>("");
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError("");
    } catch (e: any) {
      setError(e.message);
      setResult(null);
      setOpenSnackbar(true);
    }
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
    setError("");
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  const containerStyles = {
    maxWidth: 500,
    margin: "0 auto",
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <Box sx={containerStyles}>
      <Paper sx={{ padding: 4, width: "100%", borderRadius: 2, boxShadow: 3 }}>
        <HeaderComponent />
        <InputComponent
          value={input}
          onChange={handleInputChange}
          error={!!error}
        />
        <ButtonGroupComponent
          onCalculate={handleCalculate}
          onClear={handleClear}
        />
        <ResultComponent result={result} error={error} />
      </Paper>
      <SnackbarComponent
        open={openSnackbar}
        message={error}
        onClose={handleCloseSnackbar}
      />
    </Box>
  );
};

export default Calculator;

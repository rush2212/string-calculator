import { Typography } from "@mui/material";

interface ResultComponentProps {
  result: number | null;
  error: string;
}

const ResultComponent = ({ result, error }: ResultComponentProps) => {
  return (
    <>
      {error ? (
        <Typography variant="h6" color="error" sx={{ marginTop: 3 }}>
          Error: {error}
        </Typography>
      ) : result !== null ? (
        <Typography variant="h6" sx={{ marginTop: 3 }}>
          The result is: {result}
        </Typography>
      ) : (
        <Typography variant="body1" sx={{ marginTop: 3 }}>
          Please enter numbers to calculate.
        </Typography>
      )}
    </>
  );
};

export default ResultComponent;

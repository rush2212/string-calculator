import { Snackbar } from "@mui/material";

interface SnackbarComponentProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

const SnackbarComponent = ({
  open,
  message,
  onClose,
}: SnackbarComponentProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      message={message}
    />
  );
};

export default SnackbarComponent;

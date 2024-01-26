import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function SimpleBackdrop({ openBackdrop }) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={openBackdrop}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

import { Button } from "@mui/material";

export default function ColorButton(props) {
  return (
    <Button
      variant="contained"
      sx={{ height: "150px", backgroundColor: props.color, width: "100%" }}
      onClick={props.onClick}
    >
    </Button>
  );
}

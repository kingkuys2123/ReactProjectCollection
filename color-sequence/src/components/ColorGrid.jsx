import { Grid } from "@mui/material";

export default function ColorGrid(props) {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 200,
      }}
    >
      {props.colors.length > 0 && (
        <Grid item>
          <Grid item sx={{ backgroundColor: props.colors[0], width: 40, height: 40 }}></Grid>
        </Grid>
      )}
      {props.colors.length > 1 && (
        <Grid item>
          <Grid item sx={{ backgroundColor: props.colors[1], width: 40, height: 40 }}></Grid>
        </Grid>
      )}
      {props.colors.length > 2 && (
        <Grid item>
          <Grid item sx={{ backgroundColor: props.colors[2], width: 40, height: 40 }}></Grid>
        </Grid>
      )}
      {props.colors.length > 3 && (
        <Grid item>
          <Grid item sx={{ backgroundColor: props.colors[3], width: 40, height: 40 }}></Grid>
        </Grid>
      )}
      {props.colors.length > 4 && (
        <Grid item>
          <Grid item sx={{ backgroundColor: props.colors[4], width: 40, height: 40 }}></Grid>
        </Grid>
      )}
      {props.colors.length > 5 && (
        <Grid item>
          <Grid item sx={{ backgroundColor: props.colors[5], width: 40, height: 40 }}></Grid>
        </Grid>
      )}
      {props.colors.length > 6 && (
        <Grid item>
          <Grid item sx={{ backgroundColor: props.colors[6], width: 40, height: 40 }}></Grid>
        </Grid>
      )}
      {props.colors.length > 7 && (
        <Grid item>
          <Grid item sx={{ backgroundColor: props.colors[7], width: 40, height: 40 }}></Grid>
        </Grid>
      )}
      {props.colors.length > 8 && (
        <Grid item>
          <Grid item sx={{ backgroundColor: props.colors[8], width: 40, height: 40 }}></Grid>
        </Grid>
      )}
      {props.colors.length > 9 && (
        <Grid item>
          <Grid item sx={{ backgroundColor: props.colors[9], width: 40, height: 40 }}></Grid>
        </Grid>
      )}
    </Grid>
  );
}

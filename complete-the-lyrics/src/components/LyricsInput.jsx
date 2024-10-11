import React from "react";
import { TextField, Grid } from '@mui/material';

export default function LyricsInput({ currentLyrics, setCurrentLyrics }) {
    return (
      <Grid
        container
        spacing={1}
        direction="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >

        <TextField
          id="input-lyrics"
          label="Enter Lyrics"
          value={currentLyrics}
          onChange={(e) => setCurrentLyrics(e.target.value)}
          sx={{ minWidth: "1000px", borderRadius: "0" }}
        />
        
      </Grid>
    );
}
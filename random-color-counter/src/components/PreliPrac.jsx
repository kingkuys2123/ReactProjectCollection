import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Container } from '@mui/material';

export default function PreliPrac() {
  const [redCount, setRedCount] = useState(0);
  const [orangeCount, setOrangeCount] = useState(0);
  const [yellowCount, setYellowCount] = useState(0);
  const [lightGreenCount, setLightGreenCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);
  const [lightBlueCount, setLightBlueCount] = useState(0);
  const [blueCount, setBlueCount] = useState(0);
  const [purpleCount, setPurpleCount] = useState(0);
  const [magentaCount, setMagentaCount] = useState(0);

  const [index, setIndex] = useState(null);
  const [rolling, setRolling] = useState(false);

  useEffect(() => {
    let timer;
    if (rolling) {
      timer = setInterval(() => {
        setIndex(Math.floor(Math.random() * 9));
      }, 75);
    } 
    else if (index !== null) {
      incrementCount(index);
    }
    return () => clearInterval(timer);
  }, [rolling]);

  const toggleRolling = () => {
    setRolling(prevRolling => !prevRolling);
  };

  const incrementCount = (index) => {
    switch (index) {
      case 0:
        setRedCount(redCount + 1);
        break;
      case 1:
        setOrangeCount(orangeCount + 1);
        break;
      case 2:
        setYellowCount(yellowCount + 1);
        break;
      case 3:
        setLightGreenCount(lightGreenCount + 1);
        break;
      case 4:
        setGreenCount(greenCount + 1);
        break;
      case 5:
        setLightBlueCount(lightBlueCount + 1);
        break;
      case 6:
        setBlueCount(blueCount + 1);
        break;
      case 7:
        setPurpleCount(purpleCount + 1);
        break;
      case 8:
        setMagentaCount(magentaCount + 1);
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ }}>
    <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Grid container spacing={2} sx={{ }}>
        <Grid container spacing={2}>
          <Grid id={"count-1"} sx={{ backgroundColor: "red", width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {redCount}
          </Grid>
          <Grid id={"count-2"}  sx={{ backgroundColor: "orange", width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {orangeCount}
          </Grid>
          <Grid id={"count-3"}  sx={{ backgroundColor: "yellow", width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {yellowCount}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid id={"count-4"}  sx={{ backgroundColor: "lightgreen", width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {lightGreenCount}
          </Grid>
          <Grid id={"count-5"}  sx={{ backgroundColor: "green", width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {greenCount}
          </Grid>
          <Grid id={"count-6"}  sx={{ backgroundColor: "lightblue", width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {lightBlueCount}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid id={"count-7"}  sx={{ backgroundColor: "blue", width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {blueCount}
          </Grid>
          <Grid id={"count-8"}  sx={{ backgroundColor: "purple", width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {purpleCount}
          </Grid>
          <Grid id={"count-9"}  sx={{ backgroundColor: "magenta", width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {magentaCount}
          </Grid>
        </Grid>
      </Grid>
    </Container>

    <br></br>

      <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
        <Grid container spacing={2} sx={{minWidth:350, maxWidth: 350}}>
          <Grid container spacing={2}>
            {/* You are able to put conditions inside sx or styles to manipulate the tags */}
            <Grid id={"color-1"} sx={{ backgroundColor: "red", borderStyle: index === 0 ? "dashed" : "none", borderWidth: "7px", borderColor: "black", width: 100, height: 100, alignItems: "center" }}>
            </Grid>
            <Grid id={"color-2"}  sx={{ backgroundColor: "orange", borderStyle: index === 1 ? "dashed" : "none", borderWidth: "7px", borderColor: "black", width: 100, height: 100, alignItems: "center" }}>
            </Grid>
            <Grid id={"color-3"}  sx={{ backgroundColor: "yellow", borderStyle: index === 2 ? "dashed" : "none", borderWidth: "7px", borderColor: "black", width: 100, height: 100, alignItems: "center" }}>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid id={"color-4"}  sx={{ backgroundColor: "lightgreen", borderStyle: index === 3 ? "dashed" : "none", borderWidth: "7px", borderColor: "black", width: 100, height: 100, alignItems: "center" }}>
            </Grid>
            <Grid id={"color-5"}  sx={{ backgroundColor: "green", borderStyle: index === 4 ? "dashed" : "none", borderWidth: "7px", borderColor: "black", width: 100, height: 100, alignItems: "center" }}>
            </Grid>
            <Grid id={"color-6"}  sx={{ backgroundColor:"lightblue", borderStyle: index === 5 ? "dashed" : "none", borderWidth: "7px", borderColor: "black", width: 100, height: 100, alignItems: "center" }}>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid id={"color-7"}  sx={{ backgroundColor: "blue", borderStyle: index === 6 ? "dashed" : "none", borderWidth: "7px", borderColor: "black", width: 100, height: 100, alignItems: "center" }}>
            </Grid>
            <Grid id={"color-8"}  sx={{ backgroundColor: "purple", borderStyle: index === 7 ? "dashed" : "none", borderWidth: "7px", borderColor: "black", width: 100, height: 100, alignItems: "center" }}>
            </Grid>
            <Grid id={"color-9"}  sx={{ backgroundColor: "magenta", borderStyle: index === 8 ? "dashed" : "none", borderWidth: "7px", borderColor: "black", width: 100, height: 100, alignItems: "center" }}>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center"  }}>
        {/* You can also put conditions inside the button, onClick, onChange and etc. */}
        <Button variant="contained" color="primary" sx={{ width: 200, marginTop: 2 }} onClick={toggleRolling}>
          {rolling ? "Stop Roll" : "Start Roll"}
        </Button>
      </Container>
    </Box>
  );
}
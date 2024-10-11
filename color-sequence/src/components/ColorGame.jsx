import { Button, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import ColorGrid from "./ColorGrid";
import ColorButton from "./ColorButton";

export default function ColorGame() {
  const colorSequence = ["purple", "blue", "red", "orange", "cyan", "green", "lightgreen", "yellow", "violet"];

  const defaultButtonColor = "#4ea390";
  const [buttonColors, setButtonColors] = useState(Array(colorSequence.length).fill(defaultButtonColor));
  
  const [shuffledButtonColors, setShuffledButtonColors] = useState([]);
  const [currentButtonColor, setCurrentButtonColor] = useState(0);

  useEffect(() => {
    const newShuffledButtonColors = [...colorSequence].sort(() => Math.random() - 0.5);
    setShuffledButtonColors(newShuffledButtonColors);
  }, []);

  const handleButtonClick = (index) => {
    const newColors = [...buttonColors];

    if (colorSequence[index] === shuffledButtonColors[currentButtonColor]) {
      newColors[index] = shuffledButtonColors[currentButtonColor];

      setButtonColors(newColors);

      if (currentButtonColor === colorSequence.length - 1) {
        setCurrentButtonColor(0);

        setButtonColors(Array(colorSequence.length).fill(defaultButtonColor));
        setShuffledButtonColors([...colorSequence].sort(() => Math.random() - 0.5));

        window.alert("You won the color sequence game!");
      } 
      else {
        setCurrentButtonColor(currentButtonColor + 1);
      }
    } 
    else {
      setCurrentButtonColor(0);

      setButtonColors(Array(colorSequence.length).fill(defaultButtonColor));
    }
  };

  return (
    <div>
      <ColorGrid colors={shuffledButtonColors} />

      <Grid container spacing={2} sx={{ width: 600, margin: "0 auto" }}>
        <Grid item xs={4}>
          <ColorButton color={buttonColors[0]} onClick={() => handleButtonClick(0)} />
        </Grid>
        <Grid item xs={4}>
          <ColorButton color={buttonColors[1]} onClick={() => handleButtonClick(1)} />
        </Grid>
        <Grid item xs={4}>
          <ColorButton color={buttonColors[2]} onClick={() => handleButtonClick(2)} />
        </Grid>
        <Grid item xs={4}>
          <ColorButton color={buttonColors[3]} onClick={() => handleButtonClick(3)} />
        </Grid>
        <Grid item xs={4}>
          <ColorButton color={buttonColors[4]} onClick={() => handleButtonClick(4)} />
        </Grid>
        <Grid item xs={4}>
          <ColorButton color={buttonColors[5]} onClick={() => handleButtonClick(5)} />
        </Grid>
        <Grid item xs={4}>
          <ColorButton color={buttonColors[6]} onClick={() => handleButtonClick(6)} />
        </Grid>
        <Grid item xs={4}>
          <ColorButton color={buttonColors[7]} onClick={() => handleButtonClick(7)} />
        </Grid>
        <Grid item xs={4}>
          <ColorButton color={buttonColors[8]} onClick={() => handleButtonClick(8)} />
        </Grid>
      </Grid>

      <Button variant="contained" onClick={() => window.location.reload()} sx={{ marginTop: "15px", backgroundColor: "gray" }}>Reset</Button>
    </div>
  );
}

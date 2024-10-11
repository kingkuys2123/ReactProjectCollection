import * as React from 'react';
import Grid from '@mui/material/Grid2';
import { Button, CardMedia } from '@mui/material';
import DisplayCards from './DisplayCards';

export default function ThreeCards() {
  const [p1Points, setP1Points] = React.useState(0);
  const [p2Points, setP2Points] = React.useState(0);

  const [p1Deck, setP1Deck] = React.useState([]);
  const [p2Deck, setP2Deck] = React.useState([]);

  const generateRandomCard = () => {
    const suits = ["clubs", "diamonds", "hearts", "spades"];
    const values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    return `${randomValue}_of_${randomSuit}`;
  }

  const drawCards = () => {
    const p1TempDeck = [generateRandomCard(), generateRandomCard(), generateRandomCard()];
    const p2TempDeck = [generateRandomCard(), generateRandomCard(), generateRandomCard()];

    setP1Deck(p1TempDeck);
    setP2Deck(p2TempDeck);

    winGame(p1TempDeck, p2TempDeck);
  }
  
  const winGame = (p1Deck, p2Deck) => {
    const calculateDeck = (deck) => {
      const cardValueMap = {
        "ace": 1, 
        "2": 2, 
        "3": 3,
        "4": 4, 
        "5": 5, 
        "6": 6, 
        "7": 7, 
        "8": 8, 
        "9": 9, 
        "10": 10, 
        "jack": 11, 
        "queen": 12,
        "king": 13
      };
  
      const valueCount = {};
      let totalValue = 0;
  
      deck.forEach(card => {
        const value = card.split('_')[0];
  
        totalValue += cardValueMap[value];
  
        valueCount[value] = (valueCount[value] || 0) + 1;
      });
  
      const pairValue = Object.keys(valueCount).find(value => valueCount[value] === 2);
  
      return { pairValue: pairValue ? cardValueMap[pairValue] : null, totalValue };
    };
  
    const p1Evaluation = calculateDeck(p1Deck);
    const p2Evaluation = calculateDeck(p2Deck);
  
    if (p1Evaluation.pairValue && p2Evaluation.pairValue) {
      if (p1Evaluation.pairValue > p2Evaluation.pairValue) {
        setP1Points(p1Points + 1);
      } 
      else if (p1Evaluation.ppairValue < p2Evaluation.pairValue) {
        setP2Points(p2Points + 1);
      } 
      else {
        setP1Points(p1Points + 1);
        setP2Points(p2Points + 1);
      }
    }
    else if (p1Evaluation.pairValue && !p2Evaluation.pairValue) {
      setP1Points(p1Points + 1);
    }
    else if (!p1Evaluation.pairValue && p2Evaluation.pairValue) {
      setP2Points(p2Points + 1);
    }
    else {
      if (p1Evaluation.totalValue > p2Evaluation.totalValue) {
        setP1Points(p1Points + 1);
      } 
      else if (p1Evaluation.totalValue < p2Evaluation.totalValue) {
        setP2Points(p2Points + 1);
      } 
      else {
        setP1Points(p1Points + 1);
        setP2Points(p2Points + 1);
      }
    }
  };
  

  return (
    <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "center"  }}>

      <Grid container spacing={0} sx={{ borderStyle: "dotted dashed solid double", padding: "5px", minWidth: 1280, maxWidth: 1280, display: "flex", alignItems: "center", justifyContent: "center" }}>
        
        <Grid container sx={{ borderRight: "dashed", minWidth: 630, maxWidth: 1000, padding: "5px" }}>

            <Grid sx={{ minWidth: "100%", minHeight: 250, padding: "5px" }}>

                <div id={"p1CardsDisplay"} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <DisplayCards cards={p1Deck}/>
                </div>

            </Grid>

            <p style={{ fontSize: "15px", alignItems: "center", minWidth: "100%", fontStyle: "italic", fontWeight: "bold" }}>PLAYER 1 : {p1Points}</p>

        </Grid>

        <Grid container sx={{ borderLeft: "dashed", minWidth: 630, maxWidth: 1000, padding: "5px" }}>

            <Grid sx={{ minWidth: "100%", minHeight: 250, padding: "5px" }}>

                <div id={"p2CardsDisplay"} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <DisplayCards cards={p2Deck}/>
                </div>

            </Grid>

            <p style={{ fontSize: "15px", alignItems: "center", minWidth: "100%", fontStyle: "italic", fontWeight: "bold" }}>PLAYER 2 : {p2Points}</p>
        </Grid>

      </Grid>

      <Button variant="contained" fullWidth sx={{ marginTop: "10px", maxWidth: "auto" }} onClick={drawCards}>
        Draw Cards
      </Button>

    </Grid>
  );
}
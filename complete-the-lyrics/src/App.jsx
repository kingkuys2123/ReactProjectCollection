import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import LyricsInput from './components/LyricsInput';

function App() {
  const [lyrics, setLyrics] = useState([]);
  const [currentLyrics, setCurrentLyrics] = useState("");

  const [singers, setSingers] = useState([
    {
      singer_number: 'first',
      color: "#9b42f5",
    },
    {
      singer_number: 'second',
      color: "#78f542",
    },
    {
      singer_number: 'third',
      color: "#42f5cb",
    },
    {
      singer_number: 'fourth',
      color: "#f54284",
    }
  ]);

  const [currentSinger, setCurrentSinger] = useState(null);

  const onClickSetSinger = (singer) => {
    return () => {
      if (currentLyrics && (!currentSinger || currentSinger.singer_number !== singer.singer_number)) 
      {
        setLyrics(prevLyrics => [
          ...prevLyrics,
          { color: currentSinger ? currentSinger.color : singer.color, lyrics: currentLyrics }
        ]);

        setCurrentLyrics("");
      }
      setCurrentSinger(singer);
    }
  }

  return (
    <div className="App">
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={2}
      >
        <Typography sx={{ marginTop: "20px" }} variant="h5" color="initial">COMPLETE THE LYRICS</Typography>

        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
          sx={{ marginTop: "20px" }}
        >

          {singers.map((singer, index) => (
            <Grid item={"true"} key={index}>
              <Link to={`/singer/${singer.singer_number}`}>
                <Button onClick={onClickSetSinger(singer)} sx={{ minHeight: "100px", minWidth: "250px", borderRadius: 0, backgroundColor: singer.color }} variant="contained">
                  {singer.singer_number.toUpperCase()} SINGER
                </Button>
              </Link>
            </Grid>
          ))}

        </Grid>

        <Routes>
          <Route path="/singer/:singer_number" element={<LyricsInput currentLyrics={currentLyrics} setCurrentLyrics={setCurrentLyrics} />}/>
        </Routes>

        <Grid
          container
          spacing={1}
          direction="column"
          alignContent="center"
          wrap="nowrap"
          sx={{ marginTop: "20px", border: "2px solid lightgray", padding: "10px", minHeight: "350px", minWidth: "1100px", borderRadius: "10px" }}
        >

          {lyrics.map((lyric, index) => (
            <Grid key={index} item={true} sx={{ backgroundColor: lyric.color, padding: "25px", borderRadius: "10px" }}>
              <Typography sx={{ fontSize: "20px" }} variant="p" color="white">{lyric.lyrics}</Typography>
            </Grid>
          ))}

          {
            currentSinger && currentLyrics && (
              <Grid item={true} sx={{ backgroundColor: currentSinger.color, padding: "25px", borderRadius: "10px" }}>
                <Typography sx={{ fontSize: "20px" }} variant="p" color="white">{currentLyrics}</Typography>
              </Grid>
            )
          }
          
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function JeepCodes() {
  
  const routes = {
    '01A': ['Alpha', 'Bravo', 'Charlie', 'Echo', 'Golf'],
    '02B': ['Alpha', 'Delta', 'Echo', 'Foxtrot', 'Golf'],
    '03C': ['Charlie', 'Delta', 'Foxtrot', 'Hotel', 'India'],
    '04A': ['Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf'],
    '04D': ['Charlie', 'Echo', 'Foxtrot', 'Golf', 'India'],
    '06B': ['Delta', 'Hotel', 'Juliet', 'Kilo', 'Lima'],
    '06D': ['Delta', 'Foxtrot', 'Golf', 'India', 'Kilo'],
    '10C': ['Foxtrot', 'Golf', 'Hotel', 'India', 'Juliet'],
    '10H': ['Foxtrot', 'Hotel', 'Juliet', 'Lima', 'November'],
    '11A': ['Foxtrot', 'Golf', 'Kilo', 'Mike', 'November'],
    '11B': ['Foxtrot', 'Golf', 'Lima', 'Oscar', 'Papa'],
    '20A': ['India', 'Juliet', 'November', 'Papa', 'Romeo'],
    '20C': ['India', 'Kilo', 'Lima', 'Mike', 'Romeo'],
    '42C': ['Juliet', 'Kilo', 'Lima', 'Mike', 'Oscar'],
    '42D': ['Juliet', 'November', 'Oscar', 'Quebec', 'Romeo']
  };
      
  const colors = ['red', 'green', 'blue', 'orange', 'purple', 'brown', 'pink', 'cyan', 'magenta', 'lime', 'yellow', 'teal', 'violet', 'indigo', 'gold', 'silver' ];

  const showRoutes = () => {
    const jeepCodes = document.getElementById('jeepneyCode').value.split(',');
    const displayRoutes = document.getElementById('displayRoutes');

    displayRoutes.innerHTML = '';

    const commonRoutes = {};

    jeepCodes.forEach(jeepCode => {
      jeepCode = jeepCode.trim();

      if (routes[jeepCode]) {
        routes[jeepCode].forEach(route => {
          if (!commonRoutes[route]) {
            commonRoutes[route] = 0;
          }
          commonRoutes[route]++;
        });
      }
    });

    const routeColors = {};

    let colorIndex = 0;

    Object.keys(commonRoutes).forEach(route => {
      if (commonRoutes[route] > 1) {
        routeColors[route] = colors[colorIndex % colors.length];
        colorIndex++;
      }
    });

    jeepCodes.forEach(jeepCode => {
        jeepCode = jeepCode.trim();
      
        if (routes[jeepCode]) {
          const routeString = routes[jeepCode].map(route => {
            if (routeColors[route]) {
              return `<span style="color: ${routeColors[route]}">${route}</span>`;
            }
            return route;
          }).join(' → ');
          displayRoutes.innerHTML += `<li style="margin: 10px;">${jeepCode}:&ensp;${routeString}</li>`;
        } 
        else if (jeepCode) {
          displayRoutes.innerHTML = `Invalid jeepney code!`;
        } 
        else {
          displayRoutes.innerHTML = `Please enter a jeepney code!`;
        }
    });
  }

  return (
    <div>
      <Container sx={{ border: "dashed gray", padding: "25px", backgroundColor: "white", minWidth: "1280px" }}>
        <Typography variant="h4" color="initial" style={{ fontStyle: "italic", fontWeight: "bold", color: "black" }}>
            JEEP CODE ROUTE DISPLAY
        </Typography>
        <TextField
          id="jeepneyCode"
          label="Enter Jeep Code" 
          variant="outlined"
          sx={{ marginTop: "15px" }}
        />

        <br></br>

        <Button variant="contained" sx={{ marginTop: "5px" }} onClick={showRoutes}>
          SHOW ROUTES
        </Button>
      </Container>
      <Container sx={{ marginTop: "30px", minWidth: "420px" }} style={{ border: "dashed gray", backgroundColor: "white", color: "black", padding: 15  }}>
        <div>
            <p style={{ fontSize: "20px", fontStyle: "italic", fontWeight: "bold" }}>
                ROUTES:
            </p>
            <ul id={"displayRoutes"} style={{ marginTop: "10px", listStyleType: "none", fontSize: "25px", margin: 0, padding: 0 }}>

            </ul>
        </div>
      </Container>
    </div>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';

export default function WelcomeBox() {
  return (
        <Box 
            sx={{ 
            marginTop: '15px', 
            display: 'flex', 
            justifyContent: 'center', 
            textAlign: "center", 
            color: 'darkslategray'}}
            >
            
            <div style={{ fontSize: 'calc(10px + 2vmin)', fontFamily: 'monospace'}}>
            <h5 style={{ pointerEvents: 'none', userSelect: 'none' }}>Welcome to</h5>  
            <h1 style={{ pointerEvents: 'none', userSelect: 'none', marginTop: '-17%' }}>kuystore.io</h1>
            </div>
        </Box>
  );
}
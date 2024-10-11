import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export default function FooterBox() {
  return (
        <Box sx={{ backgroundColor: 'gray', width: '100%' }}>
          <footer>
            <p style={{ textAlign: 'center', color: 'white', padding: '5px' }}>
              <Button size='small' style={{ color: 'white', textDecoration: 'none' }}>Directory</Button> | 
              <Button size='small' style={{ color: 'white', textDecoration: 'none' }}>Terms</Button> | 
              <Button size='small' style={{ color: 'white', textDecoration: 'none' }}>Privacy</Button> | 
              <Button size='small' style={{ color: 'white', textDecoration: 'none' }}>Cookies</Button>
              <br></br>
              &copy; 2024 kuystore.io
            </p>
            </footer>
        </Box>
  );
}
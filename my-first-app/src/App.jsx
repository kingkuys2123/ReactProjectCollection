import { useState } from 'react'
import AppBar from './components/AppBar.jsx'
import WelcomeBox from './components/WelcomeBox.jsx'
import './App.css'
import { Grid } from '@mui/material'
import ProductContainer from './components/ProductsContainer.jsx'
import FooterBox from './components/FooterBox.jsx'


function App() {
  return (
    <div className='App'>
      <AppBar></AppBar>
      <Grid container spacing={4} sx={{ backgroundColor: '#f9f9f9', paddingBottom: '50px' }}>
        <Grid item xs={12}>
          <WelcomeBox></WelcomeBox>
        </Grid>
        <Grid item xs={12}>
          <ProductContainer></ProductContainer>
        </Grid>
      </Grid>
      <FooterBox></FooterBox>
    </div>
  )
}

export default App

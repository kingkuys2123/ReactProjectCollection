import * as React from 'react';
import Container from '@mui/material/Container';
import ItemCard from './Card.jsx';
import { Grid } from '@mui/material';

export default function ProductContainer() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
         <ItemCard title="Camera" description="A device used to capture images or videos." img="./src/assets/images/products/camera.jpg"/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
         <ItemCard title="Desktop" description="A computer designed for use on a desk, typically with a larger screen and more powerful components than a laptop." img="./src/assets/images/products/desktop.jpg"/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
         <ItemCard title="Drone" description="An unmanned aerial vehicle (UAV) controlled remotely." img="./src/assets/images/products/drone.jpg"/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
         <ItemCard title="Keyboard" description="A device used to input text into a computer." img="./src/assets/images/products/keyboard.jpg"/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
         <ItemCard title="Laptop" description="A portable computer with a built-in screen and keyboard." img="./src/assets/images/products/laptop.jpg"/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
         <ItemCard title="Mouse" description="A device used to control a computer's cursor on a screen." img="./src/assets/images/products/mouse.jpg"/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
         <ItemCard title="Smartphone" description="A mobile phone with advanced features such as internet access and app capabilities." img="./src/assets/images/products/smartphone.jpg"/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
         <ItemCard title="Tablet" description="A portable computer with a touchscreen display." img="./src/assets/images/products/tablet.jpg"/>
        </Grid>
      </Grid>
    </Container>
  );
}
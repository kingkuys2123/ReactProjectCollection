import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ title, description, img }) {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        sx={{ height: '160px' }}
        image={img}
        title={title}
      />
      <CardContent
        sx={{ height: '90px' }}
      >
        <Typography gutterBottom variant="h5" component="div" fontSize="1.2rem" whiteSpace="nowrap">
          {title}
        </Typography>
        <Typography textAlign="justify" variant="body2" color="text.secondary" fontSize="0.8rem">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Item</Button>
      </CardActions>
    </Card>
  );
}
import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';

export default function DisplayCards({ cards }) {
    return cards.map((card, index) => (
        <CardMedia
            key={index}
            component="img"
            image={`/cards/${card}.png`}
            alt="Card"
            sx={{ maxWidth: 150 }}
        />
    ));
}
import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IShip from '../interfaces/Ship';

interface IShipGalleryItemProps {
  ship: IShip;
}

export default function ShipGalleryItem(props: IShipGalleryItemProps) {
  const { ship } = props;
  const {
    id,
    name,
    image,
    type,

  } = ship;

  return (
    <ImageListItem key={id}>
      <img
        src={`${image}?w=248&fit=crop&auto=format`}
        srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={name}
        loading="lazy"
      />
      <ImageListItemBar
        title={name}
        subtitle={type}
        position="below"
      />
    </ImageListItem>
  );
}

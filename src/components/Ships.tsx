import React from 'react';
import { useQuery } from '@apollo/client';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import Spinner from './Spinner';
import IShip from '../interfaces/Ship';
import GET_SHIPS from '../api/ships';
import Ship from './Ship';
import ShipGalleryItem from './ShipGalleryItem';

interface IShipsProps {
  showGallery: boolean;
}

interface IShips {
  ships: IShip[];
}

export default function Ships(props: IShipsProps) {
  const { showGallery } = props;
  const { loading, data } = useQuery<IShips>(
    GET_SHIPS,
  );

  if (loading) {
    return <Spinner />;
  }

  if (!data) return null;

  if (showGallery) {
    return (
      <Grid container justifyContent="center">
        <ImageList sx={{ width: '75vw' }} cols={2}>
          {data.ships.map((ship) => <ShipGalleryItem key={ship.id} ship={ship} />)}
        </ImageList>
      </Grid>
    );
  }

  return (
    <div>
      {data && data.ships.map((ship) => <Ship key={ship.id} ship={ship} />)}
    </div>
  );
}

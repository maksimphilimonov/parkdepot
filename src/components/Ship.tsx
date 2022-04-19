import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import IShip from '../interfaces/Ship';

interface IShipProps {
  ship: IShip;
}

export default function Ship(props: IShipProps) {
  const { ship } = props;
  const {
    name,
    url,
    image,
    type,
    status,
    roles,

  } = ship;
  const renderItem = (title: string, value: string) => {
    if (!value) return null;

    return (
      <Grid container>
        <Grid item xs={12} sm={2}>
          <Typography variant="body1">{title}</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Typography variant="body1">{value}</Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6">{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Card>
          <CardMedia
            component="img"
            width="200"
            image={image}
            alt={name}
          />
        </Card>
        <CardContent>
          {renderItem('TYPE:', type)}
          {renderItem('STATUS:', status)}
          <Grid container>
            <Grid item xs={12} sm={2}>
              <Typography variant="body1">DETAILS:</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Link href={url} sx={{ overflowWrap: 'break-word' }}>{url}</Link>
            </Grid>
          </Grid>
          {renderItem('ROLE:', roles.join(','))}
        </CardContent>
      </AccordionDetails>
    </Accordion>
  );
}

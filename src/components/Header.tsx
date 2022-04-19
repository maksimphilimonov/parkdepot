import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

interface IHeaderProps {
  showGallery: boolean;
  setShowGallery: Function;
}

export default function Header(props: IHeaderProps) {
  const { showGallery, setShowGallery } = props;
  const toggleView = () => setShowGallery(!showGallery);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ships
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <FormGroup sx={{ alignContent: 'flex-end' }}>
              <FormControlLabel control={<Switch value={showGallery} onChange={toggleView} color="default" />} label="Gallery" />
            </FormGroup>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

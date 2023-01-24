import './App.css';
// import {} from '@mui/material'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

import { Route, Routes } from 'react-router-dom';
import PhotoAlbum from './pages/photoAlbum';



function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera sx={{marginRight: '5px'}} />
          <Typography variant='h6'>
            Bikoz photo gallery...
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Routes>
          <Route path='/' element={<PhotoAlbum />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

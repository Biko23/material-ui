import './App.css';
// import {} from '@mui/material'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera />
          <Typography variant='h6'>
            Bikoz photo gallery...
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center'>
              Photo album
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;

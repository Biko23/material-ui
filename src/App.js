import './App.css';
// import {} from '@mui/material'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@mui/material';
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
            <Typography variant='h2' align='center' gutterBottom>
              Photo album
            </Typography>
            <Typography variant='paragraph' align='center' color='GrayText'>
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>

            <div>
              <Grid container spacing={2} justifySelf >
                <Grid item>
                  <Button variant='contained' color='primary'>
                    see my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='error'>
                    go back
                  </Button>
                </Grid>
              </Grid>
            </div>
            <Grid container sx={{ paddingTop: 2  }} >
              <Grid item>
                <Card >
                  <CardMedia sx={{ height: 250, width: 250 }} image='https://res.cloudinary.com/two-three-apps/image/upload/v1664790809/handy1_wge62s.jpg' ></CardMedia>
                  <CardContent>
                    <Typography variant='h5' gutterBottom >
                      Heading
                    </Typography>
                    <Typography gutterBottom >
                    What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button color='primary'>
                      see my photos
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>

          </Container>
        </div>
      </main>
    </>
  );
}

export default App;

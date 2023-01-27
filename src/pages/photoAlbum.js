import { Card, CardActions, CardContent, CardMedia, Container, Grid, Typography, Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { addNewCards } from "../store/cardsSlice";

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function PhotoAlbum() {
    const {cards} = useSelector(state => state.cards );
    const dispatch = useDispatch();
    return (
        <div>

            <Container>
                <Grid container spacing={2}>
                    <Grid item>
                        <Button
                        onClick={() => dispatch(addNewCards())}
                        variant="contained"
                        color="primary">
                            Add Cards
                        </Button>
                    </Grid>
                </Grid>
                <Grid container sx={{ paddingTop: 2  }} spacing={4} >
                {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4} >
                    <Card >
                    <CardMedia sx={{ height: 250, width: '100%' }} image='https://res.cloudinary.com/two-three-apps/image/upload/v1664790809/handy1_wge62s.jpg' ></CardMedia>
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
                ))}
                </Grid>
            </Container>            
        </div>
    )
}
export default PhotoAlbum;
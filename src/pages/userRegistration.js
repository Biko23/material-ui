import { Card, CardActions, CardContent, CardMedia, Container, Grid, Typography, Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import RegStepper from "../components/registrationStepper";
import { addNewCards } from "../store/cardsSlice";

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function UserRegistration() {
    const {cards} = useSelector(state => state.cards );
    const dispatch = useDispatch();
    return (
        <div>

            <Container>
                <Card>
                    <CardContent>
                        <RegStepper />                        
                    </CardContent>
                </Card>
            </Container>            
        </div>
    )
}
export default UserRegistration;
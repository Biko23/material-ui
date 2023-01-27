import { Box, Stepper, Step, StepLabel, Button, Typography, TextField, Grid, Container, Divider, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import userSlice from "../store/userSlice";
import { addFirstName, addCompanyID, addEmail, addFunctinalGroups, addLastName, addPhone, addUsername } from "../store/userSlice";
import { addFunctionalGroup } from "../store/securitySlice";

const steps = ['Personal Details', 'Security Details', 'Confirm'];
function RegStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);
    const {...security} = useSelector(state => state.security);
    // let userFirstName = useSelector(state => state.user.firstName);

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
      };

    const handleNext = () => {
        let newSkipped = skipped;
        if(isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip this step.")            
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };
    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if(isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if(isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <Divider />
            {activeStep === steps.length ? (
                <>
                    <Typography sx={{ mt:2, mb:1 }}>All steps completed - you&apos;re finished</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </>
            ) : (
                <Container sx={{ width: '100%' }}>
                
                    {/* <Typography sx={{ mt: 2, mb: 1 }}>Step { activeStep + 1 }</Typography> */}
                    {activeStep + 1 === 1 ?(
                        
                        <Grid container sx={{ position: 'center' }}>
                            <Grid item xs={12} sm={6}>
                            <Typography>First Name</Typography>
                            <TextField
                            id="firstNameTxt"
                            variant="outlined"
                            onChange={
                                (event) => {
                                    dispatch(addFirstName(event.target.value) 
                                    // console.log('FirstName: ', user.firstName);                            
                            )}}
                            value={user.firstName} />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Typography>Last Name</Typography>
                            <TextField
                            id="lastNameTxt"
                            variant="outlined"
                            onChange={
                                (event) => {dispatch(addLastName(event.target.value)                                
                            )}}
                            value={user.lastName} />
                                
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Typography>Email</Typography>   
                            <TextField
                            id="emailTxt"
                            variant="outlined"
                            onChange={
                                (event) => {dispatch(addEmail(event.target.value)                                
                            )}}
                            value={user.email}  />
                                
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Typography>Phone Number</Typography>   
                            <TextField
                            id="phoneNumberTxt"
                            variant="outlined"
                            onChange={
                                (event) => {dispatch(addPhone(event.target.value)                                
                            )}}
                            value={user.phoneNumber}  /> 
                                
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Typography>Username</Typography>  
                            <TextField
                            id="usernameTxt"
                            variant="outlined"
                            onChange={
                                (event) => {dispatch(addUsername(event.target.value)                                
                            )}}
                            value={user.username}  /> 
                                
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Typography>Company ID Number</Typography>  
                            <TextField
                            id="companyIDTxt"
                            variant="outlined"
                            onChange={
                                (event) => {
                                    console.log(security.functionalGroups);
                                    dispatch(addCompanyID(event.target.value)                                
                            )}}
                            value={user.companyID} />    
                                
                            </Grid>
                        </Grid>
                        
                    ) : (
                    <>
                        {activeStep + 1 === 2 ? (
                            // <Typography sx={{ mt: 2, mb: 1 }}>Step 2</Typography>
                            <FormGroup>
                                {
                                    security.functionalGroups.map(
                                        (functionalGroup) => {
                                            console.log('fg_name: ', functionalGroup.functional_group_name);
                                            // if (user.functionalGroups.includes(functionalGroup.functional_group_name)) {
                                            //     console.log(functionalGroup.functional_group_name + ' exists');
                                                
                                            // }
                                            // let fg_name = functionalGroup.name;
                                            return (
                                                <FormControlLabel key={functionalGroup.functional_group_name}
                                                control={
                                                    <Checkbox
                                                    checked={user.functionalGroups.includes(functionalGroup.functional_group_name)}
                                                    value={functionalGroup.functional_group_name}
                                                    onChange={
                                                    (event) => {                                                
                                                        console.log(user);
                                                        dispatch(addFunctinalGroups(event.target.value))}} />
                                                }
                                                label={functionalGroup.functional_group_name} />
                                            )
                                        }
                                    )
                                }
                            </FormGroup>
                        ) : (
                            <Container>
                            <Grid container>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{ mt: 2, mb: 1 }}>First Name:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{ mt: 2, mb: 1 }}>{user.firstName}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{ mt: 2, mb: 1 }}>Last Name:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{ mt: 2, mb: 1 }}>{user.lastName}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{ mt: 2, mb: 1 }}>Email:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{ mt: 2, mb: 1 }}>{user.email}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{ mt: 2, mb: 1 }}>Phone</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{ mt: 2, mb: 1 }}>{user.phoneNumber}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{ mt: 2, mb: 1 }}>username:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{ mt: 2, mb: 1 }}>{user.username}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{ mt: 2, mb: 1 }}>Company ID</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{ mt: 2, mb: 1 }}>{user.companyID}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography sx={{ mt: 2, mb: 1 }}>Functional Groups:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {user.functionalGroups.map((functionalGroup) =>
                                    <Typography sx={{ mt: 2, mb: 1 }}>{functionalGroup}</Typography>
                                    )}
                                    {/* <Typography sx={{ mt: 2, mb: 1 }}>{user.functionalGroups}</Typography> */}
                                </Grid>
                            </Grid>
                            </Container>
                            
                        )}
                    </>
                    )}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button color="inherit" disabled={activeStep == 0} onClick={handleBack} sx={{ mr: 1 }}>Back</Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr:1 }}>Skip</Button>
                        )}
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </Container>
            )}

        </Box>
    );
}
export default RegStepper;
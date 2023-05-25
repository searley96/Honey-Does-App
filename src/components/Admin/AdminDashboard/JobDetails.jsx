import { useSelector, useDispatch } from "react-redux";
import allJobsReducer from "../../../redux/reducers/allJobs.reducer";
import { Button, Card as Box, CardActions, CardContent, CardMedia, Typography, Link, Card, Grid, CardHeader } from '@mui/material';
import Chat from "../../Chat/Chat";

function JobDetails() {
    const allJobs = useSelector(store => store.allJobs);


    return (
        <>
            <h3>Job #{allJobs.jobDetails.job_id}</h3>

            {allJobs.jobDetails ? (

                <Grid item xs={4}>
                    <Card sx={{ width: 200, height: 50 }}>
                        {/* <CardHeader subheader='cleaner'/> */}
                        <CardContent sx={{ display: "flex", justifyContent: "space-evenly" }}>
                                <Typography style={{ display: 'inline-block' }}>
                                    Cleaner: {allJobs.jobDetails.cleaner_first_name} {allJobs.jobDetails.cleaner_last_name}
                                </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 200, height: 50 }}>
                        <CardContent sx={{ display: "flex", justifyContent: "space-evenly" }}>
                                <Typography style={{ display: 'inline-block' }}>
                                    Client: {allJobs.jobDetails.client_first_name} {allJobs.jobDetails.client_last_name}
                                </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 200, height: 80 }}>
                        <CardContent sx={{ display: "flex", justifyContent: "space-evenly" }}>
                                <Typography style={{ display: 'inline-block' }}>
                                    Date: {allJobs.jobDetails.date}
                                </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 200, height: 50 }}>
                        <CardContent sx={{ display: "flex", justifyContent: "space-evenly" }}>
                                <Typography style={{ display: 'inline-block' }}>
                                    Start Time: {allJobs.jobDetails.start_time}
                                </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 200, height: 50 }}>
                        <CardContent sx={{ display: "flex", justifyContent: "space-evenly" }}>
                                <Typography style={{ display: 'inline-block' }}>
                                    End Time: {allJobs.jobDetails.end_time}
                                </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 400, height: 100 }}>
                        <CardContent sx={{ display: "flex", justifyContent: "space-evenly" }}>
                                <Typography style={{ display: 'inline-block' }}>
                                    Client Feedback: {allJobs.jobDetails.feedback}
                                </Typography>
                        </CardContent>
                    </Card>
                    <Chat />
                </Grid>
                // <Box sx={{ flexGrow: 1 }}>
                //             <CardContent sx={{ display: "flex", justifyContent: "space-evenly" }}>
                //                 <Typography style={{ display: 'inline-block' }}>
                //                     {allJobs.jobDetails.client_first_name} {allJobs.jobDetails.client_last_name}
                //                 </Typography>
                //                 <Typography style={{ display: 'inline-block' }}>
                //                     {allJobs.jobDetails.job_status}
                //                 </Typography>
                //                 <Typography style={{ display: 'inline-block' }}>
                //                     {allJobs.jobDetails.cleaner_first_name} {allJobs.jobDetails.cleaner_last_name}
                //                 </Typography>
                //                 <Typography style={{ display: 'inline-block' }}>
                //                     {allJobs.jobDetails.feedback}
                //                 </Typography>
                //             </CardContent>
                        //</Box>
                
            ) : (
                <p>No jobs yet.</p>

            )}
        </>
    )
}

export default JobDetails;
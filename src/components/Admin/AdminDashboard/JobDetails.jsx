import React, { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import allJobsReducer from "../../../redux/reducers/allJobs.reducer";
import {
    Button,
    Card as Box,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Link,
    Card,
    Grid,
    CardHeader,
    Modal,
    Textfield
} from '@mui/material';

function JobDetails() {
    const allJobs = useSelector(store => store.allJobs);

    const [allCleaners, setAllCleaners] = useState([]);

    // Get all users
    useEffect(() => {
        axios({
            method: 'GET',
            url: '/api/user/allCleaners'
        }).then((response) => {
            console.log('Response:', response);
            setAllCleaners(response);
        }).catch((error) => {
            console.log('Error on post:', error);
        })
    }, []);

    // edit information switches
    const [editJobStatusBtn, setEditJobStatusBtn] = useState(false);
    const [editCleanerFirstNameBtn, setEditCleanerFirstNameBtn] = useState(false);
    const [editCleanerLastNameBtn, setEditCleanerLastNameBtn] = useState(false);
    const [dateBtn, setDateBtn] = useState(false);
    const [startTimeBtn, setStartTimeBtn] = useState(false);
    const [endTimeBtn, setEndTimeBtn] = useState(false);

    // this object will contain the job details information
    const [jobDetailsUpdate, setJobDetailsUpdate] = useState({
        job_status: allJobs.job_status,
        date: allJobs.date,
        start_time: allJobs.start_time,
        end_time: allJobs.end_time
    })

    const cancelEdit = (func) => {
        setJobDetailsUpdate({
            job_status: allJobs.job_status,
            date: allJobs.date,
            start_time: allJobs.start_time,
            end_time: allJobs.end_time
        })
        func;
    }

    return (
        <>
            <h3>Job #{allJobs.jobDetails.job_id}</h3>
            {allJobs.jobDetails ? (
                <Grid item xs={4}>
                    <Card sx={{ width: 400, height: 70 }}>
                        <CardContent
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between", // Shifts content to the left
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 15,
                                }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Job Status:
                            </Typography>
                            <Typography
                                style={{ display: "inline", marginLeft: '50px' }}
                                gutterBottom
                            >
                                {allJobs.jobDetails.job_status}
                            </Typography>
                            <Button sx={{ display: 'inline-flex', mr: 1.5 }} variant='outlined'>Edit</Button>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 400, height: 70 }}>
                        <CardContent
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between", // Shifts content to the left
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 15,
                                }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Cleaner:
                            </Typography>
                            {editCleanerFirstNameBtn ?
                                <>
                                    <select
                                        style={{ width: '100px' }}>
                                        <option value="" disabled selected> -- select an option -- </option>
                                        <option value="customer">Client name</option>
                                    </select>
                                </> :
                                <>
                                    <Typography
                                        style={{ display: "inline", marginLeft: '50px' }}
                                        gutterBottom
                                    >
                                        {allJobs.jobDetails.cleaner_first_name} {allJobs.jobDetails.cleaner_last_name}
                                    </Typography>

                                    <Button onClick={() => cancelEdit(setEditCleanerFirstNameBtn(true))} sx={{ display: 'inline-flex', mr: 1.5 }} variant='outlined'>Edit</Button>
                                </>
                            }
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 400, height: 50 }}>
                        <CardContent
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start", // Shifts content to the left
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 15,
                                }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Client:
                            </Typography>
                            <Typography
                                style={{ display: "inline", paddingLeft: "50px", fontSize: 15 }}
                                gutterBottom
                            >
                                {allJobs.jobDetails.client_first_name} {allJobs.jobDetails.client_last_name}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 400, height: 80 }}>
                        <CardContent
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between", // Shifts content to the left
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 15,
                                }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Date:
                            </Typography>
                            <Typography
                                style={{ display: "inline", paddingLeft: "50px", paddingRight: "80px", fontSize: 15 }}
                                gutterBottom
                            >
                                {allJobs.jobDetails.date}
                            </Typography>
                            <Button sx={{ display: 'inline-flex', mr: 1.5 }} variant='outlined'>Edit</Button>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 400, height: 70 }}>
                        <CardContent
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between", // Shifts content to the left
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 15,
                                }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Start Time:
                            </Typography>
                            <Typography
                                style={{ display: "inline", paddingLeft: "50px", fontSize: 15 }}
                                gutterBottom
                            >
                                {allJobs.jobDetails.start_time}
                            </Typography>
                            <Button sx={{ display: 'inline-flex', mr: 1.5 }} variant='outlined'>Edit</Button>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 400, height: 70 }}>
                        <CardContent
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between", // Shifts content to the left
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 15,
                                }}
                                color="text.secondary"
                                gutterBottom
                            >
                                End Time:
                            </Typography>
                            <Typography
                                style={{ display: "inline", paddingLeft: "50px", paddingRight: "80px", fontSize: 15, }}
                                gutterBottom
                            >
                                {allJobs.jobDetails.end_time}
                            </Typography>
                            <Button sx={{ display: 'inline-flex', mr: 1.5 }} variant='outlined'>Edit</Button>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: 400, height: 80 }}>
                        <CardContent
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start", // Shifts content to the left
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 15,
                                }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Feedback:
                            </Typography>
                            <Typography
                                style={{ display: "inline", paddingLeft: "30px", fontSize: 15, }}
                                gutterBottom
                            >
                                {allJobs.jobDetails.feedback}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid >
            ) : (
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
                <p>No jobs yet.</p>
            )
            }

            <h2>Chat Box Goes here</h2>
        </>
    )
}

export default JobDetails;
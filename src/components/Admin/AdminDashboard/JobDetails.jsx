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
    // allJobs combined reducer (jobDetails)
    const allJobs = useSelector(store => store.allJobs);
   
    const allJobStatus = ['request', 'approved', 'completed', 'canceled', 'rejected', 'active']
    
    // default states
    const [newJobStatus, setNewJobStatus] = useState(allJobs.jobDetails.job_status);
    const [newDate, setNewDate] = useState(allJobs.jobDetails.date);
    const [newStartTime, setNewStartTime] = useState(allJobs.jobDetails.start_time);
    const [newEndTime, setNewEndTime] = useState(allJobs.jobDetails.end_time);
    const [newCleaner, setNewCleaner] = useState('');

    // This stores the list of cleaners
    const [allCleaners, setAllCleaners] = useState([]);
    // Get all users from DB and then set in AllCleaners state
    useEffect(() => {
        axios({
            method: 'GET',
            url: '/api/user/allCleaners'
        }).then((response) => {
            console.log('Response.data:', response.data);
            setAllCleaners(response.data);
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

    // setNewCleaner
    const handleDropDownChange = (event) => {
        setNewCleaner(event.target.value);
        console.log('newCleaner:', newCleaner );
    }

    // setNewJobStatus
    const handleJobStatusDropDownChange = (event) => {
        setNewJobStatus(event.target.value);
        console.log('newJobStatus:', newJobStatus);
    }

    const handleClickForCleaner = () => {
        console.log('newCleaner inside handleClickForCleaner:', newCleaner);
        // move this obj to its own piece of state
        const updateCleanerObject = {
            cleaner_id: newCleaner, 
            job_id: allJobs.jobDetails.job_id, 
            job_status: newJobStatus,
            date: newDate,
            start_time: newStartTime,
            end_time: newEndTime
            }
        dispatch({ type: 'UPDATE_CLEANER', payload: updateCleanerObject });
    }


    // create a handleInputChange function

    const handleClickForJobStatus = () => {
        console.log('newJobStatus inside handleClickForJobStatus:', newJobStatus);
        const updateJobStatusObject = {jobStatus: newJobStatus}
    }

    return (
        <>
            <h3>Job #{allJobs.jobDetails.job_id}</h3>
            {allJobs.jobDetails ? (
                <Grid item xs={4}>

                    {/* JOB STATUS INPUT */}
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
                            {editJobStatusBtn ?
                                <>
                                    <select
                                        defaultValue=""
                                        style={{ width: '100px' }}
                                        onChange={handleJobStatusDropDownChange}>
                                        <option value="" disabled selected> -- select an option -- </option>
                                        {allJobStatus ? (allJobStatus.map((status, i) => (
                                            <option key={i} value={status}>{status}</option>
                                        )
                                        )) :
                                            <option>Status</option>
                                        }
                                    </select>
                                    {/* On click, do a dispatch/axios to update the backend */}
                                    <Button onClick={handleClickForJobStatus} sx={{ display: 'inline-flex', mr: 1.5 }} variant='outlined'>Save</Button>
                                </> :
                                <>
                                    <Typography
                                        style={{ display: "inline", marginLeft: '50px' }}
                                        gutterBottom
                                    >
                                        {allJobs.jobDetails.job_status}
                                    </Typography>

                                    <Button onClick={() => cancelEdit(setEditJobStatusBtn(true))} sx={{ display: 'inline-flex', mr: 1.5 }} variant='outlined'>Edit</Button>
                                </>
                            }
                        </CardContent>
                    </Card>
                    
                    {/* CLEANER INPUT */}
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
                                        // add a name property to all inputs
                                        defaultValue=""
                                        style={{ width: '100px' }}
                                        onChange={handleDropDownChange}>
                                        <option value="" disabled selected> -- select an option -- </option>
                                        {allCleaners ? (allCleaners.map((cleaner, i) => (
                                            <option key={i} value={cleaner.id}>{cleaner.first_name} {cleaner.last_name}</option>
                                        )
                                        )) :
                                            <option>Cleaners</option>
                                        }
                                    </select>
                                    {/* On click, do a dispatch/axios to update the backend */}
                                    <Button onClick={handleClickForCleaner} sx={{ display: 'inline-flex', mr: 1.5 }} variant='outlined'>Save</Button>
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
                    
                    {/* CLIENT INPUT */}
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

                    {/* DATE INPUT */}
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

                    {/* START TIME INPUT */}
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

                    {/* END TIME INPUT */}
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

                    {/* CUSTOMER FEEDBACK INPUT */}
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
                // *** END GRID *** //
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
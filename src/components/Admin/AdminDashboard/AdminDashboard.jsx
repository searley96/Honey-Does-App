import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography, Link } from '@mui/material';
import { useHistory } from "react-router-dom";

function AdminDashboard() {
    console.log('Inside Dashboard()!!');
    const dispatch = useDispatch();

    const allJobs = useSelector(store => store.allJobs);
    console.log('All jobs:', allJobs);

    useEffect(() => {
        dispatch({ type: "FETCH_JOBS" }); // Fetch job ID
    }, []);

    const history = useHistory();

    const handleOnClick = (jobObj) => {
        dispatch({ type: 'VIEW_JOB_DETAILS', payload: jobObj})
        dispatch({ type: "SET_JOB_DETAIL_CHAT", payload: jobObj})
        history.push('/jobDetails')
    }

    return (
        <>
            <h3>Jobs</h3>

            {allJobs.allJobs.length ? (
                allJobs.allJobs.map((job, i) => (
                    <Card key={i}>
                        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Button style={{ display: 'inline-block' }} variant='outlined' onClick={() => handleOnClick(job)}>
                                {job.job_id}
                            </Button>
                            <Typography style={{ display: 'inline-block' }}>
                                {job.client_first_name} {job.client_last_name}
                            </Typography>
                            <Typography style={{ display: 'inline-block' }}>
                                {job.job_status}
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <p>No details yet.</p>

            )}

        </>
    )
}

export default AdminDashboard;
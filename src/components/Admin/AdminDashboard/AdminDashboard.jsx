import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

function AdminDashboard() {
    console.log('Inside Dashboard()!!');
    const dispatch = useDispatch();

    const allJobs = useSelector(store => store.allJobs);
    console.log('All jobs:', allJobs);

    useEffect(() => {
        dispatch({ type: "FETCH_JOBS" }); // Fetch job ID
    }, []);



    return (
        <>
            <h3>Jobs</h3>

            {allJobs.length ? (
                allJobs.map((job, i) => (
                    <Card key={i}>
                        <CardContent sx={{ display: "flex", justifyContent: "space-evenly" }}>
                            <Typography style={{ display: 'inline-block' }}>
                                {job.job_id}
                            </Typography>
                            <Typography style={{ display: 'inline-block' }}>
                                {job.first_name} {job.last_name}
                            </Typography>
                            <Typography style={{ display: 'inline-block' }}>
                                {job.job_status}
                            </Typography>
                        </CardContent>


                    </Card>
                ))
            ) : (
                <p>More items coming soon!</p>

            )}

        </>
    )
}

export default AdminDashboard;
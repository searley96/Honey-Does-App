import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Link } from '@mui/material';
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

const handleOnClick = () => {
    history.push('/jobDetails')
}
    
    return (
        <>
            <h3>Jobs</h3>

            {allJobs.length ? (
                allJobs.map((job, i) => (
                    <Card key={i}>
                        <CardContent sx={{ display: "flex", justifyContent: "space-evenly" }}>
                            <Typography style={{ display: 'inline-block' }}>
                                <Link href="#" underline="hover"  onClick={handleOnClick}>
                               
                                    {job.job_id}
                                </Link>

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
                <p>No jobs yet.</p>

            )}

        </>
    )
}

export default AdminDashboard;
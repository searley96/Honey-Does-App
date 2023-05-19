import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';

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
        <h3>Admin Dashboard goes here!!</h3>
        
        </>
    )
}

export default AdminDashboard;
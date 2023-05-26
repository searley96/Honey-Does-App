import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography, Link } from '@mui/material';
import { useHistory } from "react-router-dom";

function AdminDashboard() {
  console.log("Inside Dashboard()!!");
  const dispatch = useDispatch();

  const allJobs = useSelector((store) => store.allJobs);
  console.log("All jobs:", allJobs);

  useEffect(() => {
    dispatch({ type: "FETCH_JOBS" }); // Fetch job ID
  }, []);

  const history = useHistory();

  const handleOnClick = (jobObj) => {
    dispatch({ type: "VIEW_JOB_DETAILS", payload: jobObj });
    history.push("/jobDetails");
  };

  return (
    <>
      <Typography
        sx={{ fontWeight: "bold", mt: 3 }}
        align="center"
        variant="h5"
        
      >
        All Jobs
      </Typography>
      <Card elevation="0">
        <CardContent sx={{ display: "flex", justifyContent: "space-between"}}>
          <Typography sx={{ marginBottom: -3, marginLeft: 3 }}>Job ID:</Typography>
          <Typography sx={{ marginBottom: -3 }}>Client Name:</Typography>
          <Typography sx={{ marginBottom: -3 , marginRight:2 }}>Status:</Typography>
        </CardContent>
      </Card>

      {allJobs.allJobs.length ? (
  allJobs.allJobs.map((job, i) => (
    <Card key={i} sx={{ mt: 2, pt: 1, marginLeft: 2, marginRight: 2, backgroundColor: "whitesmoke" }}>
      <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Button sx={{ fontWeight: "bold", marginLeft: -1}}variant="outlined" onClick={() => handleOnClick(job)}>
          {job.job_id}
        </Button>
        <Typography sx={{ fontWeight: "bold", flex: 1, marginLeft: 6}}> 
          {job.client_first_name} {job.client_last_name}
        </Typography>
        <Typography sx={{  marginRight: .8 , color: job.job_status === "active" ? "green" : job.job_status === "rejected" || job.job_status === "canceled" ? "red" :  "inherit"}}>
          {job.job_status}
        </Typography>
      </CardContent>
    </Card>
        ))
      ) : (
        <p>No details yet.</p>
      )}
    </>
  );
}

export default AdminDashboard;

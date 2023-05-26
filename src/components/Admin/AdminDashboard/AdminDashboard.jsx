import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppBar, Button, Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography, Toolbar, Link, styled, alpha, InputAdornment, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from "react-router-dom";
import Chat from "../../Chat/Chat";

function AdminDashboard() {

    console.log('Inside Dashboard()!!');
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');

    const allJobs = useSelector(store => store.allJobs);
    console.log('All jobs:', allJobs);

    useEffect(() => {
        dispatch({ type: "FETCH_JOBS" }); // Fetch job ID
    }, []);

    const history = useHistory();

    const handleOnClick = (jobObj) => {
        dispatch({ type: 'VIEW_JOB_DETAILS', payload: jobObj })
        dispatch({ type: "SET_JOB_DETAIL_CHAT", payload: jobObj })
        history.push('/jobDetails')
    }

    const onSearch = (evt) => {
        evt.preventDefault();
        console.log('Inside onSearch!');

        dispatch({
            type: 'GET_SEARCHED_JOBS',
            payload: searchInput
        });
    }

    return (
        <>
            <h3>Jobs</h3>

            {/* SEARCH INPUT */}
            <Box component="form" onSubmit={onSearch} sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <InputBase
                            placeholder="Search"
                            value={searchInput}
                            onChange={(evt) => setSearchInput(evt.target.value)}
                            sx={{ flexGrow: 1, backgroundColor: 'white', pl: '10px', borderRadius: '5px', }} // Use flexGrow to make the input take up remaining space
                        />
                        <IconButton type="submit">
                            <SearchIcon sx={{ ml: '10px' }}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>

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
    )

}

export default AdminDashboard;

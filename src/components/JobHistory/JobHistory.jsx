import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import SmsIcon from "@mui/icons-material/Sms";
import FullJobHistory from "./FullJobHistory";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Container,
  IconButton,
  Typography,
  styled,
} from "@mui/material";


function JobHistory() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();
  const [showJobs, setShowJobs] = useState(true);

  const clientJobsData = useSelector((store) => store.clientJobsReducer);
  const user = useSelector((store) => store.user);
  const jobs = useSelector((store) => store.jobs);

  const getAllJobs = () => {
    dispatch({
      type: "FETCH_CLIENT_JOB",
      payload: Number(user.id),
    });
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  const handleFullJobHistory = (jobObject) => {
    dispatch({ type: "SET_FULL_JOBS_HISTORY", payload: jobObject });
  };

  console.log("map function", clientJobsData);

  const togglePastJobs = () => {
    setShowJobs(false);
  };

  const toggleActiveJobs = () => {
    setShowJobs(true);
  };

  const toChat = (jobObject) => {
    dispatch({ type: "SET_JOB_DETAIL_CHAT", payload: jobObject });
    history.push('/chat')
  }

  //console.log("date", clientJobsData[2].date);
  return (
    <Container
      maxWidth="sm"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div>
        <Button
          variant="outlined"
          sx={{ marginLeft: 1 }}
          onClick={togglePastJobs}
        >
          Past Jobs
        </Button>
        <Button
          variant="outlined"
          sx={{ marginLeft: 1 }}
          onClick={toggleActiveJobs}
        >
          Active Jobs
        </Button>
        {showJobs ? (
        <Box>
          <Typography
            sx={{fontWeight: 500 }}
            variant='h4'
            color="primary"
            align="center"
            gutterBottom
          >
            Active Jobs
          </Typography>

          {clientJobsData
            .filter(
              (job) =>
                job.job_status === "active" ||
                job.job_status === "approved" ||
                job.job_status === "request" ||
                job.job_status === "submitted"
            )
            .map((job, index) => {
              let date = job.date.split("T");
              console.log("what is date", date[0]);
              return (
                <Card sx={{ mb: 5 }} key={index}>
                  <Typography
                    sx={{ mb: 2, backgroundColor: "#fcb900" }}
                    color="primary"
                  >
                    Job#{job.job_id}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Date: {date[0]}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Cleaner: {job.cleaner_first_name}{" "}
                    {job.cleaner_last_name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Estimation: {job.estimation}
                  </Typography>
                  <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <CardActions>
                      <Button>
                        <Link
                          key={id}
                          to={{ pathname: `/fullJobHistory` }}
                          onClick={() => handleFullJobHistory(job)}
                          size="small"
                        >
                          See Details
                        </Link>
                      </Button>
                    </CardActions>
                    <IconButton
                      variant="contained"
                      aria-label="chat"
                      color="success"
                      fontSize="inherit"
                      onClick={() => toChat(job)}
                    >
                      Chat
                      <SmsIcon />
                    </IconButton>
                  </Box>
                </Card>
              );
            })}
        </Box>      
        ) : (
        <Box>
              <Typography
                sx={{fontWeight: 500 }}
                variant='h4'
                color="primary"
                align="center"
                gutterBottom
              >
                Past Jobs
              </Typography>
              {clientJobsData
                .filter(
                  (job) =>
                    job.job_status === "completed" ||
                    job.job_status === "cancelled" ||
                    job.job_status === "rejected"
                )
                .map((job, index) => {
                  let date = job.date.split("T");
                  console.log("what is date", date[0]);
                  return (
                    <Card sx={{ mb: 5 }} key={index}>
                      <Typography
                        sx={{ mb: 2, backgroundColor: "#fcb900" }}
                        color="primary"
                      >
                        Job#{job.job_id}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Date: {date[0]}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Cleaner: {job.cleaner_first_name}{" "}
                        {job.cleaner_last_name}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Estimation: {job.estimation}
                      </Typography>
                      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <CardActions>
                          <Button>
                            <Link
                              key={id}
                              to={{ pathname: `/fullJobHistory` }}
                              onClick={() => handleFullJobHistory(job)}
                              size="small"
                            >
                              See Details
                            </Link>
                          </Button>
                        </CardActions>
                        <IconButton
                          variant="contained"
                          aria-label="chat"
                          color="success"
                          fontSize="inherit"
                          onClick={() => toChat(job)}
                        >
                          Chat
                          <SmsIcon />
                        </IconButton>
                      </Box>
                    </Card>
                  );
                })}
        </Box>
        )}
      </div>
    </Container>
  );
}

export default JobHistory;

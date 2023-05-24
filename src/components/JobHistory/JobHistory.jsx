import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import SmsIcon from "@mui/icons-material/Sms";
import clientJobsReducer from "../../redux/reducers/jobs.reducer";
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

const AnimatedIconButton = styled(IconButton)`
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4caf50;
  }
`;
function showClientJobs({ job_status }) {
  if (
    job_status === "active" ||
    job_status === "approved" ||
    job_status === "request" ||
    job_status === "submitted"
  ) {
    toggleActiveJobs();
  } else if (
    job_status === "completed" ||
    job_status === "cancelled" ||
    job_status === "rejected"
  ) {
    togglePastJobs();
  }
}

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
        <IconButton
          variant="contained"
          aria-label="chat"
          color="success"
          fontSize="inherit"
        >
          Chat
          <SmsIcon />
        </IconButton>
        {showJobs ? (
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14, justifyContent: "center" }}
                color="blue"
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
                        color="blue"
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
                      <CardActions>
                        <Button>
                          <Link
                            key={id}
                            to={{ pathname: `/fullJobHistory`, state: jobs }}
                            onClick={() => handleFullJobHistory(job)}
                            size="small"
                          >
                            See Full Job Description
                          </Link>
                        </Button>
                      </CardActions>
                    </Card>
                  );
                })}
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14, justifyContent: "center" }}
                color="blue"
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
                        color="blue"
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
                      <CardActions>
                        <Button>
                          <Link
                            key={id}
                            to={{ pathname: `/fullJobHistory`, state: jobs }}
                            onClick={() => handleFullJobHistory(job)}
                            size="small"
                          >
                            See Full Job Description
                          </Link>
                        </Button>
                      </CardActions>
                    </Card>
                  );
                })}
            </CardContent>
          </Card>
        )}
      </div>
    </Container>
  );
}

export default JobHistory;

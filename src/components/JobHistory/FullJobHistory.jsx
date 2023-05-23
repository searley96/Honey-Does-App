import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Container,
  Typography,
} from "@mui/material";

function showJobs({ job_status }) {
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

function FullJobHistory() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { job } = useParams();
  //const [showFullDescription, setShowDescription] = useState(true);
  const [showJobs, setShowJobs] = useState(true);
  const clientJobsData = useSelector((store) => store.clientJobsReducer);
  const user = useSelector((store) => store.user);

  const getAllJobs = () => {
    dispatch({
      type: "FETCH_CLIENT_JOB",
      payload: Number(user.id),
    });
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  const togglePastJobs = () => {
    setShowJobs(false);
  };

  const toggleActiveJobs = () => {
    setShowJobs(true);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div>
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
                        Manager: {job.manager_id}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Cleaner: {job.cleaner_id}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Job Status: {job.job_status}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Feedback: {job.feedback}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Date: {date[0]}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Start Time: {job.start_time}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        End Time: {job.end_time}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Estimation: {job.estimation}
                      </Typography>
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
                .map((job, index) => (
                  <Card sx={{ mb: 5 }} key={index}>
                    <Typography
                      sx={{ mb: 2, backgroundColor: "#fcb900" }}
                      color="blue"
                    >
                      Job#{job.job_id}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Manager: {job.manager_id}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Cleaner: {job.cleaner_id}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Job Status: {job.job_status}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Feedback: {job.feedback}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Date: {date[0]}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Start Time: {job.start_time}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      End Time: {job.end_time}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Estimation: {job.estimation}
                    </Typography>
                  </Card>
                ))}
            </CardContent>
          </Card>
        )}
      </div>
    </Container>
  );
}

export default FullJobHistory;

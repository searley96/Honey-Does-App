import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import cleanerFullJobsHistoryReducer from "../../redux/reducers/fullCleanerJobs.reducer";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Container,
  Typography,
} from "@mui/material";

function CleanerFullJobHistory() {
  const job = useSelector((store) => store.cleanerFullJobsHistoryReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const [showFullDescription, setShowDescription] = useState(true);

  console.log("cleanerFullHistory", job);
  const handleBack = () => {
    history.push("/cleanerJobHistory");
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  let date = job.job.date.split("T");

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={2}
      >
        <Card>
          <CardContent>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              color="blue"
              bgcolor={"#fcb900"}
            >
              Job# {job.job.job_id}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Manager: {job.job.manager_first_name} {job.job.manager_last_name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Client: {job.job.client_first_name} {job.job.client_last_name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Job Status: {job.job.job_status}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Feedback: {job.job.feedback}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Date: {date[0]}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Start Time: {job.job.start_time}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              End Time: {job.job.end_time}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Estimation: {job.job.estimation}
            </Typography>
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Button variant="outlined" onClick={handleBack}>
                Back
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default CleanerFullJobHistory;

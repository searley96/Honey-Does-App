import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import clientFullJobsHistoryReducer from "../../redux/reducers/fullJob.reducer";

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
  const job = useSelector((store) => store.clientFullJobsHistoryReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const [showFullDescription, setShowDescription] = useState(true);

  console.log("cleanerFullHistory", job.job);
  const handleBack = () => {
    history.push("/cleanerJobHistory");
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  let date = job.job.date.split("T");

  return (
    <Container
      maxWidth="sm"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div>
        {showFullDescription ? (
          <Card sx={{ mb: 5 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14, justifyContent: "center" }}
                color="blue"
                gutterBottom
              >
                Job#{job.job.job_id}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Manager: {job.job.manager_first_name}{" "}
                {job.job.manager_last_name}
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
              <Button onClick={handleBack}>Back</Button>
            </CardContent>
          </Card>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </Container>
  );
}

export default CleanerFullJobHistory;

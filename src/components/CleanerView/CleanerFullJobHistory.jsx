import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory, useLocation } from "react-router-dom";
import cleanerFullJobsHistoryReducer from "../../redux/reducers/fullCleanerJobs.reducer";
import { Box, Button, Container, Typography } from "@mui/material";

function CleanerFullJobHistory() {
  const job = useSelector((store) => store.cleanerFullJobsHistoryReducer);
  const history = useHistory();
  const location = useLocation();
  const [showFullDescription, setShowDescription] = useState(true);

  console.log("cleanerFullHistory", job);
  const handleBack = () => {
    history.push("/user");
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  let date = job.job.date.split("T");
  const jobType = location.state?.jobType || "active";
  const showAdditionalDetails = location.state?.jobType === "past";

  // Define the styles for active and past job types
  const activeStyles = {
    backgroundColor: "#1976D2",
    color: "#FCB900",
  };

  const pastStyles = {
    backgroundColor: "#FCB900",
    color: "#1976D2",
  };
  // Determine the styles based on the jobType
  const jobStyles = jobType === "active" ? activeStyles : pastStyles;
  return (
    <Container maxWidth="small">
      <Box sx={{ marginTop: "40px" }}>
        <Button
          variant="outlined"
          sx={{
            fontWeight: "bold",
            fontSize: 15,
            outlineStyle: "solid",
            outlineColor: "#1976D2",
            outlineWidth: "2px",
          }}
          onClick={handleBack}
        >
          Back
        </Button>
        <Typography
          sx={{
            textAlign: "center",
            py: "20px",
            fontWeight: "bold",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
          }}
          gutterBottom
          variant="h5"
        >
          Job Details
        </Typography>
        <Typography
          sx={{
            mb: 2,
            borderRadius: "8px",
            marginLeft: 5,
            marginRight: 5,
            ...jobStyles,
          }}
          variant="h6"
          align="center"
          gutterBottom
          fontWeight="bold"
          fontSize={20}
        >
          Job# {job.job.job_id}
        </Typography>
        <Typography sx={{ mb: 1.5, ml: 5, marginRight: 5 }} color="black">
          <span style={{ fontWeight: "bold" }}>Manager: </span>{" "}
          {job.job.manager_first_name} {job.job.manager_last_name}
        </Typography>
        <Typography sx={{ mb: 1.5, ml: 5, marginRight: 5 }} color="black">
          {" "}
          <span style={{ fontWeight: "bold" }}>Client: </span>{" "}
          {job.job.client_first_name} {job.job.client_last_name}
        </Typography>
        <Typography sx={{ mb: 1.5, ml: 5, marginRight: 5 }} color="black">
          <span style={{ fontWeight: "bold" }}>Job Status: </span>{" "}
          {job.job.job_status}
        </Typography>
        <Typography sx={{ mb: 1.5, ml: 5, marginRight: 5 }} color="black">
          <span style={{ fontWeight: "bold" }}>Feedback: </span>{" "}
          {job.job.feedback}
        </Typography>
        <Typography sx={{ mb: 1.5, ml: 5, marginRight: 5 }} color="black">
          <span style={{ fontWeight: "bold" }}>Date: </span> {date[0]}
        </Typography>
        <Typography sx={{ mb: 1.5, ml: 5, marginRight: 5 }} color="black">
          <span style={{ fontWeight: "bold" }}>Start Time: </span>{" "}
          {job.job.start_time}
        </Typography>
        <Typography sx={{ mb: 1.5, ml: 5, marginRight: 5 }} color="black">
          <span style={{ fontWeight: "bold" }}>End Time: </span>{" "}
          {job.job.end_time}
        </Typography>
        <Typography sx={{ mb: 1.5, ml: 5, marginRight: 5 }} color="black">
          <span style={{ fontWeight: "bold" }}>Estimation: </span>{" "}
          {job.job.estimation}
        </Typography>
        {showAdditionalDetails && (
          <>
            <Typography
              sx={{
                mb: 2,
                borderRadius: "8px",
                marginLeft: 5,
                marginRight: 5,
                ...jobStyles,
              }}
              variant="h6"
              align="center"
              gutterBottom
              fontWeight="bold"
              fontSize={20}
            >
              Job# {job.job.job_id}
            </Typography>
            <Typography sx={{ mb: 1.5, ml: 5, marginRight: 5 }} color="black">
              <span style={{ fontWeight: "bold" }}>Manager: </span>{" "}
              {job.job.manager_first_name} {job.job.manager_last_name}
            </Typography>
            <Typography sx={{ mb: 1.5, ml: 5, marginRight: 5 }} color="black">
              {" "}
              <span style={{ fontWeight: "bold" }}>Client: </span>{" "}
              {job.job.client_first_name} {job.job.client_last_name}
            </Typography>
            <Typography sx={{ mb: 1.5, ml: 5, marginRight: 5 }} color="black">
              <span style={{ fontWeight: "bold" }}>Job Status: </span>{" "}
              {job.job.job_status}
            </Typography>
            <Typography sx={{ mb: 1.5, ml: 5, marginRight: 5 }} color="black">
              <span style={{ fontWeight: "bold" }}>Feedback: </span>{" "}
              {job.job.feedback}
            </Typography>
            <Typography sx={{ mb: 1.5, ml: 5, marginRight: 5 }} color="black">
              <span style={{ fontWeight: "bold" }}>Date: </span> {date[0]}
            </Typography>
            <Typography sx={{ mb: 1.5, ml: 5, marginRight: 5 }} color="black">
              <span style={{ fontWeight: "bold" }}>Start Time: </span>{" "}
              {job.job.start_time}
            </Typography>
            <Typography sx={{ mb: 1.5, ml: 5, marginRight: 5 }} color="black">
              <span style={{ fontWeight: "bold" }}>End Time: </span>{" "}
              {job.job.end_time}
            </Typography>
            <Typography sx={{ mb: 1.5, ml: 5, marginRight: 5 }} color="black">
              <span style={{ fontWeight: "bold" }}>Estimation: </span>{" "}
              {job.job.estimation}
            </Typography>
          </>
        )}
      </Box>
    </Container>
  );
}

export default CleanerFullJobHistory;

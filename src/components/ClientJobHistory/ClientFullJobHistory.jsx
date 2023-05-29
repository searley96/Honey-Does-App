import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";

function FullJobHistory() {
  const job = useSelector((store) => store.clientFullJobsHistoryReducer);
  const history = useHistory();
  const [showFullDescription, setShowFullDescription] = useState(true);
  const jobType = location.state?.jobType || "active";
  const showAdditionalDetails = location.state?.jobType === "past";

  const activeStyles = {
    backgroundColor: "#1976D2",
    color: "#FCB900",
  };

  const pastStyles = {
    backgroundColor: "#FCB900",
    color: "#1976D2",
  };

  const jobStyles = jobType === "active" ? activeStyles : pastStyles;
  const handleBack = () => {
    history.push("/user");
  };

  if (!job) {
    return <div>Loading...</div>;
  }

let date;

  if (job.date != null) {
    const split = job.date.split("T")
    date = split[0];
    console.log("what is date", date[0]);
  }
  else {
    date = 'yet to be scheduled'
  }
  // let date = job.job.date.split("T");

  return (
    <Container maxWidth="sm">
      <div>
        {showFullDescription ? (
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
                // textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
              }}
              gutterBottom
              variant="h5"
            >
              Job Details
            </Typography>
            {showFullDescription && (
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
                  margin="16px"
                  gutterBottom
                  fontWeight="bold"
                  fontSize={20}
                >
                  Job# {job.job_id}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, ml: 5, marginRight: 5 }}
                  color="black"
                >
                  <span style={{ fontWeight: "bold" }}>Manager: </span>{" "}
                  {job.manager_first_name} {job.manager_last_name}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, ml: 5, marginRight: 5 }}
                  color="black"
                >
                  <span style={{ fontWeight: "bold" }}>Cleaner: </span>{" "}
                  {job.cleaner_first_name} {job.cleaner_last_name}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, ml: 5, marginRight: 5 }}
                  color="black"
                >
                  <span style={{ fontWeight: "bold" }}>Job Status: </span>{" "}
                  {job.job_status}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, ml: 5, marginRight: 5 }}
                  color="black"
                >
                  <span style={{ fontWeight: "bold" }}>Feedback: </span>{" "}
                  {job.feedback}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, ml: 5, marginRight: 5 }}
                  color="black"
                >
                  <span style={{ fontWeight: "bold" }}>Date: </span>
                  {date[0]}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, ml: 5, marginRight: 5 }}
                  color="black"
                >
                  <span style={{ fontWeight: "bold" }}>Start Time: </span>{" "}
                  {job.start_time}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, ml: 5, marginRight: 5 }}
                  color="black"
                >
                  <span style={{ fontWeight: "bold" }}>End Time: </span>{" "}
                  {job.end_time}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, ml: 5, marginRight: 5 }}
                  color="black"
                >
                  <span style={{ fontWeight: "bold" }}>Estimation: </span>{" "}
                  {job.estimation}
                </Typography>
              </>
            )}
          </Box>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </Container>
  );
}

export default FullJobHistory;

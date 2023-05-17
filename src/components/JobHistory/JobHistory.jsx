import React, { useState } from "react";
import { useSelector } from "react-redux";
import SmsIcon from "@mui/icons-material/Sms";
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

function JobHistory() {
  const [showActiveJobs, setShowActiveJobs] = useState(false);
  const [showPastJobs, setShowPastJobs] = useState(false);

  const activeJobs = [
    {
      jobId: 123,
      assignedCleaner: "Joann",
      jobAddress: "1436 Prime Ave N",
      jobDateToBeServiced: "6/14/2023",
      jobPrice: "$345",
      jobNotes: `Owner has a pet terrier dog that will not be in the cage`,
    },
    {
      jobId: 126,
      assignedCleaner: "Kim",
      jobAddress: "34 Java Parkway N",
      jobDateToBeServiced: "7/18/2023",
      jobPrice: "$260",
      jobNotes: `Go in through the patio door in the back of the house`,
    },
    {
      jobId: 130,
      assignedCleaner: "Cynthia",
      jobAddress: "19th React Street SW",
      jobDateToBeServiced: "6/24/2023",
      jobPrice: "$184",
      jobNotes: `Please knock and do not ring the doorbell`,
    },
  ];
  const pastJobs = [
    {
      jobId: 90,
      assignedCleaner: "Joann",
      jobAddress: "1436 Prime Ave N",
      jobDateServiced: "2/14/2022",
      jobPrice: "$245",
      jobNotes: `Owner has a pet terrier dog that will not be in the cage`,
    },
    {
      jobId: 16,
      assignedCleaner: "Kim",
      jobAddress: "34 Java Parkway N",
      jobDateServiced: "1/18/2023",
      jobPrice: "$160",
      jobNotes: `Go in through the patio door in the back of the house`,
    },
    {
      jobId: 67,
      assignedCleaner: "Cynthia",
      jobAddress: "19th React Street SW",
      jobDateServiced: "9/24/2022",
      jobPrice: "$210",
      jobNotes: `Please knock and do not ring the doorbell`,
    },
  ];

  const togglePastJobs = () => {
    setShowPastJobs(!showPastJobs);
  };

  const toggleActiveJobs = () => {
    setShowActiveJobs(!showActiveJobs);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div>
        <Button variant="outlined" onClick={togglePastJobs}>
          Past Jobs
        </Button>
        <Button variant="outlined" onClick={toggleActiveJobs}>
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
        {showActiveJobs && (
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14, justifyContent: "center" }}
                color="blue"
                gutterBottom
              >
                Active Jobs
              </Typography>
              {activeJobs.map((job, index) => (
                <Card key={index}>
                  <Typography
                    sx={{ mb: 2, backgroundColor: "#fcb900" }}
                    color="blue"
                  >
                    Job#{job.jobId}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Date: {job.jobDateToBeServiced}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Cleaner: {job.assignedCleaner}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Price: {job.jobPrice}
                  </Typography>
                  <CardActions>
                    <Button size="small">See Full Job Description</Button>
                  </CardActions>
                </Card>
              ))}
            </CardContent>
          </Card>
        )}
        {showPastJobs && (
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14, justifyContent: "center" }}
                color="blue"
                gutterBottom
              >
                Past Jobs
              </Typography>
              {pastJobs.map((job, index) => (
                <Card key={index} sx={{ mb: 5 }}>
                  <Typography
                    sx={{ mb: 1.5, backgroundColor: "#fcb900" }}
                    color="blue"
                  >
                    Job#{job.jobId}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Date: {job.jobDateServiced}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Cleaner: {job.assignedCleaner}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Price: {job.jobPrice}
                  </Typography>
                  <CardActions>
                    <Button size="small">See Full Job Description</Button>
                  </CardActions>
                </Card>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </Container>
  );
}

export default JobHistory;

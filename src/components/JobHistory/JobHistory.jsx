import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SmsIcon from "@mui/icons-material/Sms";

function JobHistory() {
  let activeJobs = [
    {
      jobId: 123456,
      assignedCleaner: "Joann",
      jobAddress: "1436 Prime Ave N, Minneapolis, MN",
      jobDateServiced: "3/14/2023",
      jobPrice: "$345",
      jobNotes: `Owner has a pet dog that was not in the cage. Some of cleaning items to longer to clean then proposed`,
    },
    {},
  ];

  return (
    <Container
      maxWidth="sm"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div>
        <Button
          variant="outlined"
          //   onClick={() => setPastJobsBtn(!editPastJobsBtn)}
        >
          Past Jobs
        </Button>

        <Button
          variant="outlined"
          //   onClick={() => setActiveJobsBtn(!editActiveJobsBtn)}
        >
          Active Jobs
        </Button>

        <IconButton
          variant="contained"
          href="#outlined-buttons"
          aria-label="chat"
          color="success"
          fontSize="inherit"
        >
          Chat
          <SmsIcon />
        </IconButton>

        <ul>
          {activeJobs.map((job, index) => (
            <div key={index}>
              <Box>
                <label>
                  <input
                    style={{ outlineColor: "blue" }}
                    type="text"
                    placeholder="Job ID"
                    defaultValue={job.jobId}
                  />
                  <input
                    type="text"
                    placeholder="Cleaner"
                    defaultValue={job.assignedCleaner}
                  />
                  <TextField
                    id="outlined"
                    multiline={true}
                    placeholder="Address"
                    defaultValue={job.jobAddress}
                  />
                  <input
                    type="text"
                    placeholder="Date Services"
                    defaultValue={job.jobDateServiced}
                  />
                  <input
                    type="text"
                    placeholder="Price Agreed Upon"
                    defaultValue={job.jobPrice}
                  />
                  <TextField
                    id="outlined"
                    multiline={true}
                    type="text"
                    placeholder="Notes"
                    defaultValue={job.jobNotes}
                  />
                </label>
              </Box>
            </div>
          ))}
        </ul>
      </div>
    </Container>
  );
}
export default JobHistory;

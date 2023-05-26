import React, { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import allJobsReducer from "../../../redux/reducers/allJobs.reducer";
import {
  Button,
  Card as Box,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Card,
  Grid,
  CardHeader,
  TextField,
} from "@mui/material";
import Chat from "../../Chat/Chat";

function JobDetails() {
  const dispatch = useDispatch();

  // allJobs combined reducer (job details)
  const allJobs = useSelector((store) => store.allJobs);

  const allJobStatus = [
    "request",
    "approved",
    "completed",
    "canceled",
    "rejected",
    "active",
  ];

  // default states
  const [newJobStatus, setNewJobStatus] = useState(
    allJobs.jobDetails.job_status
  );
  const [newDate, setNewDate] = useState(allJobs.jobDetails.date);
  const [newStartTime, setNewStartTime] = useState(
    allJobs.jobDetails.start_time
  );
  const [newEndTime, setNewEndTime] = useState(allJobs.jobDetails.end_time);
  const [newCleaner, setNewCleaner] = useState(allJobs.jobDetails.cleaner_id);

  // This stores the list of cleaners
  const [allCleaners, setAllCleaners] = useState([]);
  // Get all users from DB and then set in AllCleaners state
  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/user/allCleaners",
    })
      .then((response) => {
        console.log("Response.data:", response.data);
        setAllCleaners(response.data);
      })
      .catch((error) => {
        console.log("Error on post:", error);
      });
  }, []);

  const [jobDetailsRefresh, setJobDetailsRefresh] = useState(false);
  useEffect(() => {
    dispatch({ type: "FETCH_JOBS" });
  }, [jobDetailsRefresh]);

  // edit information switches
  const [editJobStatusBtn, setEditJobStatusBtn] = useState(false);
  const [editCleanerFirstNameBtn, setEditCleanerFirstNameBtn] = useState(false);
  // const [editCleanerLastNameBtn, setEditCleanerLastNameBtn] = useState(false);
  const [dateBtn, setDateBtn] = useState(false);
  const [startTimeBtn, setStartTimeBtn] = useState(false);
  const [endTimeBtn, setEndTimeBtn] = useState(false);

  // this object will contain the job details information
  const [jobDetailsUpdate, setJobDetailsUpdate] = useState({
    job_status: allJobs.job_status,
    date: allJobs.date,
    start_time: allJobs.start_time,
    end_time: allJobs.end_time,
  });

  const cancelEdit = (func) => {
    setJobDetailsUpdate({
      job_status: allJobs.job_status,
      date: allJobs.date,
      start_time: allJobs.start_time,
      end_time: allJobs.end_time,
    });
    func;
  };

  // setNewCleaner
  const handleDropDownChange = (event) => {
    setNewCleaner(event.target.value);
    console.log("newCleaner:", newCleaner);
  };

  // setNewJobStatus
  const handleJobStatusDropDownChange = (event) => {
    setNewJobStatus(event.target.value);
    console.log("newJobStatus:", newJobStatus);
  };

  const [updateCleanerObject, setUpdateCleanerObject] = useState({
    cleaner_id: allJobs.jobDetails.cleaner_id,
    job_id: allJobs.jobDetails.job_id,
    job_status: allJobs.jobDetails.job_status,
    date: allJobs.jobDetails.date,
    start_time: allJobs.jobDetails.start_time,
    end_time: allJobs.jobDetails.end_time,
  });

  // create a handleInputChange function
  const handleInputChange = (event) => {
    console.log("handleInputChange event.target:", event.target);
    const { name, value } = event.target;
    setUpdateCleanerObject({
      ...updateCleanerObject,
      [name]: value,
    });
  };

  const handleSubmit = (number) => {
    console.log("handleSubmit updateCleanerObject:", updateCleanerObject);
    dispatch({ type: "ADMIN_UPDATE_JOB", payload: updateCleanerObject });
    if (number === 1) {
      setJobDetailsRefresh(!jobDetailsRefresh);
      setEditJobStatusBtn(false);
    } else if (number === 2) {
      setJobDetailsRefresh(!jobDetailsRefresh);
      setEditCleanerFirstNameBtn(false);
    } else if (number === 3) {
      setJobDetailsRefresh(!jobDetailsRefresh);
      setDateBtn(false);
    } else if (number === 4) {
      setJobDetailsRefresh(!jobDetailsRefresh);
      setStartTimeBtn(false);
    } else if (number === 5) {
      setJobDetailsRefresh(!jobDetailsRefresh);
      setEndTimeBtn(false);
    }
  };

  const handleClickForJobStatus = () => {
    console.log("newJobStatus inside handleClickForJobStatus:", newJobStatus);
    const updateJobStatusObject = { jobStatus: newJobStatus };
  };

  let date = allJobs.jobDetails.date.split("T");

  return (
    <>
      <Typography
        sx={{ fontWeight: "bold", mt: 3 }}
        align="center"
        variant="h5"
      >
        Job #{allJobs.jobDetails.job_id}
      </Typography>

      {allJobs.jobDetails ? (
        <Grid item xs={4}>
          {/* JOB STATUS INPUT */}
          <Card
            sx={{
              mt: 2,
              pt: 1,
              marginLeft: 2,
              marginRight: 2,
              backgroundColor: "whitesmoke",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // Shifts content to the left
              }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                }}
                color="text.secondary"
                gutterBottom
              >
                Status:
              </Typography>
              {editJobStatusBtn ? (
                <>
                  <select
                    name="job_status"
                    defaultValue=""
                    style={{ width: "100px" }}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled selected>
                      {" "}
                      -- select an option --{" "}
                    </option>
                    {allJobStatus ? (
                      allJobStatus.map((status, i) => (
                        <option key={i} value={status}>
                          {status}
                        </option>
                      ))
                    ) : (
                      <option>Status</option>
                    )}
                  </select>
                  {/* Cancel and Submit Buttons */}
                  <Button
                    onClick={() => setEditJobStatusBtn(false)}
                    sx={{ display: "inline-flex", mr: 1.5 }}
                    variant="outlined"
                  >
                    <CloseIcon sx={{ color: "red" }} />
                  </Button>
                  <Button
                    onClick={() => handleSubmit(1)}
                    sx={{ display: "inline-flex", mr: 1.5 }}
                    variant="outlined"
                  >
                    <CheckIcon sx={{ color: "green" }} />
                  </Button>
                </>
              ) : (
                <>
                  <Typography
                    sx={{
                      color:
                        allJobs.jobDetails.job_status === "active"
                          ? "green"
                          : allJobs.jobDetails.ob_status === "rejected" ||
                            allJobs.jobDetails.job_status === "canceled"
                          ? "red"
                          : "inherit",
                    }}
                    gutterBottom
                  >
                    {allJobs.jobDetails.job_status}
                  </Typography>

                  <Button
                    onClick={() => cancelEdit(setEditJobStatusBtn(true))}
                    sx={{ display: "inline-flex", mr: 1.5 }}
                    variant="outlined"
                  >
                    Edit
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          {/* CLEANER INPUT */}
          <Card
            sx={{
              mt: 2,
              pt: 1,
              marginLeft: 2,
              marginRight: 2,
              backgroundColor: "whitesmoke",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // Shifts content to the left
              }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                }}
                color="text.secondary"
                gutterBottom
              >
                Cleaner:
              </Typography>
              {editCleanerFirstNameBtn ? (
                <>
                  <select
                    // add a name property to all inputs
                    name="cleaner_id"
                    defaultValue=""
                    style={{ width: "100px" }}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled selected>
                      {" "}
                      -- select an option --{" "}
                    </option>
                    {allCleaners ? (
                      allCleaners.map((cleaner, i) => (
                        <option key={i} value={cleaner.id}>
                          {cleaner.first_name} {cleaner.last_name}
                        </option>
                      ))
                    ) : (
                      <option>Cleaners</option>
                    )}
                  </select>
                  {/* Cancel and Submit Buttons */}
                  <Button
                    onClick={() => setEditCleanerFirstNameBtn(false)}
                    sx={{ display: "inline-flex", mr: 1.5 }}
                    variant="outlined"
                  >
                    <CloseIcon sx={{ color: "red" }} />
                  </Button>
                  <Button
                    onClick={() => handleSubmit(2)}
                    sx={{ display: "inline-flex", mr: 1.5 }}
                    variant="outlined"
                  >
                    <CheckIcon sx={{ color: "green" }} />
                  </Button>
                </>
              ) : (
                <>
                  <Typography
                    sx={{ display: "inline", align: "center" }}
                    gutterBottom
                  >
                    {allJobs.jobDetails.cleaner_first_name}{" "}
                    {allJobs.jobDetails.cleaner_last_name}
                  </Typography>

                  <Button
                    onClick={() => cancelEdit(setEditCleanerFirstNameBtn(true))}
                    sx={{ display: "inline-flex", mr: 1.5 }}
                    variant="outlined"
                  >
                    Edit
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          {/* CLIENT INPUT */}
          <Card
            sx={{
              mt: 2,
              pt: 1,
              marginLeft: 2,
              marginRight: 2,
              backgroundColor: "whitesmoke",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start", // Shifts content to the left
              }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                }}
                color="text.secondary"
                gutterBottom
              >
                Client:
              </Typography>
              <Typography
                sx={{ display: "inline", pl: "60px", fontSize: 15 }}
                gutterBottom
              >
                {allJobs.jobDetails.client_first_name}{" "}
                {allJobs.jobDetails.client_last_name}
              </Typography>
            </CardContent>
          </Card>

          {/* DATE INPUT */}
          <Card
            sx={{
              mt: 2,
              pt: 1,
              marginLeft: 2,
              marginRight: 2,
              backgroundColor: "whitesmoke",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // Shifts content to the left
              }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                }}
                color="text.secondary"
                gutterBottom
              >
                Date:
              </Typography>
              {dateBtn ? (
                <>
                  <TextField
                    variant="standard"
                    size="small"
                    name="date"
                    value={updateCleanerObject.date}
                    onChange={handleInputChange}
                    sx={{ display: "inline-flex", mx: 2.5 }}
                  />
                  {/* Cancel and Submit Buttons */}
                  <Button
                    onClick={() => setDateBtn(false)}
                    sx={{ display: "inline-flex", mr: 1.5 }}
                    variant="outlined"
                  >
                    <CloseIcon sx={{ color: "red" }} />
                  </Button>
                  <Button
                    onClick={() => handleSubmit(3)}
                    sx={{ display: "inline-flex", mr: 1.5 }}
                    variant="outlined"
                  >
                    <CheckIcon sx={{ color: "green" }} />
                  </Button>
                </>
              ) : (
                <>
                  <Typography sx={{ display: "inline" }} gutterBottom>
                    {date[0]}
                  </Typography>

                  <Button
                    onClick={() => cancelEdit(setDateBtn(true))}
                    sx={{ display: "inline-flex", mr: 1.5 }}
                    variant="outlined"
                  >
                    Edit
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          {/* START TIME INPUT */}
          <Card
            sx={{
              mt: 2,
              pt: 1,
              marginLeft: 2,
              marginRight: 2,
              backgroundColor: "whitesmoke",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // Shifts content to the left
              }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                }}
                color="text.secondary"
                gutterBottom
              >
                Start Time:
              </Typography>
              {startTimeBtn ? (
                <>
                  <TextField
                    variant="standard"
                    size="small"
                    name="start_time"
                    value={updateCleanerObject.start_time}
                    onChange={handleInputChange}
                    sx={{ display: "inline-flex", mx: 2.5 }}
                  />
                  {/* Cancel and Submit Buttons */}
                  <Button
                    onClick={() => setStartTimeBtn(false)}
                    sx={{ display: "inline-flex", mr: 1.5 }}
                    variant="outlined"
                  >
                    <CloseIcon sx={{ color: "red" }} />
                  </Button>
                  <Button
                    onClick={() => handleSubmit(4)}
                    sx={{ display: "inline-flex", mr: 1.5 }}
                    variant="outlined"
                  >
                    <CheckIcon sx={{ color: "green" }} />
                  </Button>
                </>
              ) : (
                <>
                  <Typography sx={{ display: "inline" }} gutterBottom>
                    {allJobs.jobDetails.start_time}
                  </Typography>

                  <Button
                    onClick={() => cancelEdit(setStartTimeBtn(true))}
                    sx={{ display: "inline-flex", mr: 1.5 }}
                    variant="outlined"
                  >
                    Edit
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          {/* END TIME INPUT */}
          <Card
            sx={{
              mt: 2,
              pt: 1,
              marginLeft: 2,
              marginRight: 2,
              backgroundColor: "whitesmoke",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // Shifts content to the left
              }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                }}
                color="text.secondary"
                gutterBottom
              >
                End Time:
              </Typography>
              {endTimeBtn ? (
                <>
                  <TextField
                    variant="standard"
                    size="small"
                    name="end_time"
                    value={updateCleanerObject.end_time}
                    onChange={handleInputChange}
                    sx={{ display: "inline-flex", mx: 2.5 }}
                  />
                  {/* Cancel and Submit Buttons */}
                  <Button
                    onClick={() => setEndTimeBtn(false)}
                    sx={{ display: "inline-flex", mr: 1.5 }}
                    variant="outlined"
                  >
                    <CloseIcon sx={{ color: "red" }} />
                  </Button>
                  <Button
                    onClick={() => handleSubmit(5)}
                    sx={{ display: "inline-flex", mr: 1.5 }}
                    variant="outlined"
                  >
                    <CheckIcon sx={{ color: "green" }} />
                  </Button>
                </>
              ) : (
                <>
                  <Typography sx={{ display: "inline" }} gutterBottom>
                    {allJobs.jobDetails.end_time}
                  </Typography>

                  <Button
                    onClick={() => cancelEdit(setEndTimeBtn(true))}
                    sx={{ display: "inline-flex", mr: 1.5 }}
                    variant="outlined"
                  >
                    Edit
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          {/* CUSTOMER FEEDBACK INPUT */}
          <Card
            sx={{
              mt: 2,
              pt: 1,
              marginLeft: 2,
              marginRight: 2,
              backgroundColor: "whitesmoke",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start", // Shifts content to the left
              }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                }}
                color="text.secondary"
                gutterBottom
              >
                Feedback:
              </Typography>
              <Typography
                sx={{ display: "inline", pl: "30px", pr: "2px", fontSize: 15 }}
                gutterBottom
              >
                {allJobs.jobDetails.feedback}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ) : (
        // *** END GRID *** //
        <p>Job Details</p>
      )}
      <h2>Chat Box Goes here</h2>
    </>
  );
}

export default JobDetails;

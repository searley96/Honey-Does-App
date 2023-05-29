import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import SmsIcon from "@mui/icons-material/Sms";
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
  ButtonGroup,
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
  const [isClicked, setIsClicked] = useState(false);

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
    setShowJobs(false), setIsClicked(!isClicked);
  };

  const toggleActiveJobs = () => {
    setShowJobs(true), setIsClicked(!isClicked);
  };

  //console.log("date", clientJobsData[2].date);
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // boxShadow: 24,
      }}
    >
      <div>
        <ButtonGroup sx={{ display: 'flex', justifyContent: 'center' }}>

          <Button
            variant="outlined"
            sx={{
              // marginLeft: "32px",
              // marginRight: "10px",
              color: isClicked ? "#1976D2" : "#1976D2",
              backgroundColor: isClicked ? "fff" : "#fff",
              fontWeight: "bold",
              fontSize: 15,
              marginTop: "40px",
              outline: "none",
              "&:focus": {
                outlineWidth: isClicked ? "2px" : "1px",
                outlineStyle: "solid",
                outlineColor: "#1976D2",
              },
            }}
            onClick={togglePastJobs}
          >
            Past Jobs
          </Button>
          <Button
            variant="outlined"
            sx={{
              // marginRight: "32px",
              // marginLeft: "10px",
              color: isClicked ? "#1976D2" : "#1976D2",
              backgroundColor: isClicked ? "fff" : "#fff",
              fontWeight: "bold",
              fontSize: 15,
              marginTop: "40px",
              outline: "none",
              "&:focus": {
                outlineWidth: isClicked ? "2px" : "1px",
                outlineStyle: "solid",
                outlineColor: "#1976D2",
              },
            }}
            onClick={toggleActiveJobs}
          >
            Active Jobs
          </Button>
        </ButtonGroup>
        {showJobs ? (
          // <Card>
          //   <CardContent>
          <>
            <Typography
              sx={{
                // textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
                textAlign: "center",
                py: "20px",
                fontWeight: "bold",
              }}
              gutterBottom
              variant="h5"
            >
              Active Jobs
            </Typography>

            {clientJobsData
              .filter(
                (job) =>
                  job.job_status === "active" ||
                  job.job_status === "approved" ||
                  job.job_status === "request" ||
                  job.job_status === "submitted" ||
                  job.job_status === "unsubmitted"
              )
              .map((job, index) => {
                let date;
                if (job.date != null) {
                  const split = job.date.split("T")
                  date = split[0];
                  console.log("what is date", date[0]);
                }
                else {
                  date = 'yet to be scheduled'
                }
                return (
                  <Card
                    sx={{
                      mb: 5,
                      backgroundColor: "whitesmoke",
                      boxShadow: 10,
                    }}
                    key={index}
                  >
                    <Typography
                      sx={{
                        mb: 2,
                        backgroundColor: "#1976D2",
                        alignContent: "center",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      color="#fcb900"
                      fontSize={20}
                    >
                      Job #{job.job_id}
                    </Typography>
                    <Typography sx={{ mb: 1.5, ml: 2 }} color="black">
                      {" "}
                      <span style={{ fontWeight: "bold" }}>Date: </span> {date}
                    </Typography>
                    <Typography sx={{ mb: 1.5, ml: 2 }} color="black">
                      {" "}
                      <span style={{ fontWeight: "bold" }}>Cleaner: </span>
                      {job.cleaner_first_name != null ? (job.cleaner_first_name + " " + job.cleaner_last_name) : "unassigned"}
                      {/* {job.cleaner_first_name} {job.cleaner_last_name} */}
                    </Typography>
                    <Typography sx={{ mb: 1.5, ml: 2 }} color="black">
                      {" "}
                      <span style={{ fontWeight: "bold" }}>Estimation: </span>
                      {job.low_estimate != null ? ('$' + job.low_estimate + " - $" + job.high_estimate) : "unsubmitted"}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CardActions>
                        <Button>
                          <Link
                            key={id}
                            to={{ pathname: `/fullJobHistory`, state: jobs }}
                            onClick={() => handleFullJobHistory(job)}
                            underline="none"
                            color="inherit"
                          >
                            <Typography
                              variant="h5"
                              component="span"
                              sx={{
                                color: "#1976d2",
                                fontSize: "16px",
                              }}
                            >
                              See Details
                            </Typography>
                          </Link>
                        </Button>
                        <Button>
                          Chat with Team
                        </Button>
                      </CardActions>
                    </Box>
                  </Card>
                );
              })}
          </>
          //   </CardContent>
          // </Card>
        ) : (
          // <Card>
          //   <CardContent>
          <>
            <Typography
              sx={{
                // textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
                textAlign: "center",
                py: "20px",
                fontWeight: "bold",
              }}
              gutterBottom
              variant="h5"
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
                let date;
                if (job.date != null) {
                  const split = job.date.split("T")
                  date = split[0];
                  console.log("what is date", date[0]);
                }
                else {
                  date = 'yet to be scheduled'
                }
                return (
                  <Card
                    sx={{
                      mb: 5,
                      backgroundColor: "whitesmoke",
                      boxShadow: 10,
                    }}
                    key={index}
                  >
                    <Typography
                      sx={{
                        mb: 2,
                        backgroundColor: "#fcb900",
                        alignContent: "center",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      color="#1976D2"
                      fontSize={20}
                    >
                      Job#{job.job_id}
                    </Typography>
                    <Typography sx={{ mb: 1.5, ml: 2 }} color="black">
                      <span style={{ fontWeight: "bold" }}>Date: </span>{" "}
                      {date}
                    </Typography>
                    <Typography sx={{ mb: 1.5, ml: 2 }} color="black">
                      <span style={{ fontWeight: "bold" }}>Cleaner: </span>
                      {job.cleaner_first_name} {job.cleaner_last_name}
                    </Typography>
                    {/* <Typography sx={{ mb: 1.5, ml: 2 }} color="black">
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        Estimation:{" "}
                      </span>
                      {job.estimation}
                    </Typography> */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    ></Box>
                    <CardActions>
                      <Button>
                        <Link
                          key={id}
                          to={{ pathname: `/fullJobHistory`, state: jobs }}
                          onClick={() => handleFullJobHistory(job)}
                          underline="none"
                          color="inherit"
                        >
                          <Typography
                            variant="h5"
                            component="span"
                            sx={{
                              color: "#1976d2",
                              fontSize: "16px",
                            }}
                          >
                            See Details
                          </Typography>
                        </Link>
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
            {/* </CardContent>
          </Card> */}
          </>
        )}
      </div>
    </Container>
  );
}

export default JobHistory;

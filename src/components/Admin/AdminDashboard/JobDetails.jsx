import { useSelector, useDispatch } from "react-redux";
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
} from "@mui/material";

function JobDetails() {
  const allJobs = useSelector((store) => store.allJobs);



  return (
    <>
      <h3>Job #{allJobs.jobDetails.job_id}</h3>

      {allJobs.jobDetails ? (
        <Grid item xs={4}>
            <Card sx={{ width: 400, height: 50 }}>
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
              Cleaner:
            </Typography>
            <Typography
              style={{ display: "inline", marginLeft: '50px'}}
              gutterBottom
            >
              {allJobs.jobDetails.cleaner_first_name} {allJobs.jobDetails.cleaner_last_name}
            </Typography>
            
          </CardContent>
          </Card>
        
          <Card sx={{ width: 400, height: 50 }}>
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
             style={{ display: "inline", paddingLeft: "50px", fontSize: 15 }}
             gutterBottom
            >
              {allJobs.jobDetails.client_first_name} {allJobs.jobDetails.client_last_name}
            </Typography>
          </CardContent>
          </Card>
          <Card sx={{ width: 400, height: 80 }}>
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
            <Typography
              style={{ display: "inline", paddingLeft: "50px", paddingRight: "80px", fontSize: 15 }}
              gutterBottom
            >
              {allJobs.jobDetails.date}
            </Typography>
            <Button sx={{display: 'inline-flex', mr: 1.5}} variant='outlined'>Edit</Button>
          </CardContent>
          </Card>
          <Card sx={{ width: 400, height: 70 }}>
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
            <Typography
              style={{ display: "inline", paddingLeft: "50px", paddingRight: "80px", fontSize: 15 }}
              gutterBottom
            >
              {allJobs.jobDetails.start_time}
            </Typography>
          
            <Button sx={{display: 'inline-flex', mr: 1.5}} variant='outlined'>Edit</Button>
           
          </CardContent>
          </Card>
          <Card sx={{ width: 400, height: 70 }}>
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
            <Typography
              style={{ display: "inline", paddingLeft: "50px", paddingRight: "80px", fontSize: 15, }}
              gutterBottom
            >
              {allJobs.jobDetails.end_time}
            </Typography>
            <Button sx={{display: 'inline-flex', mr: 1.5}} variant='outlined'>Edit</Button>

          </CardContent>
          </Card>
          <Card sx={{ width: 400, height: 80 }}>
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
              style={{ display: "inline", paddingLeft: "30px", fontSize: 15, }}
              gutterBottom
            >
              {allJobs.jobDetails.feedback}
            </Typography>
          </CardContent>
          </Card>
        </Grid>
      ) : (
        // <Box sx={{ flexGrow: 1 }}>
        //             <CardContent sx={{ display: "flex", justifyContent: "space-evenly" }}>
        //                 <Typography style={{ display: 'inline-block' }}>
        //                     {allJobs.jobDetails.client_first_name} {allJobs.jobDetails.client_last_name}
        //                 </Typography>
        //                 <Typography style={{ display: 'inline-block' }}>
        //                     {allJobs.jobDetails.job_status}
        //                 </Typography>
        //                 <Typography style={{ display: 'inline-block' }}>
        //                     {allJobs.jobDetails.cleaner_first_name} {allJobs.jobDetails.cleaner_last_name}
        //                 </Typography>
        //                 <Typography style={{ display: 'inline-block' }}>
        //                     {allJobs.jobDetails.feedback}
        //                 </Typography>
        //             </CardContent>
        //</Box>

        <p>No jobs yet.</p>
      )}
    </>
  );
}

export default JobDetails;

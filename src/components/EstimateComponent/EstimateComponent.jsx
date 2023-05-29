import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";


function EstimateComponent() {
   // holds the information for the active job, including the esimations
   const job = useSelector(store => store.activeJobReducer);


   const lowEstimate = job.low_estimate;
   const highEstimate = job.high_estimate;


   return(
       <>
           <Box sx={{mt: 5, mb: 7, maxWidth: '311px'}}>
               <Typography variant="h6" align="center" sx={{mb: 5}}>
                   Based on the information you've given us, your estimate is:
               </Typography>
               <Typography variant="h3" align="center" color="primary">
                   ${lowEstimate} - ${highEstimate}
               </Typography>
                <Box>
                    <Typography sx={{mb: 1, mt: 5}} align="center" color="text.secondary">Disclaimer:</Typography>
                    <Typography align="center" color="text.secondary">Please be informed that this estimated price may not be the final total</Typography>
                </Box>
            </Box>
        </>
    )
}

export default EstimateComponent;
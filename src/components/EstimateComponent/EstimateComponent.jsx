import { Box, Typography } from "@mui/material";

function EstimateComponent() {
    return(
        <>
            <Box sx={{mt: 5, mb: 7, maxWidth: '311px'}}>
                <Typography variant="h5" align="center" sx={{mb: 3}}>
                    Your estimate is:
                </Typography>
                <Typography variant="h3" align="center" color="primary">
                    ESTIMATE GOES HERE
                </Typography>
            </Box>
        </>
    )
}

export default EstimateComponent;
import { Box, Typography } from "@mui/material";

function EstimateComponent() {
    return(
        <>
            <Box sx={{mt: 5, mb: 7, maxWidth: '311px'}}>
                <Typography variant="h6" align="center" sx={{mb: 3}}>
                    Based on the information you've given us, your estimate is:
                </Typography>
                <Typography variant="h3" align="center" color="primary">
                    ESTIMATE GOES HERE
                </Typography>
                <Box>
                    <Typography sx={{mb: 1, mt: 4}} align="center">Disclaimer:</Typography>
                    <Typography align="center">Please be informed that this estimated price may not be the final total</Typography>
                </Box>
            </Box>
        </>
    )
}

export default EstimateComponent;
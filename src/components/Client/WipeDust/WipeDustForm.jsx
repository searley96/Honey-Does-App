import GlassDoorsGroup from "./GlassDoorsGroup";
import MirrorsGroup from "./MirrorsGroup";
import DustCeilingGroup from "./DustCeilingGroup";
import DustOtherGroup from "./DustOtherGroup";
import DustFurnitureGroup from "./DustFurnitureGroup"

import { Button, Stack, Box } from '@mui/material';

function WipeDustForm() {

    return (
        <>
            <Box sx={{ my: '60px' }}>
                <GlassDoorsGroup />
            </Box>
            <Box sx={{ my: '60px' }}>
                <MirrorsGroup />
            </Box>
            <Box sx={{ my: '60px' }}>
                <DustCeilingGroup />
            </Box>
            <Box sx={{ my: '60px' }}>
                <DustOtherGroup />
            </Box>
            <Box sx={{ my: '60px' }}>
                <DustFurnitureGroup />
            </Box>
        
        </>
    )
}

export default WipeDustForm;
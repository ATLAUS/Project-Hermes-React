import { Box, Typography, Stack } from '@mui/material'
import './MatcherInfo.scss'

export const MatcherInfo = () => {
    return(
        <Box className = 'matcher-info-container'>
            <Box className = 'matcher-info-box'>
                <Stack>
                    <Typography>Choose a Game</Typography>
                    <Typography className='text-specifications'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                </Stack>
            </Box>
            <Box className = 'matcher-info-box'>
                 <Stack>
                    <Typography>Select an Objective</Typography>
                    <Typography className='text-specifications'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                </Stack>
            </Box>
            <Box className = 'matcher-info-box'>
                 <Stack>
                    <Typography>Add a Note</Typography>
                    <Typography className='text-specifications'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                </Stack>
            </Box>
        </Box>
    )
}
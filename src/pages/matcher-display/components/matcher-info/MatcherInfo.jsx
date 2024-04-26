import { Box, Typography, Stack } from '@mui/material'
import './MatcherInfo.scss'

export const MatcherInfo = () => {
    return(
        <Box className = 'matcher-info-container'>
            <Stack className = 'matcher-game-container'>
                <Typography>Game</Typography>
            </Stack>
            <Stack className = 'matcher-platform-container'>
                <Typography>Platform</Typography>
            </Stack>
            <Stack className = 'matcher-objective-container'>
                <Typography>Objective</Typography>
            </Stack>
            <Stack className = 'matcher-note-container'>
                <Typography>Note</Typography>
            </Stack>
        </Box>
    )
}
import { Box, Typography, Stack } from '@mui/material'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import FlagCircleOutlinedIcon from '@mui/icons-material/FlagCircleOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import './MatcherInfo.scss'

export const MatcherInfo = () => {
    return(
        <Box className = 'matcher-info-container'>
            <Box className = 'matcher-info-box'>
                <Stack direction="column" spacing={2}>
                    <Stack className = 'matcher-info-text' direction = "row" spacing = {2}>
                        <SportsEsportsOutlinedIcon sx={{fontSize: 48}} />
                        <Typography sx={{fontSize: 24, fontWeight: 'bold'}}>Choose a Game</Typography>
                    </Stack>
                    <Typography className='text-specifications'>Select a game to play from our list of ... pre-determined titles.</Typography>
                </Stack>
            </Box>
            <Box className = 'matcher-info-box'>
                 <Stack direction="column" spacing={2}>
                    <Stack className='matcher-info-text' direction="row" spacing = {2}>
                        <FlagCircleOutlinedIcon sx={{fontSize: 48}}/>
                        <Typography sx={{fontSize: 24, fontWeight: 'bold'}}>Select an Objective</Typography>
                    </Stack>
                    <Typography className='text-specifications'>Set a clear and concise objective that gives your teammate direction regarding what you expect to accomplish with them in game. </Typography>
                </Stack>
            </Box>
            <Box className = 'matcher-info-box'>
                 <Stack direction="column" spacing={2}>
                    <Stack className='matcher-info-text' direction="row" spacing = {2}>
                        <NoteAddOutlinedIcon sx={{fontSize: 48}} />
                        <Typography sx={{fontSize: 24, fontWeight: 'bold'}}>Add a Note</Typography>
                    </Stack>
                    <Typography className='text-specifications'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                </Stack>
            </Box>
        </Box>
    )
}
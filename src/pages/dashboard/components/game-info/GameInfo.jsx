import { Box, Card, CardMedia, Typography } from '@mui/material'
import './GameInfo.scss'


export const GameInfo = () => {
    return(
        <Box className='game-info-container'>
            <Typography>This is the Game info Box</Typography>
            <CardMedia
                sx={{height: 150}}
                image="https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg"
            >
            </CardMedia>
        </Box>
    )
}
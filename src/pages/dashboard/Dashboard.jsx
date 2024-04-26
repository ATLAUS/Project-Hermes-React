import { Box, Grid, Typography } from '@mui/material'
import './Dashboard.scss'
import { Messenger } from  './components/messenger/Messenger'
import { GameInfo } from './components/game-info/GameInfo'
import { MatchInfo } from './components/match-info/MatchInfo'
import { VoiceChat } from './components/voice-chat/VoiceChat'

export const Dashboard = () => {
    return (
        <Grid container spacing={3} className='dashboard-container' sx={{height:'100%', justifyContent: 'center', alignItems: 'center'}}>
            <Grid item xs={3} sx={{height: '80%'}}>
                <GameInfo/>
                <MatchInfo />
            </Grid>
            <Grid item xs={6} sx={{height: '80%'}}>
                <Box sx={{border: 'solid red 1px', borderRadius: '5px', height: '100%'}}>
                    <Messenger/>
                </Box>
            </Grid>
        </Grid>
    )
}
import { Grid } from '@mui/material'
import './Dashboard.scss'
import { Messenger } from  './components/messenger/Messenger'
import { GameInfo } from './components/game-info/GameInfo'
import { MatchInfo } from './components/match-info/MatchInfo'
import { VoiceChat } from './components/voice-chat/VoiceChat'

export const Dashboard = () => {
    return (
        <Grid container spacing={2} className='dashboard-container' marginTop={1} sx={{height: '95%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            {/* Column 1: Game Info & User Info */}
            <Grid container xs={4} spacing={0} sx={{ height: '100%', width: '100%', justifyContent: 'center' }}>
                <Grid item xs={10} sx={{borderRadius: '10px', marginBottom: '50px'}}>
                    <GameInfo/>
                </Grid>
                <Grid item xs={10} sx={{bgcolor: 'seagreen', border: '1px solid red', borderRadius: '10px'}}>
                    <h2>User Info</h2>
                    {/* User Information */}
                </Grid>
            </Grid>
    
            {/* Column 2: Matcher Info & Voice Chat */}
            <Grid container xs={4} spacing={0} sx={{height: '100%', width: '100%', justifyContent: 'center', background: 'none' }}>
                <Grid item xs={12} sx={{height: '80%', marginBottom: '50px'}}>
                    <MatchInfo/>
                </Grid>

                <Grid item xs={12} sx={{height: '15%'}}>
                    <VoiceChat/>
                </Grid>
            </Grid>
    
            {/* Column 3: Messenger (Full Height) */}
            <Grid container xs={4} spacing={0} sx={{ height: '100%', width: '100%', justifyContent: 'center'}}>
                <Grid item xs={10} sx={{bgcolor: 'lightpink', border: '1px solid red', borderRadius: '10px'}}>
                    <h2>Messenger</h2>
                    <Messenger />
                </Grid>
            </Grid>
      </Grid>
    )
}



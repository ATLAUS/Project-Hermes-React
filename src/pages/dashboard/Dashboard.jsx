import { Grid } from '@mui/material'
import './Dashboard.scss'
import { Messenger } from  './components/messenger/Messenger'

export const Dashboard = () => {
    return (
        <Grid container spacing={2} sx={{height: '100%', width: '100%', justifyContent: 'center'}}>
            {/* Column 1: Game Info & User Info */}
            <Grid container xs={4} spacing={2} sx={{ height: '100%', width: '100%', justifyContent: 'center' }}>
                <Grid item xs={10} sx={{bgcolor: 'lightgray', border: '1px solid red', borderRadius: '10px'}}>
                    <h2>Game Info</h2>
                </Grid>
                <Grid item xs={10} sx={{bgcolor: 'seagreen', border: '1px solid red', borderRadius: '10px'}}>
                    <h2>User Info</h2>
                    {/* User Information */}
                </Grid>
            </Grid>
    
            {/* Column 2: Matcher Info & Voice Chat */}
            <Grid container xs={4} spacing={2} sx={{height: '100%', width: '100%', justifyContent: 'center' }}>
                <Grid item xs={12} sx={{bgcolor: 'lightblue', border: '1px solid red', borderRadius: '10px', height: '80%'}}>
                    <h2>Matcher Info</h2>
                </Grid>

                <Grid item xs={12} sx={{bgcolor: 'lightgreen', border: '1px solid red', borderRadius: '10px', height: '20%'}}>
                    <h2>Voice Chat</h2>
                </Grid>
            </Grid>
    
            {/* Column 3: Messenger (Full Height) */}
            <Grid container xs={4} spacing={2} sx={{ height: '100%', width: '100%', justifyContent: 'center'}}>
                <Grid item xs={10} sx={{bgcolor: 'lightpink', border: '1px solid red', borderRadius: '10px'}}>
                    <h2>Messenger</h2>
                    <Messenger />
                </Grid>
            </Grid>
      </Grid>
    )
}



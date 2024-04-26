import './MatcherDisplay.scss'
import { MatcherForm } from './components/matcher-form/MatcherForm'
import { MatcherInfo } from './components/matcher-info/MatcherInfo'
import { Grid } from '@mui/material'

export const MatcherDisplay = () => {
    return (
        <Grid container spacing ={2} className='matcher-display' sx={{height: '100%', width: '100%', justifyContent: 'start', alignItems: 'center', margin: '0'}}>
            <Grid container xs={6} spacing={2} sx={{height:'75%', width:'100%', justifyContent: 'center'}}>
                <Grid item xs={10}>
                    <MatcherForm/>
                </Grid>
            </Grid>
            <Grid container xs={6} spacing={2} sx={{height:'60%', width:'100%', justifyContent: 'center'}}>
                <Grid item xs={10}>
                    <MatcherInfo/>
                </Grid>
            </Grid>
        </Grid>
    )
}
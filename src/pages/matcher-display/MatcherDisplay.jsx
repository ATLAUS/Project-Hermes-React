import './MatcherDisplay.scss'
import { MatcherForm } from './components/matcher-form/MatcherForm'
import { MatcherInfo } from './components/matcher-info/MatcherInfo'
import { NavRail } from '../../components/nav-rail/NavRail'
import { Grid } from '@mui/material'

export const MatcherDisplay = () => {
    return (
        <>
            <NavRail/>
            <Grid className='matcher-display' container spacing={2} columnSpacing={{xs: 15}} sx={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <Grid item xs={5} sx={{height: '80%', zIndex: '2'}}>
                    <MatcherForm/>
                </Grid>
                <Grid item xs={5} sx={{height: '60%', zIndex: '2'}}>
                    <MatcherInfo/>
                </Grid>
            </Grid>
        </>
    )
}
import './NavRail.scss'
import { Box, Stack, Tooltip } from '@mui/material'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../../App';

export const NavRail = () => {
    const navigate = useNavigate()
    const {activeParty} = useContext(UserContext)
    
    return (
        <Box className='nav-rail'>
            <Stack direction='column' spacing={2}>
                <Tooltip title="Home" placement='right' arrow disableInteractive>
                    <Box className='nav-icons'>
                        <HomeIcon onClick={() => navigate('/')}/>
                    </Box>
                </Tooltip>
                <Tooltip title="Dashboard" placement='right' arrow disableInteractive>
                    <Box className='nav-icons'>
                        <SpaceDashboardIcon onClick={() => navigate('/dashboard')}/>
                    </Box>
                </Tooltip>
                { !activeParty && (<Tooltip title="Create a Matcher" placement='right' arrow disableInteractive>
                    <Box className='nav-icons'>
                        <AddIcon onClick={() => navigate('/matcher-display')}/>
                    </Box>
                </Tooltip>)
                }
            </Stack>
        </Box>
    )
}
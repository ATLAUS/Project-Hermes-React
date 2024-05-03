import { Box, Typography } from '@mui/material'
import './PartyInfo.scss'
// Import useContext and the context we created (UserContext)
import { useContext } from 'react'
import { UserContext } from '../../../../App'


export const PartyInfo = () => {
    // Destructure the parts of the context we are using
    const { userInfo } = useContext(UserContext)
    return(
        <Box className='party-info-container'>
            <Typography>{userInfo?.user?.userName}</Typography>
        </Box>
    )
}
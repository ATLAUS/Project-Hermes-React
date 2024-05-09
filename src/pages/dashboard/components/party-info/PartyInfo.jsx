import { Box, Button, Typography, Stack } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import LoopIcon from '@mui/icons-material/Loop'
import PersonIcon from '@mui/icons-material/Person'
import './PartyInfo.scss'
// Import useContext and the context we created (UserContext)
import { useContext, useState } from 'react'
import { UserContext } from '../../../../App'

export const PartyInfo = () => {
  // Destructure the parts of the context we are using
  const { userInfo, activeParty } = useContext(UserContext)
  const [rematchin, setRematching] = useState(false)
  const [leavingParty, setLeavingParty] = useState(false)

  return (
    <Box className="party-info-container">
      <Stack
        spacing={15}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography>{userInfo?.userName}</Typography>
        <PersonIcon fontSize="large" />
        <Stack direction="row" spacing={7}>
          <Button>
            <LogoutIcon />
          </Button>
          <Button>
            <LoopIcon />
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

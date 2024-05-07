import { Box, Button, Typography, Stack } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import LoopIcon from '@mui/icons-material/Loop';
import PersonIcon from '@mui/icons-material/Person';
import './PartyInfo.scss'
// Import useContext and the context we created (UserContext)
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../App'
import { useAuth0 } from '@auth0/auth0-react';


export const PartyInfo = () => {
  const { user, getAccessTokenSilently } = useAuth0()
  // Destructure the parts of the context we are using
  const { userInfo, activeParty, setActiveParty } = useContext(UserContext)
  const [rematching, setRematching] = useState(false)
  const [leavingParty, setLeavingParty] = useState(false)
  const [matchedUser, setMatchedUser] = useState({})

  const findMatchedUser = () => {
    if (activeParty) {
      const users = activeParty?.Users
      console.log(users)
      for (const user of users) {
        if (user !== userInfo) {
          setMatchedUser(user)
        }
      }
    }
  }

  const leaveParty = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: 'http://localhost:3000/'
        }
      })

      const customUserHeader = {
        'X-User-Info': JSON.stringify({
          email: user.email,
          nickname: user.nickname,
          sub: user.sub
        })
      }

      const leavePartyUrl = `http://localhost:3000/api/parties/leave/${activeParty.id}`

      const leavePartyResponse = await fetch(leavePartyUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          ...customUserHeader
        }
      })
      console.log(leavePartyResponse)
      if (!leavePartyResponse.ok) {
        throw new Error(`Error leaving party: ${leavePartyResponse.statusText}`)
      }

      setActiveParty({})
    } catch (error) {
      console.log("There was an error leaving the Party: ", error)
    }

  }

  useEffect(() => {
    if (activeParty) {
      findMatchedUser()
    }
  }, [activeParty])


  return (
    <Box className="party-info-container">
      <Stack spacing={15} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Typography>{matchedUser?.userName}</Typography>
        <PersonIcon fontSize='large' />
        <Stack direction="row" spacing={7}>
          <Button onClick={leaveParty}><LogoutIcon/></Button>
          <Button><LoopIcon/></Button>
        </Stack>

      </Stack>
      
    </Box>
  )
}

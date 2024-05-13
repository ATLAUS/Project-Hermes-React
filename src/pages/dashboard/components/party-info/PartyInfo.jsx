import { Box, Button, Typography, Stack } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import LoopIcon from '@mui/icons-material/Loop'
import PersonIcon from '@mui/icons-material/Person'
import './PartyInfo.scss'
// Import useContext and the context we created (UserContext)
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../App'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

export const PartyInfo = () => {
  const { user, getAccessTokenSilently } = useAuth0()
  // Destructure the parts of the context we are using
  const { userInfo, activeParty, setActiveParty, setGameData, setMessages } =
    useContext(UserContext)
  const [rematching, setRematching] = useState(false)
  const [leavingParty, setLeavingParty] = useState(false)
  const [matchedUser, setMatchedUser] = useState({})

  const navigate = useNavigate()

  const findMatchedUser = () => {
    

    if (activeParty) {
      const users = activeParty?.Users
      for (const user of users) {
        if (user.id !== userInfo.id) {
          setMatchedUser(user)
        }
      }
    }
  }

  const leaveParty = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: import.meta.env.VITE_AUDIENCE || 'http://localhost:3000/'
        }
      })

      const customUserHeader = {
        'X-User-Info': JSON.stringify({
          email: user.email,
          nickname: user.nickname,
          sub: user.sub
        })
      }

      const leavePartyUrl = import.meta.env.VITE_AUDIENCE
        ? `https://project-hermes.onrender.com/api/parties/leave/${activeParty.id}`
        : `http://localhost:3000/api/parties/leave/${activeParty.id}`

      const leavePartyResponse = await fetch(leavePartyUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          ...customUserHeader
        }
      })
      if (!leavePartyResponse.ok) {
        throw new Error(`Error leaving party: ${leavePartyResponse.statusText}`)
      }

      setActiveParty(null)
      setGameData(null)
      setMessages(null)
    } catch (error) {
      console.log('There was an error leaving the Party: ', error)
    }
  }

  const rematchParty = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: import.meta.env.VITE_AUDIENCE || 'http://localhost:3000/'
        }
      })

      const customUserHeader = {
        'X-User-Info': JSON.stringify({
          email: user.email,
          nickname: user.nickname,
          sub: user.sub
        })
      }

      const rematchPartyUrl = import.meta.env.VITE_AUDIENCE
        ? `https://project-hermes.onrender.com/api/parties/rematch/${activeParty.id}`
        : `http://localhost:3000/api/parties/rematch/${activeParty.id}`

      const rematchPartyResponse = await fetch(rematchPartyUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          ...customUserHeader
        }
      })
      if (!rematchPartyResponse.ok) {
        throw new Error(`Error rematching party: ${rematchPartyResponse.statusText}`)
      }

      const response = await rematchPartyResponse.json()



      response.party ? setActiveParty(response.party) : setActiveParty(null)
      setMessages(null)

    } catch (error) {
      console.log('There was an error rematching the Party: ', error)
    }
  }

  useEffect(() => {
    if (activeParty) {
      findMatchedUser()

    }
  }, [activeParty])

  return (
    <Box className="party-info-container">
      {activeParty ? (
        <Stack
          spacing={5}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography>{matchedUser?.userName}</Typography>
          <PersonIcon fontSize="large" />
          <Stack direction="row" spacing={7}>
            <Button onClick={leaveParty}>
              <LogoutIcon />
            </Button>
            <Button onClick={rematchParty}>
              <LoopIcon />
            </Button>
          </Stack>
        </Stack>
      ) : (
          <Stack spacing={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%'}}>
            <img className='no-party-img' src='https://lh3.googleusercontent.com/gg/ANIJZFExT5UYq0j1TcqrugduoXtmNbhPnuJfTAOFZeZXHGnuSVucqBH1CGXBxX7u3EJEqguft0hSO3t3bfh82fdVY8bnLXCkxKgL9k9GAE6b5R7W6o2CYzbnON8mXq3bH2jb08xxDIDLCFSLImyfMASD3vU689bOIQh8np9nW8RAN7-pXog2CtGiaTNl0nYZrSl2VfYUK_55CouZJl-XFGrC6LJ9oNvPhu4dtcZAZBDk_wKM8dJfuauPT5CoDT3T1KGU4Fj8-DhHpNo1AmQMtBwiet3hyL8Uuvp1-W5HbxpoM7QEUrTbYmohMj2FrDScCq5IBScduE-OGv6YueKpT16XeBmW'/>
            <Typography>Bummer! You're not in a party!</Typography>
            <Button onClick={()=>navigate('/matcher-display')}>Create a Matcher</Button>
          </Stack>
      )}
    </Box>
  )
}

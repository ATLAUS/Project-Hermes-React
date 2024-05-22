import { Box, Typography, Stack, Tooltip } from '@mui/material'
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
          
          <div className='circle' sx={{}}>
            <Typography variant='h1' className='first-letter' sx={{height: "120%"}}>{ matchedUser?.userName && matchedUser?.userName[0]}</Typography>
          </div>
          <Typography variant='h5'>{matchedUser?.userName}</Typography>
          <Stack direction="row" spacing={7}>
              <button className="bttn" onClick={leaveParty} style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "40%"}}>
                Leave
              </button>
              <button  className="bttn" onClick={rematchParty} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                Rematch
              </button>
          </Stack>
        </Stack>
      ) : (
          <Stack spacing={2} sx={{display: "flex", justifyContent: "center", alignItems: "center", width: "80%"}}>
            <Typography>Bummer! You're not in a party!</Typography>
            <button className='bttn' onClick={()=>navigate('/matcher-display')}>Create a Matcher</button>
          </Stack>
      )}
    </Box>
  )
}

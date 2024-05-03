// Removed Typography import to get rid of linter error.
import { Box, Grid } from '@mui/material'
import './Dashboard.scss'
import { Messenger } from './components/messenger/Messenger'
import { GameInfo } from './components/game-info/GameInfo'
import { PartyInfo } from './components/match-info/PartyInfo'
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Dashboard = ({ userInfo, setUserInfo }) => {
  const { user, getAccessTokenSilently } = useAuth0()

  // TODO Evaluate how to move to service file.
  const fetchUser = async () => {
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

      const getUser = 'http://localhost:3000/api/users/user-info'

      const getUserResponse = await fetch(getUser, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          ...customUserHeader
        }
      })

      const response = await getUserResponse.json()

      setUserInfo(response)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  console.log(userInfo.user.Parties)

  return (
    <Grid
      container
      spacing={3}
      className="dashboard-container"
      sx={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}
    >
      <Grid item xs={3} sx={{ height: '80%' }}>
        <GameInfo />
        <PartyInfo />
      </Grid>
      <Grid item xs={6} sx={{ height: '80%' }}>
        <Box
          sx={{ border: 'solid red 1px', borderRadius: '5px', height: '100%' }}
        >
          <Messenger />
        </Box>
      </Grid>
    </Grid>
  )
}

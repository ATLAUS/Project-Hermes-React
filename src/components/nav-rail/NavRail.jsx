import './NavRail.scss'
import { Box, Stack, Tooltip } from '@mui/material'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import AddIcon from '@mui/icons-material/Add'
import HomeIcon from '@mui/icons-material/Home'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { UserContext } from '../../App'
import { useAuth0 } from '@auth0/auth0-react'

export const NavRail = () => {
  const navigate = useNavigate()
  const { activeParty } = useContext(UserContext)
  const { logout } = useAuth0()

  return (
    <Box className="nav-rail">
      <Stack direction="column" spacing={2}>
        <Tooltip title="Home" placement="right" arrow disableInteractive>
          <Box className="nav-icons" onClick={() => navigate('/')}>
            <HomeIcon />
          </Box>
        </Tooltip>
        <Tooltip title="Dashboard" placement="right" arrow disableInteractive>
          <Box className="nav-icons" onClick={() => navigate('/dashboard')}>
            <SpaceDashboardIcon />
          </Box>
        </Tooltip>
        {!activeParty && (
          <Tooltip
            title="Create a Matcher"
            placement="right"
            arrow
            disableInteractive
          >
            <Box
              className="nav-icons"
              onClick={() => navigate('/matcher-display')}
            >
              <AddIcon />
            </Box>
          </Tooltip>
        )}
      </Stack>
      <Stack>
        <Tooltip title="Logout" placement="right" arrow disableInteractive>
          <Box
            className="nav-icons"
            onClick={() => {
              sessionStorage.clear()
              logout({ logoutParams: { returnTo: window.location.origin } })
            }}
          >
            <LogoutIcon />
          </Box>
        </Tooltip>
      </Stack>
    </Box>
  )
}

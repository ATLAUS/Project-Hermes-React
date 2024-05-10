import { Box } from '@mui/material'
import { Stack, TextField, Button, MenuItem } from '@mui/material'
import { useState } from 'react'
import './MatcherForm.scss'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

const platforms = [
  { value: 'PS5', label: 'PS5' },
  { value: 'Xbox Series X', label: 'Xbox Series X' },
  { value: 'Nintendo Switch', label: 'Nintendo Switch' },
  { value: 'PC', label: 'PC' }
]

const gamenames = [
  'EAFC',
  'Call of Duty',
  'Apex Legends',
  'Escape from Tarkov',
  'Rainbow Six Siege',
  'Grey Zone Warfare',
  'Helldivers 2',
  'Palworld',
  'Rust',
  'Counter-Strike 2',
  'Dota 2',
  'League of Legends',
  'PUBG: BattleGrounds',
  'GTA V',
  "Baldur's Gate 3"
]

export const MatcherForm = () => {
  const navigate = useNavigate()
  const { user, getAccessTokenSilently } = useAuth0()

  const [gameName, setGameName] = useState('')
  const [platform, setPlatform] = useState('')
  const [objective, setObjective] = useState('')
  const [note, setNote] = useState('')

  async function submitHandler(e) {
    e.preventDefault()

    const newMatcher = {
      gameName,
      platform,
      objective,
      note
    }

    try {
      // Get access token for ATLAUS backend.
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: import.meta.env.VITE_AUDIENCE || 'http://localhost:3000/'
        }
      })

      // Construct custom header, to pass user information.
      const customHeader = {
        'X-User-Info': JSON.stringify({
          email: user.email,
          nickname: user.nickname,
          sub: user.sub
        })
      }

      const postMatcher = import.meta.env.VITE_AUDIENCE
        ? 'https://project-hermes.onrender.com/api/matchers'
        : `http://localhost:3000/api/matchers`
      // Create Matcher request.
      const postMatcherForm = await fetch(postMatcher, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          ...customHeader
        },
        body: JSON.stringify({ matcher: newMatcher })
      })

      // If a party is returned. Save that party in local storage.
      const response = await postMatcherForm.json()
    } catch (err) {
      console.log('error', err)
    }

    navigate('/dashboard')
  }

  return (
    <Box className="matcher-form-container">
      <h2>Project Hermes Matcher Form</h2>
      <h3>Please reach out to us if you have any questions!</h3>
      <form onSubmit={submitHandler}>
        <Stack spacing={2}>
          <TextField
            type="text"
            variant="outlined"
            label="Game Name"
            InputProps={{ style: { color: 'white' } }}
            select
            fullWidth
            required
            focused
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
          >
            {gamenames.map((gamename) => (
              <MenuItem key={gamename} value={gamename}>
                {gamename}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            type="text"
            variant="outlined"
            label="Platform"
            InputProps={{ style: { color: 'white' } }}
            select
            fullWidth
            required
            focused
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            {platforms.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            type="text"
            variant="outlined"
            label="Objective"
            InputProps={{ style: { color: 'white' } }}
            fullWidth
            focused
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
          />
          <TextField
            type="text"
            variant="outlined"
            label="Note"
            InputProps={{ style: { color: 'white' } }}
            multiline
            fullWidth
            focused
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <Button type="submit" variant="text">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  )
}

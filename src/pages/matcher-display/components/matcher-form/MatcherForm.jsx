import { Box, Typography } from '@mui/material'
import { Stack, TextField, Button, MenuItem} from '@mui/material'
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

const classes = {
    textField: {
        "& .MuiOutlinedInput-root": {
            "fieldset.MuiOutlinedInput-notchedOutline" : {
                borderColor: "white"
            },
            "&:hover .MuiOutlinedInput-notchedOutline" : {
                borderColor: "#4285f4"
            },
            "&:placeholder .MuiOutlinedInput-notchedOutline" : {
                color: "white"
            }
        }
    }
}

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
      if (!response.party) {
        sessionStorage.setItem('isMatching', 'true')
      } else {
        sessionStorage.setItem('isMatching', 'false')
      }
    } catch (err) {
      console.log('error', err)
    }


    navigate('/dashboard')
  }

  return (
    <Box className="matcher-form-container">
      <Box className="matcher-form-inner-container">
        <div className='form-components'>
          <Typography fontSize={24}>MATCHER REQUEST FORM</Typography>
        </div>
        <form className="form-components" onSubmit={submitHandler}>
          <Stack spacing={6}>
            <TextField
              type="text"
              variant="outlined"
              label="Game Name"
              InputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' }}}
              select
              required
              sx={classes.textField}
              //className='animated-border'
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
              InputProps={{ style: { color: 'white'} }}
              InputLabelProps={{ style: { color: 'white' }}}
              select
              required
              sx={classes.textField}
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
              InputLabelProps={{ style: { color: 'white' }}}
              autoComplete='off'
              sx={classes.textField}
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
            />
            <TextField
              type="text"
              variant="outlined"
              label="Note"
              InputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' }}}
              multiline
              rows={4}
              sx={classes.textField}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <Stack direction='row' spacing={2}>
              <button className='bttn' onClick={()=>navigate('/dashboard')}>
                Cancel
              </button>
              <button type="submit" className="bttn">
                Submit
              </button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Box>
  )
}

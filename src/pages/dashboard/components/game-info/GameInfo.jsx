import { Box, CardMedia, Stack, Typography } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public';
import EventIcon from '@mui/icons-material/Event';
import StarIcon from '@mui/icons-material/Star';
import './GameInfo.scss'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../../../App'

export const GameInfo = () => {
  const { activeParty, gameData, setGameData, isMatching, setIsMatching } = useContext(UserContext)

  const gameName = activeParty?.gameName

  const toKebabCase = (str) => {
    if (!str) return str // Handle empty string case
    return str
      .trim() // Remove leading/trailing spaces
      .replace(/\s+/g, '-') // Replace whitespace with hyphen
      .replace(/([A-Z])/g, (match) => `${match.toLowerCase()}`) // Change all occurances of Uppercase letters to LowerCase
      .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
  }

  const slug = toKebabCase(gameName)
  const rawgApiKey = `https://api.rawg.io/api/games/${slug}?key=1f7270ecb8b7476cbe8a7c26c2aedb09`

  const fetchGameData = async () => {
    try {
      if (!gameName == '') {
        const res = await fetch(rawgApiKey)
        const data = await res.json()
        setGameData(data)
      }
    } catch (error) {
      console.log('There was an error fetching Game Data', error)
    }
  }

  const fetchSessionStorage = () => {
    const data = sessionStorage.getItem('isMatching')
    data == "true"  ? setIsMatching(true) : setIsMatching(false)
  }

  useEffect(() => {
    fetchGameData()

    fetchSessionStorage()
    

  }, [gameName])

  return (
    <Box className="game-info-container">
      {gameData && !isMatching ? (
        <>
          <CardMedia
            sx={{ height: 150, borderRadius: '15px 15px 0px 0px' }}
            image={gameData?.background_image}
            alt={`${gameName} Background image`}
          ></CardMedia>
          <Stack spacing={3}className="game-data-container">
            <Typography variant='h5' component='h1'>{gameName && gameName}</Typography>
            { gameData.website && (
              <div className="game-data-row">
                <PublicIcon sx={{paddingRight: '10px'}} />
                {gameData.website && <p><a href={gameData.website} target='_blank'>Website</a></p>}
              </div>
            )}
            { gameData.released && (
              <div className='game-data-row'>
                <EventIcon sx={{paddingRight: '10px'}} />
                <Typography>
                  {gameData.released && `Release Date: ${gameData.released}`}
                </Typography>
              </div>
            )}
            { gameData.rating && (
              <div className='game-data-row'>
                <StarIcon sx={{paddingRight: '10px'}} />
                <Typography>{gameData.rating && `Rating: ${gameData.rating}`}</Typography>
              </div>
            )}
          </Stack>
        </>
      ) : (
        <></>
      )}

      {isMatching && (
          <Stack spacing={1} sx={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
            <Typography>Searching for a party...</Typography>
            <Typography>To check for a match,</Typography>
            <Typography>Please refresh the page</Typography>
            <button className="bttn" onClick={()=>window.location.reload()}>Refresh</button>
          </Stack>
      )
      }
    </Box>
  )
}

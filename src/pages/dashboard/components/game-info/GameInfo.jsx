import { Box, Card, CardMedia, Typography } from '@mui/material'
import './GameInfo.scss'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../App'

export const GameInfo = () => {
  const { activeParty, gameData, setGameData } = useContext(UserContext)

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

  useEffect(() => {
    fetchGameData()
  }, [gameName])

  return (
    <Box className="game-info-container">
      {gameData ? (
        <>
          <Typography>{gameName && gameName}</Typography>
          <CardMedia
            sx={{ height: 150 }}
            image={gameData?.background_image}
          ></CardMedia>
          <Typography>
            {gameData.website && `Website: ${gameData.website}`}
          </Typography>
          <Typography>
            {gameData.released && `Release Date: ${gameData.released}`}
          </Typography>
        </>
      ) : (
        <></>
      )}
    </Box>
  )
}

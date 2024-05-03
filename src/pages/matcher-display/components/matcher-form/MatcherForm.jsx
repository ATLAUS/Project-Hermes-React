import { Box, Typography } from '@mui/material'
import { Stack, TextField, Button, MenuItem, FormControl } from '@mui/material'
import { useState } from 'react'
import './MatcherForm.scss'
import { useAuth0 } from '@auth0/auth0-react';

const platforms = [
    { value: "PS5", label: "PS5" },
    { value: "Xbox Series X", label: "Xbox Series X" },
    { value: "Nintendo Switch", label: "Nintendo Switch" },
    { value: "PC", label: "PC" }
];

export const MatcherForm = () => {

    const { user, getAccessTokenSilently } = useAuth0();

    

    const [gameName, setGameName] = useState("")
    const [platform, setPlatform] = useState("")
    const [objective, setObjective] = useState("")
    const [note, setNote] = useState("")

    async function submitHandler(e) {

        e.preventDefault();
        console.log("clicked")

        const newMatcher = {
            gameName,
            platform,
            objective,
            note
        }
    
        try {
            // Get access token for Atlus backend
            const accessToken = await getAccessTokenSilently({
                authorizationParams: {
                    audience: "http://localhost:3000/"
                }
            })

            // Construct custom header, to pass user information 
            const customHeader = {
                "X-User-Info": JSON.stringify({
                    email: user.email,
                    nickname: user.nickname,
                    sub: user.sub,
                })
            }

            // Create Matcher Requsest 
            const postMatcherForm = await fetch(`http://localhost:3000/api/matchers`, {
                method: "POST",
                headers: {"Content-Type": "application/json", Authorization: `Bearer ${accessToken}`, ...customHeader},
                body: JSON.stringify({matcher: newMatcher})
            })

            const response = await postMatcherForm.json()

            console.log(response)
        } catch(err) {
            console.log("error", err)
        }

        alert("form submitted")
    }


    return(
        <Box className = "matcher-form-container">
            <h2>Project Hermes Matcher Form</h2>
            <h3>Please reach out to us if you have any questions!</h3>
            <form onSubmit={submitHandler}>
                <Stack spacing={2}>
                    <TextField
                        type = "text"
                        variant = "outlined"
                        label = "Game Name"
                        InputProps={{style: {color: "white"}}}
                        fullWidth
                        required
                        focused
                        value = {gameName}
                        onChange={(e) => setGameName(e.target.value)}
                    />
                    <TextField
                        type = "text"
                        variant = "outlined"
                        label = "Platform"
                        InputProps={{style: {color: "white"}}}
                        select
                        fullWidth
                        required
                        focused
                        value = {platform}
                        onChange={(e) => setPlatform(e.target.value)}
                    >
                        {platforms.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        type = "text"
                        variant = "outlined"
                        label = "Objective"
                        InputProps={{style: {color: "white"}}}
                        fullWidth
                        focused
                        value = {objective}
                        onChange={(e) => setObjective(e.target.value)}
                    />
                    <TextField
                        type = "text"
                        variant = "outlined"
                        label = "Note"
                        InputProps={{style: {color: "white"}}}
                        multiline
                        fullWidth
                        focused
                        value = {note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                    <Button type="submit" variant = "text">Submit</Button>
                </Stack>
            </form>
        </Box>
    )
}
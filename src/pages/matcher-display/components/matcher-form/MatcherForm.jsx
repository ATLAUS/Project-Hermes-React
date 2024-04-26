import { Box, Typography } from '@mui/material'
import { Stack, TextField, Button } from '@mui/material'
import './MatcherForm.scss'

export const MatcherForm = () => {
    return(
        <Box className = "matcher-form-container">
            <h2>Project Hermes Matcher Form</h2>
            <h3>Please reach out to us if you have any questions!</h3>
            <Stack spacing={2}>
                <TextField
                    type = "text"
                    variant = "outlined"
                    color = "secondary"
                    label = "Game"
                    fullWidth
                    required
                    focused
                />
                <TextField
                    type = "text"
                    variant = "outlined"
                    label = "Platform"
                    fullWidth
                    required
                    focused
                />
                <TextField
                    type = "text"
                    variant = "outlined"
                    label = "Objective"
                    fullWidth
                    focused
                />
                <TextField
                    type = "text"
                    variant = "outlined"
                    label = "Note"
                    fullWidth
                    focused
                />
                <Button variant = "text">Submit</Button>
            </Stack>
        </Box>
    )
}
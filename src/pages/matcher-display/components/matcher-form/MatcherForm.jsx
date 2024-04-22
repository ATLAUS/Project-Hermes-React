import { Box, Typography } from '@mui/material'
import { Stack, TextField, Button } from '@mui/material'
import './MatcherForm.scss'

export const MatcherForm = () => {
    return(
        <Box className = "matcher-form-container">
            <Stack spacing={2}>
                <TextField
                    type = "text"
                    variant = "outlined"
                    label = "Game"
                    fullWidth
                    required
                />
                <TextField
                    type = "text"
                    variant = "outlined"
                    label = "Platform"
                    fullWidth
                    required
                />
                <TextField
                    type = "text"
                    variant = "outlined"
                    label = "Objective"
                    fullWidth
                />
                <TextField
                    type = "text"
                    variant = "outlined"
                    label = "Note"
                    fullWidth
                />
                <Button variant = "text">Submit</Button>
            </Stack>
        </Box>
    )
}
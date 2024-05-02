import { Box, Typography } from '@mui/material'
import { Stack, TextField, Button, MenuItem } from '@mui/material'
import './MatcherForm.scss'

const platforms = [
    { value: "PS5", label: "PS5" },
    { value: "Xbox Series X", label: "Xbox Series X" },
    { value: "Nintendo Switch", label: "Nintendo Switch" },
    { value: "PC", label: "PC" }
];

export const MatcherForm = () => {
    return(
        <Box className = "matcher-form-container">
            <h2>Project Hermes Matcher Form</h2>
            <h3>Please reach out to us if you have any questions!</h3>
            <Stack spacing={2}>
                <TextField
                    type = "text"
                    variant = "outlined"
                    label = "Game"
                    InputProps={{style: {color: "white"}}}
                    fullWidth
                    required
                    focused
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
                />
                <TextField
                    type = "text"
                    variant = "outlined"
                    label = "Note"
                    InputProps={{style: {color: "white"}}}
                    multiline
                    fullWidth
                    focused
                />
                <Button variant = "text">Submit</Button>
            </Stack>
        </Box>
    )
}
import React, { useState } from 'react';
import { Box, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import './App.css'
import axios from 'axios';

function App() {

  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
  try {
    const response = await axios.post("http://localhost:8080/api/email/generate", {
      emailContent,
      tone
  });
  setGeneratedReply(typeof response.data === "string" ? response.data : JSON.stringify(response.data));
  } catch (error) {
    setError("An error occurred while generating the reply. Please try again.");
    console.error("Error generating reply:", error);
  } finally {
    setLoading(false);
  }
  };

  return (
    <Box className="appRoot">
     <Container maxWidth="md" className="appCard">
      <Typography className="appTitle" variant='h3' component="h1" gutterBottom>Email Reply Generator</Typography>

      <Box sx={{mx: 0}}>
        <TextField fullWidth
        multiline
        rows={6}
        variant='outlined'
        label="Original Email Content"
        value={emailContent || ''}
        onChange={(e) => setEmailContent(e.target.value)}
        sx={{mb: 2}}
        />

        <FormControl fullWidth sx={{mb: 2}}>
          <InputLabel>Tone  (Optional)</InputLabel>
          <Select
          value={tone || ''}
          label={"Tone  (Optional)"}
          onChange={(e) => setTone(e.target.value)}>
            <MenuItem value="">None</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
          </Select>
        </FormControl>


        <Button
          variant='contained'
          onClick={handleSubmit}
          disabled={!emailContent || loading}
          fullWidth
        >
          {loading ? <CircularProgress size={24}/> : "Generate Reply"}
        </Button>
      </Box>


      {error && (
        <Typography color='error' sx={{ mb:2 }} component="h1" gutterBottom>
          {error}
        </Typography>
      )}

      {generatedReply && (
        <Box sx={{ mt:3 }}>
          <Typography variant='h6' gutterBottom>
            Generated Reply:
          </Typography>
          <TextField 
          fullWidth
          multiline
          rows={6}
          variant='outlined'
          value={generatedReply || ''}
          InputProps={{
            readOnly: true,
          }}
          />

          <Button
          variant='outlined'
          sx={{ mt:2 }}
          onClick={() => navigator.clipboard.writeText(generatedReply)}
          >
            Copy to Clipboard
          </Button>
        </Box>
      )}
     </Container>
    </Box>
  )
}

export default App

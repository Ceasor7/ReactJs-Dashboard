import React, { useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import Header from '../../components/Header';

const UploadForm = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    setFiles([...files, ...fileList]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the files here
    console.log(files);
    setFiles([]);
  };

  return (
    <Box m="20px">
      <Header title="FILES" subtitle="Upload and view your files here" />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="File Name"
              name="fileName"
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              accept=".doc,.docx,.pdf,.png,.jpg,.jpeg"
              id="file-upload"
              onChange={handleFileChange}
              multiple
            />
            <label htmlFor="file-upload">
              <Button variant="contained" component="span">
                Choose Files
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            {files.map((file) => (
              <Box key={file.name}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Selected File"
                  value={file.name}
                  disabled
                />
              </Box>
            ))}
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={files.length === 0}
            >
              Upload Files
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
export default UploadForm;

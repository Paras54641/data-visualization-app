import React, { useEffect, useState } from 'react';
import FilterComponent from './components/FilterComponent';
import ChartComponent from './components/ChartComponent';
import axios from 'axios';
import { Container, Grid, Paper, AppBar, Toolbar, Typography } from '@mui/material';

const App = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ endYear: '', topic: '', sector: '', region: '', PEST: '', source: '', SWOT: '', country: '', city: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/data', { params: filters })
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, [filters]);

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Data Visualization Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <FilterComponent filters={filters} setFilters={setFilters} />
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <ChartComponent data={data} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;



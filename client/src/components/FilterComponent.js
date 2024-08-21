import React from 'react';
import { TextField, Grid } from '@mui/material';

const FilterComponent = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <Grid container spacing={2} style={{ marginTop: '20px' }}>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="End Year"
          name="endYear"
          value={filters.endYear}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="Topic"
          name="topic"
          value={filters.topic}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="Sector"
          name="sector"
          value={filters.sector}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="Region"
          name="region"
          value={filters.region}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="PEST"
          name="PEST"
          value={filters.PEST}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="Source"
          name="source"
          value={filters.source}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="SWOT"
          name="SWOT"
          value={filters.SWOT}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="Country"
          name="country"
          value={filters.country}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="City"
          name="city"
          value={filters.city}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default FilterComponent;

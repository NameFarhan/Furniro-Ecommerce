import { Button, Typography } from '@mui/material';
import React from 'react';
import AllProducts from './Products/AllProducts';

const OurPro = () => {
  return (
    <>
      <Typography 
        sx={{
          fontSize: { xs: '24px', sm: '30px', md: '40px' },
          marginBottom: '32px',
          textAlign: 'center',
          fontWeight: '900',
          color: '#3A3A3A',
          marginTop: { xs: '24px', sm: '32px', md: '56px' },
        }}
      >
        Our Products
      </Typography>
      <AllProducts />
      <Button 
        sx={{
          width: { xs: '100%', sm: '245px' }, // Full width on extra small screens, fixed width on small screens and up
          fontSize: { xs: '14px', sm: '16px' }, // Adjust font size for different screen sizes
          fontWeight: '600',
          textTransform: 'none',
          height: '48px',
          border: '1px solid #B88E2F',
          color: '#B88E2F',
          position: 'relative',
          top: '25px',
          display: 'block',
          margin: 'auto',
          '&:hover': {
            border: '1px solid #B88E2F',
          },
          // Add responsive margin if needed
          marginTop: { xs: '16px', sm: '20px', md: '25px' },
        }} 
        variant='outlined'
      >
        Show More
      </Button>
    </>
  );
};

export default OurPro;

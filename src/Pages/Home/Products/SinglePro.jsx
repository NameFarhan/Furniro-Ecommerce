import { Box, Button, Grid, Typography } from "@mui/material";
import IconCheckboxes from "../../../muiComponents/Love";

const SinglePro = ({ data, truncateText }) => {
  return (
    <Box sx={{ padding: { xs: '0 10px', sm: '0 20px', md: '0 30px' } }}>
      <Grid container spacing={3}>
        {data.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} sx={{ position: 'relative', overflow: 'hidden' }}>
            <Box
              sx={{
                height: 'auto',
                margin: '20px 0',
                position: 'relative',
                '&:hover .overlay': {
                  opacity: 1,
                },
              }}
            >
              {/* image box */}
              <Box sx={{ 
                height: { xs: '200px', sm: '250px', md: '301px' }, 
                overflow: 'hidden', 
                position: 'relative'
              }}>
                <Box
                  component="img"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block', // Ensures no extra space below the image
                    '@media (max-width:600px)': {
                      height: '150px', // Adjust height for extra small screens
                    },
                    '@media (max-width:400px)': {
                      height: '120px', // Further adjust height for very small screens
                    },
                  }}
                  alt={product.title}
                  src={product.image}
                />
              </Box>
              {/* product details */}
              <Box sx={{ 
                backgroundColor: '#F4F5F7', 
                marginTop: '16px', 
                padding: '0px 10px',
                height: { xs: '120px', sm: '145px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <Typography sx={{
                  color: '#3A3A3A',
                  textAlign: 'center',
                  fontSize: { xs: '16px', sm: '18px', md: '24px' },
                  fontWeight: '700',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {truncateText(product.title, 3)} {/* Truncate the title to 3 words */}
                </Typography>
                <Typography sx={{
                  color: '#898989',
                  margin: '8px 0',
                  textAlign: 'center',
                  fontSize: { xs: '14px', sm: '16px' },
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {truncateText(product.description, 4)} {/* Truncate the description to 4 words */}
                </Typography>
                <Typography sx={{
                  color: '#3A3A3A',
                  textAlign: 'center',
                  fontSize: { xs: '16px', sm: '18px', md: '20px' },
                  fontWeight: '700',
                }}>
                  Rp {product.price}
                </Typography>
              </Box>
              {/* overlay */}
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '18px',
                  fontWeight: 'bold',
                }}
              >
                <Button sx={{
                  borderRadius: '0',
                  boxShadow: '0',
                  backgroundColor: '#fff',
                  color: '#B88E2F',
                  fontSize: '16px',
                  fontWeight: '600',
                  width: '202px',
                  textTransform:'none',
                  height: '48px',
                  '&:hover': {
                    backgroundColor: '#fff',
                    boxShadow: '0'
                  }
                }} variant="contained">Add to cart</Button>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                  <IconCheckboxes />
                  <Typography sx={{ color: '#fff', marginLeft: '4px' }}>Like</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SinglePro;

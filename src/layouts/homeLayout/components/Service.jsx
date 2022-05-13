import React from 'react';
import { Grid, Typography, Box,Avatar,Container } from '@mui/material';
import soldIcon from "../assets/img/soldIcon.svg";
import connectIcon from "../assets/img/connectIcon.svg";
import userIcon from "../assets/img/userIcon.svg"
import useStyles from './styles';

function Service() {

    const classes = useStyles();

    return (
      <Box className={classes.statisticBox} sx={{ flexGrow: 1, minHeight: '400px' }}>
        <Grid container justifyContent="center">
          <Typography variant="h2" className={classes.statisticTitle}>
              Services
              <Box className={classes.statisticUnderline}></Box>

              {/* <Box> Providing our customers with quality is our top priority. Our services are listed below.</Box> */}
          </Typography>
        </Grid>
  
        <Box  
        //  position="fixed" width={"100%"} bottom={0}
            px={{xs: 3,sm: 10}}
            py={{xs: 5,sm: 10}}
           color="white" >
            <Container maxWidth="lg" >
              <Grid   container spacing={7} justifyContent="center">
                  <Grid className={classes.heroGridItem} item xs={12} sm={3}>
                      <Avatar src={userIcon} className={classes.heroAvatar} />
                      <Typography >Connect Property owners to clients</Typography>
  
                    </Grid>
  
                    <Grid item xs={12} sm={3}>
                      <Avatar src={soldIcon} />  
                        <Typography >Providing mulitple leaseable properties around the city for clients</Typography>
                    </Grid>
  
                    <Grid className={classes.heroGridItem} item xs={12} sm={3}>
                      <Avatar src={connectIcon} />   
                      <Typography >Providing agents roles and consultancy</Typography>                
                    </Grid>
                  
                    <Grid className={classes.heroGridItem} item xs={12} sm={3}>
                      <Avatar src={connectIcon} />   
                      <Typography >Connect agents with clients</Typography>                
                    </Grid>

              </Grid>
             
            </Container>
          </Box>
  
  
      </Box>
    );
}

export default Service
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import React from 'react';

const useStyles = makeStyles({
    root:{
        margin:"4rem auto 0 auto",
  
    },

    image:{
        width:"100%",
    },
    image_div:{
      marginTop:"4rem",
      marginBottom:"4rem"
    },
    content_div:{
        width:"80% !important",
        margin:"0 auto"
        
    }
   });

 const About = () =>{
     const classes=useStyles();

    return (
        <div className={classes.root}>
        <Typography variant='h1' align="center">
            About Us
        </Typography>
        <div className={classes.image_div}>
        <img src="./about_us.png"  className={classes.image}/>
        </div>
         
         <div className={classes.content_div}  >
        <Typography variant="h4"  className={classes.content} >
        Our mission is to connect both seasoned collectors and first-time buyers to Indian artists, developing greater appreciation and support for original Indian art not only within the San Francisco Bay Area but also in other cities like Los Angeles, San Diego, Austin, Boston and Washington DC.
        <br></br><br></br>
        In an effort to make Indian art more widely accessible, we provide expert guidance to our collectors throughout the buying process. Clients may visit our gallery by appointment to learn more about contemporary and modern Indian art. They can view original paintings and prints by distinguished artists such as S.H. Raza, Thota Vaikuntam, Seema Kohli, Ramesh Gorjala, Sujata Achrekar, Jagannath Paul and Nishant Dange among others. Through our wide range of services offered at Laasya Art, you may also buy Indian art online, source paintings from India or commission art by your favorite artist. We are completely committed to providing our clients with an informative, low-pressure and enjoyable experience.
        <br></br><br></br>
        </Typography>
        </div>
        </div>
    )
}

export default About
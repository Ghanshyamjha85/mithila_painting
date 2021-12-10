import React from 'react';
import { Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
 root:{
     margin:"5rem auto 0 auto",
     textAlign:"left",
     width:"80%"
 },
 details : {
     color: 'gray'
 }
});
const HomeContent = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant="h2" align="center"> Madhubani Painting (Mithila Painting)</Typography>
            <br></br><br></br>
            <Typography variant="h4" className={classes.details}>
            Madhubani art, also known as Mithila art, is a rich tradition of domestic ritual painting that takes its name from the region in northern Bihar where it began and continues to thrive. Historically, women made Madhubani paintings on the freshly plastered walls and floors of mud huts. These skills and techniques were passed down for centuries, preserving Madhubani’s unique qualities, and today both men and women paint in this style onto cloth, handmade paper and canvas.
            <br></br><br></br>
            Madhubani paintings typically depict nature, social themes and Hindu deities. The sun, moon and religious plants like tulsi are common elements, as are scenes from ancient epics and daily life, including the royal court and weddings. Animals like peacocks, fish, crocodiles and elephants also frequently appear in Madhubani art.
            <br></br><br></br>
            Madhubani artists make their paints and brushes from locally available materials. The handmade paper is treated with cow dung, which helps maintain the strong color of the natural pigments. Charcoal is mixed with water to outline the images, and crushed flowers and plants are mixed with powdered rice to make colorful pastes. No space remains empty on a Madhubani work—gaps are delicately filled in with flowers, animals, birds and geometric designs.
            <br></br><br></br>
            Available at  is a carefully selected collection of original Madhubani (Mithila) paintings by internationally recognized artists, including National Award recipients. Some are mentees of Smt. Jagadamba Devi, who won the Padma Shri in 2011 and was the first Mithila-born artist to receive the National Award for Madhubani painting in 1982. These artists have exhibited their paintings throughout Europe and the US.
            <br></br><br></br>
            You are welcome to buy Madhubani (Mithila) paintings online or view them at our gallery in Palo Alto (San Francisco Bay Area). All artworks include a certificate of authenticity.
            <br></br>
            </Typography>
        </div>
    )
}

export default HomeContent

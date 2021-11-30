import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import WriterDetails from "./WriterDetails"
import Reviews from './Reviews'
import Paintings from '../db.json'


const useStyles = makeStyles({
    main: {
      
       width:"80%",
       margin:"auto"

    },
    // img: {
    //     width: '100%',
    //     height:"60rem"
    // },
    content : {
        margin : "2rem",
        align:"center !important"
    }, 
    desc : {
        padding: "3rem 0",
        fontFamily: "Poppins !important"
    },
    heading:{
       
    }
})


function Details() {

    const params = useParams()

    const id = params.id

    const painting = Paintings.filter( painting => painting.id == id)[0]

    const { imageUrl, paintingName, artistName, comments, desc } = painting
    const classes = useStyles()

    return (
        <div className={classes.main}>
           
            <div className={classes.content} >
                <Typography variant='h1' component='h1' className="heading" className={classes.heading} align="center">
                    {paintingName}
                </Typography>
                <Typography variant='h4' component='h4' className={classes.desc} >
                        {desc}
                </Typography>
                <WriterDetails />
                <Reviews comments = {painting.comments} />
            </div>
        </div>
    )
}

export default Details
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({

    image:{
       
        height:"59rem"
    },
    root:{
        margintop:"2.4rem"
    }

});

const data=[
    {
        images:"./carousel/banner0.jpg"
    },
    {
        images:"./carousel/banner1.jpg"
    },

    {
        images:"./carousel/banner2.jpg"
    },

    {
        images:"./carousel/banner3.jpg"
    },

    {
        images:"./carousel/banner4.jpg"
    },
    {
        images:"./carousel/banner5.jpg"
    },

    {
        images:"./carousel/banner6.jpg"
    },

    {
        images:"./carousel/banner7.jpg"
    },
    {
        images:"./carousel/banner8.jpg"
    },
    {
        images:"./carousel/banner9.jpg"
    },
];

const HomeCarousel = () => {
   

   
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };


    const classes = useStyles();

    return (
        <div>


            <Carousel
                swipeable={false}
                showDots={true}
                arrows={true}
                responsive={responsive}
             //   ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay
                autoPlaySpeed={5000}
                keyBoardControl={true}
               
               // transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
              //  deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                renderDotsOutside
                customDot={<customDot />}
                className={classes.root}
            >
              {
                data.map((element)=>(
                    <div>
                           <img src={element.images} className={classes.image}/>
                    </div>
                ))
              }
            </Carousel>
        </div>
    )
}

export default HomeCarousel;

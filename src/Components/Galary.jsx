import Card from './Cards'

import paintings from '../db.json';
import { Typography } from '@mui/material';

function Galary() {

  const classes = {
    main: {
      padding: '0 2rem'
    },

    head:{
      margin:"3rem auto",
    
    }

  }
  
  return (

     <div className="App">
         <div style={classes.head}><Typography  variant="h1" align="center"> Our Collections</Typography></div>
       {paintings.map(painting => {
        return (
          <div style={classes.main} >
          < Card
            id={painting.id}
            painting={painting}
          />
          </div>
        )
      })}   
    </div>
  );
}

export default Galary;

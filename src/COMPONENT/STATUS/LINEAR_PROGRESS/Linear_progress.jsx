import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


function LinearProgressWithLabel(props) {
 
const Theme=createMuiTheme({
                palette: {
                  secondary: {
                    main: '#fff',
                  },
                  primary:{
                      main:'#2d9cfc'
                  },
                },
              })
        

  return (
    <Box display="flex" alignItems="center" justifyContent='space-between'>
     <ThemeProvider theme={Theme}> 
      <Box minWidth={35}>    
         <Typography variant='caption'color='secondary'>{props.caption}</Typography>
      </Box>  
      
      <Box width="40%" mr={1}>
        <LinearProgress variant="determinate" color='primary'{...props}/>
      </Box>
      </ThemeProvider> 

    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LinearWithValueLabel({value ,caption}) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress = value ? value : prevProgress + 5));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, [value]);

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} caption={caption}/>
    </div>
  );
}

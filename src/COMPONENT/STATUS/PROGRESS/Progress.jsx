import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {createMuiTheme,ThemeProvider} from '@material-ui/core'


const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#fff',  
      },
      secondary: {
        main: "#2d9cfc"
      },
      
    }
  });

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
     <ThemeProvider theme={theme}> 
      <CircularProgress variant="determinate"{...props} />
     </ThemeProvider>   
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic(props) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= props.val ? props.val : prevProgress + 1));
    }, 40);
    return () => {
      clearInterval(timer);
    };
  }, [props.val]);

  return <CircularProgressWithLabel value={progress}/>;
}

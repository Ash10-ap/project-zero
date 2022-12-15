import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {images} from './img';
import './App.css';
import CarouselProduct from './CarouselProduct';
import { pimg } from './productimg';
import Footer from './Footer';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function App() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <>
    <Box sx={{ maxWidth:'100vw', flexGrow: 1,display:'flex',flexWrap:'wrap' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  maxHeight: 500,
                  display: 'block',
                  minWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
    <hr color='gray'></hr>
    <h3>Discount</h3>
    <hr color='blue'></hr>
    <Box sx={{ maxWidth: '100vw', flexGrow: 1,mt:10,m:5 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  maxHeight: 250,
                  display: 'block',
                  minWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
    <hr color='gray'></hr>
    <h3>Latest Products</h3>
    <hr color='blue'></hr>
    <div  style={{padding:"5px",display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
      {pimg.map(val=>{
            return(
              <div key={val.id}>
                <CarouselProduct 
                  name={val.name}
                  img={val.img}
                  price={val.price}
                  des={val.des}
                />
              </div>
            )
      })}
    </div>
    <div style={{paddingTop:'50px'}}>
      <Footer/>
    </div>
    </>
  )
}

export default App
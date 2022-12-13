import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function CarouselProduct(props) {
  return (
    <Card sx={{ maxWidth: 250,height:380,minWidth:230 }}>
      <CardActionArea>
        <CardMedia sx={{width:'fitContent',borderRadius: '15px',fit:'crop' }}
          component="img"
          height="280"
          image={props.img}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.name}
          </Typography>
          <Typography sx={{fontSize:'14px',fontWeight: 'bold'}}>
            Rs.{props.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.des}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CarouselProduct

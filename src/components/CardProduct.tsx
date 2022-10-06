import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 ,width: "100%"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={require('../img/bee.jpg')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tool
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description tool
          </Typography>
          <Typography component="div" variant="h6" color="#424242">
            $price
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Detalle
        </Button>
      </CardActions>
    </Card>
  );
}

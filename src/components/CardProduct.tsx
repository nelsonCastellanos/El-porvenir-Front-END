import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {imgModel} from '../models/imageModel'


type DonutChartModel = {
  name: string;
  price: string;
  description: string;
  img?: imgModel;
};

export default function MultiActionAreaCard({name,price,description,img}: DonutChartModel) {
 
  return (
    <Card sx={{ maxWidth: 345 ,width: "100%",minHeight:370}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={img?.full_url||""}
          alt={img?.alt||""}
        />
        <CardContent>
          <Typography minHeight="64px" gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography component="div" variant="h6" color="#424242">
            ${price}
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

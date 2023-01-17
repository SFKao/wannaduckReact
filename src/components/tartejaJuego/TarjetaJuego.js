import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import { NavLink } from 'react-router-dom';

const TarjetaJuego = (props) => {
    return (
        <Card sx={{ maxWidth: 250 }}>
          <NavLink to={`game/${props.slug}`} style={{ textDecoration: 'none' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image={props.backgroundImage}
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{color:'primary.contrastText'}}>
                  {props.name}
                </Typography>
                <Rating name="half-rating-read" defaultValue={props.rating} precision={0.5} readOnly />
              </CardContent>
            </CardActionArea>
          </NavLink>
          <CardActions>
            <Button size="small" color="primary">
              <FavoriteIcon/>
            </Button>
          </CardActions>
        </Card>
      );
}

export default TarjetaJuego
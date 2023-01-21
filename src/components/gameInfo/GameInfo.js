import React from "react";
import { useParams } from "react-router-dom";
import jsonDePrueba from "../../assets/jsonDePrueba.json";
import { Grid, Typography, CardMedia, Rating, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const GameInfo = () => {
  const { game } = useParams();
  let juego = jsonDePrueba.results.filter((obj) => {
    return obj.slug === game;
  })[0];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          <CardMedia
            component="img"
            height="600"
            image={juego.background_image}
          />
        </Grid>
        <Grid item sm={4} xs={12} justifyContent="center">
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={{ color: "primary.main" }}
            justifyContent="center"
            marginTop={5}
          >
            {juego.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "primary.white" }}
          >
            {juego.released}
          </Typography>
          <Rating
            name="half-rating-read"
            defaultValue={juego.rating}
            precision={0.5}
            readOnly
          />
          <div>
            <Button
              size="large"
              color="primary"
              variant="contained"
              sx={{ color: "primary.white" }}
            >
              Favoritos
              <FavoriteIcon />
            </Button>
          </div>

          {juego.platforms.map((j) => {
            return (
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "primary.white" }}
              >
                {j.platform.name}
              </Typography>
            );
          })}
        </Grid>
        <Grid item xs={12}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ color: "primary.white" }}
          >
            Capturas
          </Typography>
        </Grid>
        {juego.short_screenshots.map((j) => {
          return (
            <Grid item sm={6} xs={12}>
              <CardMedia component="img" height="400" image={j.image} />
            </Grid>
          );
        })}
      </Grid>

      <div>{JSON.stringify(juego)}</div>
    </>
  );
};

export default GameInfo;

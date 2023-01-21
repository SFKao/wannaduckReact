import * as React from "react";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import { stepClasses } from "@mui/material";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 100,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.standard,
    }),
    transform: "scale(1.3)",
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  fontWeight: "bolder",
  fontSize: 20,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.fondo.main,
  opacity: 0.4,
  transition: theme.transitions.create(["opacity", "transform"], {
    duration: theme.transitions.duration.standard,
  }),
}));

export default function HeaderButton(props) {
  let url = props.url;
  let title = props.title;
  let width = props.width;
  let callbackClick = props.onClick;
  let sx = props.sx;

  return (
    <ImageButton
      focusRipple
      key={title}
      style={{
        width: width,
        height: width,
      }}
      onClick={callbackClick}
    >
      <ImageSrc style={{ backgroundImage: `url(${url})` }} />
      <ImageBackdrop className="MuiImageBackdrop-root" />
      <Image sx={sx}>{title}</Image>
    </ImageButton>
  );
}

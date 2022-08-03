import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import back from "../assets/body-parts/back.png";
import cardio from "../assets/body-parts/cardio.png";
import chest from "../assets/body-parts/chest.png";
import lowerArm from "../assets/body-parts/lower-arm.png";
import upperArm from "../assets/body-parts/upper-arm.png";
import lowerLeg from "../assets/body-parts/lower-leg.png";
import upperLeg from "../assets/body-parts/upper-leg.png";
import neck from "../assets/body-parts/neck.png";
import shoulders from "../assets/body-parts/shoulders.png";
import waist from "../assets/body-parts/waist.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  let source;
  if (item === "back") source = back;
  else if (item === "cardio") source = cardio;
  else if (item === "chest") source = chest;
  else if (item === "lower arms") source = lowerArm;
  else if (item === "lower legs") source = lowerLeg;
  else if (item === "neck") source = neck;
  else if (item === "shoulders") source = shoulders;
  else if (item === "upper arms") source = upperArm;
  else if (item === "upper legs") source = upperLeg;
  else if (item === "waist") source = waist;
  else source = Icon;
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #FF2625",
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top:1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={source} alt="icon" style={{ width: "60px", height: "60px" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        textTransform="capitalize"
        color="#3A1212"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;

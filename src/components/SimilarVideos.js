import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarVideos = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2" }}>
        <Box mb="20px" sx={{ position: "relative", width: "100%", p: "20px" }}>
          {targetMuscleExercises.length ? (
            <HorizontalScrollbar data={targetMuscleExercises} />
          ) : (
            <Loader />
          )}
        </Box>
      </Stack>
      <Typography variant="h3" mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "5" }}>
        <Box mb="20px" sx={{ position: "relative", width: "100%", p: "20px" }}>
          {equipmentExercises.length ? (
            <HorizontalScrollbar data={equipmentExercises} />
          ) : (
            <Loader />
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default SimilarVideos;

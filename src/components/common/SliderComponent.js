import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponent = ({ min, max, defaulValue, step, value, onchange, label, amount, unit }) => {
  return (
    <Stack my={1.2}>
      <Stack gap={0.5} direction="column">
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="p">{unit} {amount}</Typography>
      </Stack>
      <Slider
        min={min}
        max={max}
        defaultValue={defaulValue}
        aria-label="Default"
        valueLabelDisplay="auto"
        step={step}
        marks
        onChange={onchange}
        value={value}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography color="text.secondary" variant="caption">{unit} {min}</Typography>
        <Typography color="text.secondary" variant="caption">{unit} {max}</Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;

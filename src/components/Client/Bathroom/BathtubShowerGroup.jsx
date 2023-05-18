import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  FormControl,
  FormGroup,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Checkbox,
} from "@mui/material";

function BathtubShowerGroup() {
  const bathroom = useSelector((store) => store.clientBathroomReducer);
  const dispatch = useDispatch();

  return (
    <>
      <h3>Bathtub/Shower Type</h3>
      <FormGroup>
        <FormControl>
          <FormLabel id="bathroom-tub-type">
            Does this bathroom have any of the following? <br />
            Check all that apply.
          </FormLabel>
          <FormControlLabel
            control={<Checkbox />}
            label="Regular plastic tub/shower combo"
            value={bathroom.bath_shower_type}
            onChange={(event) =>
                dispatch({
                  type: 'SET_BATH_SHOWER_TYPE',
                  payload: event.target.value,
                })
              }
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Ceramic or porcelain tub"
          />
          <FormControlLabel control={<Checkbox />} label="Walk-in shower" />
          <FormControlLabel
            control={<Checkbox />}
            label="Specialty walk-in shower"
          />
          <FormControlLabel control={<Checkbox />} label="Jacuzzi tub" />
          <FormControlLabel control={<Checkbox />} label="Other" />
        </FormControl>
      </FormGroup>
    </>
  );
}

export default BathtubShowerGroup;

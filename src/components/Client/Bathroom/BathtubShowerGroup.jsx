import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  FormControl,
  FormGroup,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Checkbox,
  TextField,
  Button,
} from "@mui/material";

function BathtubShowerGroup() {
  const bathroom = useSelector((store) => store.clientBathroomReducer);
  const dispatch = useDispatch();

  // local state to store what items are checked
  const [list, updateList] = useState([]);

  const handleChange = (e) => {
    // if checked, add to list state array
    if (e.target.checked) {
      // getAttribute references the FormControlLabel's name attribute
      updateList([...list, e.target.getAttribute("name")]);
    }
    //else remove from list state array
    else {
      // updateList to a new array that filters out the item that was unchecked
      updateList(list.filter((item) => item != e.target.getAttribute("name")));
    }
    // DISPATCH CAN GO HERE, LOCAL STATE WILL BE THE PAYLOAD
    dispatch({
      type: "SET_BATH_SHOWER_TYPE",
      payload: list,
    });
  };

  const [other, updateOther] = useState("")

  const otherSubmit = (e) => {
    // getAttribute references the FormControlLabel's name attribute
    updateList([...list, other]);

    dispatch({
      type: "SET_BATH_SHOWER_TYPE",
      payload: list,
    });
    updateOther("");
  };

  const [enclosureList, setEnclosureList] = useState([])

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
            onChange={handleChange}
            control={<Checkbox />}
            name="Regular plastic tub/shower combo"
            label="Regular plastic tub/shower combo"
            // value={bathroom.bath_shower_type}
          />
          {list.includes("Regular plastic tub/shower combo") && (
            <>
              <FormLabel>Enclosure Type:</FormLabel>
              <RadioGroup
                aria-labelledby="threshold-type"
                name="threshold-type"
                row
                value={bathroom.threshold_type}
                onChange={(event) =>
                  dispatch({
                    type: "SET_THRESHOLD_TYPE",
                    payload: event.target.value,
                  })
                }
              >
                <FormControlLabel
                  value="Curtain"
                  control={<Radio />}
                  label="Curtain"
                />
                <FormControlLabel
                  value="Glass Doors"
                  control={<Radio />}
                  label="Glass Doors"
                />
              </RadioGroup>
            </>
          )}

          <FormControlLabel
            onChange={handleChange}
            control={<Checkbox />}
            name="Ceramic or porcelain tub"
            label="Ceramic or porcelain tub"
          />
          {list.includes("Ceramic or porcelain tub") && (
            <>
              <FormLabel>Enclosure Type:</FormLabel>
              <RadioGroup
                aria-labelledby="threshold-type"
                name="threshold-type"
                row
                value={bathroom.threshold_type}
                onChange={(event) =>
                  dispatch({
                    type: "SET_THRESHOLD_TYPE",
                    payload: event.target.value,
                  })
                }
              >
                <FormControlLabel
                  value="Curtain"
                  control={<Radio />}
                  label="Curtain"
                />
                <FormControlLabel
                  value="Glass Doors"
                  control={<Radio />}
                  label="Glass Doors"
                />
              </RadioGroup>
            </>
          )}
          <FormControlLabel
            onChange={handleChange}
            control={<Checkbox />}
            name="Walk-in shower"
            label="Walk-in shower"
          />
          {list.includes("Walk-in shower") && (
            <>
              <FormLabel>Enclosure Type:</FormLabel>
              <RadioGroup
                aria-labelledby="threshold-type"
                name="threshold-type"
                row
                value={bathroom.threshold_type}
                onChange={(event) =>
                  dispatch({
                    type: "SET_THRESHOLD_TYPE",
                    payload: event.target.value,
                  })
                }
              >
                <FormControlLabel
                  value="Curtain"
                  control={<Radio />}
                  label="Curtain"
                />
                <FormControlLabel
                  value="Glass Doors"
                  control={<Radio />}
                  label="Glass Doors"
                />
              </RadioGroup>
            </>
          )}

          <FormControlLabel
            onChange={handleChange}
            control={<Checkbox />}
            name="Specialty walk-in shower"
            label="Specialty walk-in shower"
          />
          {list.includes("Specialty walk-in shower") && (
            <>
              <FormLabel>Enclosure Type:</FormLabel>
              <RadioGroup
                aria-labelledby="threshold-type"
                name="threshold-type"
                row
                value={bathroom.threshold_type}
                onChange={(event) =>
                  dispatch({
                    type: "SET_THRESHOLD_TYPE",
                    payload: event.target.value,
                  })
                }
              >
                <FormControlLabel
                  value="Curtain"
                  control={<Radio />}
                  label="Curtain"
                />
                <FormControlLabel
                  value="Glass Doors"
                  control={<Radio />}
                  label="Glass Doors"
                />
              </RadioGroup>
            </>
          )}

          <FormControlLabel
            onChange={handleChange}
            control={<Checkbox />}
            name="Jacuzzi tub"
            label="Jacuzzi tub"
          />
          {list.includes("Jacuzzi tub") && (
            <>
              <FormLabel>Enclosure Type:</FormLabel>
              <RadioGroup
                aria-labelledby="threshold-type"
                name="threshold-type"
                row
                value={bathroom.threshold_type}
                onChange={(event) =>
                  dispatch({
                    type: "SET_THRESHOLD_TYPE",
                    payload: event.target.value,
                  })
                }
              >
                <FormControlLabel
                  value="Curtain"
                  control={<Radio />}
                  label="Curtain"
                />
                <FormControlLabel
                  value="Glass Doors"
                  control={<Radio />}
                  label="Glass Doors"
                />
              </RadioGroup>
            </>
          )}

          <>
            {/* OTHER BATH/SHOWER */}
            <FormLabel>If other, please specify.</FormLabel>
            <TextField
              size="small"
              value={other}
              onChange={(event) => updateOther(event.target.value)}
            />
            <Button onClick={otherSubmit}>Submit</Button>
          </>
        </FormControl>
      </FormGroup>
    </>
  );
}

export default BathtubShowerGroup;

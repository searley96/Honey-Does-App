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

  const [regularChecked, setRegular] = useState(false);
  const [regularType, setRegularType] = useState('');

  const [ceramicPorcelainChecked, setCeramicPorcelainChecked] = useState(false);
  const [ceramicPorcelainType, setCeramicPorcelainType] = useState('');

  const [walkInChecked, setWalkInChecked] = useState(false);
  const [walkInType, setWalkInType] = useState('');

  const [specialShowerChecked, setSpecialShowerChecked] = useState(false);
  const [specialShowerType, setSpecialShowerType] = useState('');

  const [jacuzziChecked, setJacuzziChecked] = useState(false);
  const [jacuzziType, setJacuzziType] = useState('');
  // state to track TextField input, gets pushed into list state array and reset
  const [other, updateOther] = useState("");
  const [otherDisabled, updateDisabled] = useState(false);

  const handleChange = (e) => {
    // if checked, add to list state array
    console.log(e.target.checked);
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

  

  const otherSubmit = (e) => {
    // getAttribute references the FormControlLabel's name attribute
    updateList([...list, other]);

    // dispatch({
    //   type: "SET_BATH_SHOWER_TYPE",
    //   payload: list,
    // });
    updateOther("");
    updateDisabled(true);
  };


  return (
    <>
      <h3>Bathtub/Shower Type</h3>
      <FormGroup>
        <FormControl>
          <FormLabel id="bathroom-tub-type">
            Does this bathroom have any of the following? <br />
            Check all that apply.
          </FormLabel>

          {/* BATHTUB SHOWER TYPE */}
          <FormControlLabel
            onChange={() => setRegular(!regularChecked)}
            control={<Checkbox />}
            name="Regular plastic tub/shower combo"
            label="Regular plastic tub/shower combo"
          // value={bathroom.bath_shower_type}
          />

          {regularChecked && (
            <>
              <FormLabel>Enclosure Type:</FormLabel>
              <RadioGroup
                aria-labelledby="regular-threshold-type"
                name="regular-threshold-type"
                row  
              onChange={(event) =>  {
                setRegularType(event.target.getAttribute("value"));
                console.log(regularType);
              }
                
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
            onChange={() => setCeramicPorcelainChecked(!ceramicPorcelainChecked)}
            control={<Checkbox />}
            name="Ceramic or porcelain tub"
            label="Ceramic or porcelain tub"
          />
          {ceramicPorcelainChecked && (
            <>
              <FormLabel>Enclosure Type:</FormLabel>
              <RadioGroup
                aria-labelledby="threshold-type"
                name="threshold-type"
                row               
                onChange={(event) =>{
                  setCeramicPorcelainType(event.target.getAttribute("value"));
                  console.log(ceramicPorcelainType);
                }
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
            onChange={() => setWalkInChecked(!walkInChecked)}
            control={<Checkbox />}
            name="Walk-in shower"
            label="Walk-in shower"
          />
          {walkInChecked && (
            <>
              <FormLabel>Enclosure Type:</FormLabel>
              <RadioGroup
                aria-labelledby="threshold-type"
                name="threshold-type"
                row
                
                onChange={(event) => {
                  setWalkInType(event.target.getAttribute("value"))
                  console.log(walkInType);
                }
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
            onChange={() => setSpecialShowerChecked(!specialShowerChecked)}
            control={<Checkbox />}
            name="Specialty walk-in shower"
            label="Specialty walk-in shower"
          />
          {specialShowerChecked && (
            <>
              <FormLabel>Enclosure Type:</FormLabel>
              <RadioGroup
                aria-labelledby="threshold-type"
                name="threshold-type"
                row
                
                onChange={(event) => {
                  setSpecialShowerType(event.target.getAttribute("value"));
                  console.log(specialShowerType);
                }
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
            onChange={() => setJacuzziChecked(!jacuzziChecked)}
            control={<Checkbox />}
            name="Jacuzzi tub"
            label="Jacuzzi tub"
          />
          {jacuzziChecked && (
            <>
              <FormLabel>Enclosure Type:</FormLabel>
              <RadioGroup
                aria-labelledby="threshold-type"
                name="threshold-type"
                row
                
                onChange={(event) => {
                  setJacuzziType(event.target.getAttribute("value"));
                  console.log(jacuzziType);
                }
                  
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
            <FormLabel>If any other types, please specify quantity of other bathrooms, and describe them.</FormLabel>
            <TextField
              size="small"
              value={other}
              disabled={otherDisabled}
              onChange={(event) => updateOther(event.target.value)}
            />
            <Button onClick={otherSubmit} disabled={otherDisabled}>Submit</Button>
          </>
        </FormControl>
      </FormGroup>
    </>
  );
}

export default BathtubShowerGroup;

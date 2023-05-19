import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControl,
  FormGroup,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Checkbox,
  TextField,
} from "@mui/material";

function BathtubShowerGroup() {
  const bathroom = useSelector((store) => store.clientBathroomReducer);
  const dispatch = useDispatch();

  // state for checkboxes
  const [regularChecked, setRegularChecked] = useState(false);
  const [ceramicPorcelainChecked, setCeramicPorcelainChecked] = useState(false);
  const [walkInChecked, setWalkInChecked] = useState(false);
  const [specialShowerChecked, setSpecialShowerChecked] = useState(false);
  const [jacuzziChecked, setJacuzziChecked] = useState(false);

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

          {/* REGURAR TYPE */}
          <FormControlLabel
            onChange={(e) => {
              setRegularChecked(e.target.checked)
              dispatch({ type: 'SET_REGULAR_TYPE', payload: '' })
            }
            }
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
                onChange={(event) => {
                  dispatch({
                    type: 'SET_REGULAR_TYPE',
                    payload: event.target.getAttribute("value")
                  })
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
          {/* END REGURAR TYPE */}

          {/* CERAMIC OR PORCELAIN TUB */}
          <FormControlLabel
            onChange={(e) => {
              setCeramicPorcelainChecked(e.target.checked)
              dispatch({ type: 'SET_CERAMIC_PORCELAIN_TYPE', payload: '' })
            }
            }
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
                onChange={(event) => {
                  dispatch({
                    type: 'SET_CERAMIC_PORCELAIN_TYPE',
                    payload: event.target.getAttribute("value")
                  })
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
          {/* END CERAMIC OR PORCELAIN TUB */}

          {/* WALK IN SHOWER */}
          <FormControlLabel
            onChange={(e) => {
              setWalkInChecked(e.target.checked)
              dispatch({ type: 'SET_WALK_IN_TYPE', payload: '' })
            }
            }
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
                  dispatch({
                    type: 'SET_WALK_IN_TYPE',
                    payload: event.target.getAttribute("value")
                  })

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
          {/* END WALK IN SHOWER */}

          {/* SPECIALTY WALK IN SHOWER */}
          <FormControlLabel
            onChange={(e) => {
              setSpecialShowerChecked(e.target.checked);
              dispatch({ type: 'SET_SPECIALTY_TYPE', payload: '' })
            }
            }
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
                  dispatch({
                    type: 'SET_SPECIALTY_TYPE',
                    payload: event.target.getAttribute("value")
                  })
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
          {/* END SPECIALTY WALK IN SHOWER */}

          {/* JACUZZI */}
          <FormControlLabel
            onChange={(e) => {
              setJacuzziChecked(e.target.checked);
              dispatch({ type: 'SET_JACUZZI_TYPE', payload: '' })
            }
            }
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
                  dispatch({
                    type: 'SET_JACUZZI_TYPE',
                    payload: event.target.getAttribute("value")
                  })
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
          {/* END JACUZZI */}


          {/* OTHER BATH/SHOWER */}
          <>
            <FormLabel>If any other types, please specify quantity of other bathrooms, and describe them.</FormLabel>
            <TextField
              size="small"
              value={bathroom.other_type}
              onChange={e => dispatch({ type: 'SET_OTHER_TYPE', payload: e.target.value })}
            />
            {/* END OTHER BATH/SHOWER */}

          </>
        </FormControl>
      </FormGroup>
    </>
  );
}

export default BathtubShowerGroup;

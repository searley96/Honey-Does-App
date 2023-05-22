import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControl,
  FormGroup,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";

function MirrorGroup() {
    
  const bathroom = useSelector((store) => store.clientBathroomReducer);
  const dispatch = useDispatch();

  return (
    <>
      <h3>Mirror</h3>
      <FormGroup>
        <FormControl>
          <FormLabel> Clean Mirror? </FormLabel>
          <RadioGroup
            aria-labelledby="mirror-type"
            name="mirror-type"
            row
            value={bathroom.clean_mirror}
            onChange={e =>
              dispatch({
                type: "SET_CLEAN_MIRROR",
                payload: (e.target.value === 'true')
              })
            }
          >
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>

          {/* if cleanMirror is set to yes, display mirror count */}
          {bathroom.clean_mirror === true && (
            <>
              <FormLabel id="mirror-count">How many mirrors?</FormLabel>
              <RadioGroup
                aria-labelledby="mirror-count"
                name="mirror-count-group"
                row
                value={bathroom.number_mirrors_clean}
                onChange={e =>
                  dispatch({
                    type: "SET_NUMBER_MIRRORS_CLEAN",
                    payload: e.target.value,
                  })
                }
              >
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
              </RadioGroup>
            </>
          )}
        </FormControl>
      </FormGroup>
    </>
  );
}

export default MirrorGroup;

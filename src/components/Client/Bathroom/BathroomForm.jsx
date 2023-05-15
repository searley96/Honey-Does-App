import * as React from "react";
import { useState } from "react";

import {
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
  //   InputLabel,
  //   Select,
  //   MenuItem,
  //   Box,
} from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function BathroomForm() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [sinkType, setSinkType] = useState("pedistal");
  const [showCabinetsOption, setShowCabinetsOption] = useState(false);

  const [cleanCabinets, setCleanCabinets] = useState("yes");
  const [showCleanCabinets, setShowCleanCabinets] = useState(false)

  const [cleanFloors, setCleanFloors] = useState("yes");
  const [showCleanRugs, setShowCleanRugs] = useState(false)

  return (
    <>
      <h1>Bathroom</h1>

      <FormControl>
        <FormLabel id="bathroom-type-buttons-group-label">
          Bathroom Type
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="bathroom-type-buttons-group-label"
          defaultValue="full bath"
          name="bathroom-type-group"
        >
          <FormControlLabel
            value="full-bath"
            control={<Radio />}
            label="Full Bath"
          />
          <FormControlLabel
            value="half-bath"
            control={<Radio />}
            label="Half Bath"
          />
          <FormControlLabel
            value="no-bath"
            control={<Radio />}
            label="Don't Clean"
          />
        </RadioGroup>
      </FormControl>

      <FormGroup>
        <FormLabel id="bathroom-type-buttons-group-label">
          Does this bathroom have any of the following? <br />
          Check all that apply.
        </FormLabel>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Regular plastic tub/shower combo"
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
        <FormControlLabel
          control={<Checkbox />}
          label="Other - please specify"
        />
      </FormGroup>

      <FormControl>
        <FormLabel id="mirror-type-buttons-group-label">
          Clean Mirror?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="mirror-type-buttons-group-label"
          defaultValue="yes"
          name="mirror-type-group"
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        <FormLabel id="mirror-type-buttons-group-label">
          How many mirrors?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="mirror-count-buttons-group-label"
          defaultValue="1"
          name="mirror-count-group"
        >
          <FormControlLabel value="1" control={<Radio />} label="1" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
          <FormControlLabel value="4" control={<Radio />} label="4" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="sink-clean-buttons-group-label">
          Clean sinks/counters?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="sink-clean-buttons-group-label"
          defaultValue="yes"
          name="sink-clean-group"
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        <FormLabel id="sink-clean-buttons-group-label">
          Do you have granite counter tops?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="sink-clean-buttons-group-label"
          defaultValue="yes"
          name="sink-clean-group"
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        <FormLabel id="sink-type-buttons-group-label">Sink type?</FormLabel>
        <RadioGroup
          row
          aria-labelledby="sink-type-buttons-group-label"
          defaultValue="pedistal"
          name="sink-type-group"
          onChange={(event) => {
            setSinkType(event.target.value);
            setShowCabinetsOption(event.target.value === "cabinets");
          }}
        >
          <FormControlLabel
            value="pedistal"
            control={<Radio />}
            label="Pedistal"
          />
          <FormControlLabel
            value="cabinets"
            control={<Radio />}
            label="Cabinets Underneath"
          />
        </RadioGroup>
        {showCabinetsOption && (
          <>
            <FormLabel id="cab-clean-buttons-group-label">
              If it has cabinets, do you want the fronts cleaned?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="cab-clean-buttons-group-label"
              defaultValue="no"
              name="cab-clean-group"
              onChange={(event) => {
                setCleanCabinets(event.target.value);
                setShowCleanCabinets(event.target.value === "yes");
              }}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </>
        )}
        {showCleanCabinets && (
          <>
            <FormLabel id="cab-clean-type-buttons-group-label">
              If yes, how do you want them cleaned?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="cab-clean-type-buttons-group-label"
              defaultValue="spot"
              name="cab-clean-type-group"
            >
              <FormControlLabel value="spot" control={<Radio />} label="Spot clean" />
              <FormControlLabel value="full" control={<Radio />} label="Full wipe down" />
              <FormLabel id="polish-cab-buttons-group-label">
              If wood cabinets, do you want us to use Orange Glo polish?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="polish-cab-buttons-group-label"
              defaultValue="yes"
              name="polish-cab-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            </RadioGroup>
          </>
        )}
      </FormControl>
      <FormControl>
        <FormLabel id="toilet-type-buttons-group-label">
          Do you want us to clean the toilet?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="toilet-type-buttons-group-label"
          defaultValue="yes"
          name="toilet-type-group"
        >
          <FormControlLabel
            value="yes"
            control={<Radio />}
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={<Radio />}
            label="No"
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="trash-buttons-group-label">
          Do you want us to take out the trash?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="trash-buttons-group-label"
          defaultValue="yes"
          name="trash-group"
        >
          <FormControlLabel
            value="yes"
            control={<Radio />}
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={<Radio />}
            label="No"
          />
        </RadioGroup>
      </FormControl> 
      <FormControl>
        <FormLabel id="floors-buttons-group-label">
          Do you want us to sweep and mop the floors?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="floors-buttons-group-label"
          defaultValue="no"
          name="floors-group"
          onChange={(event) => {
            setCleanFloors(event.target.value);
            setShowCleanRugs(event.target.value === "yes");
          }}
        >
          <FormControlLabel
            value="yes"
            control={<Radio />}
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={<Radio />}
            label="No"
          />
        </RadioGroup>
        {showCleanRugs && (
          <>
        <FormLabel id="rugs-buttons-group-label">
          If so, do you have accent rugs that need to be moved/shaken off beforehand?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="rugs-buttons-group-label"
          defaultValue="yes"
          name="rugs-group"
        >
          <FormControlLabel
            value="yes"
            control={<Radio />}
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={<Radio />}
            label="No"
          />
        </RadioGroup>
        </>
        )}
      </FormControl> 

    </>
  );
}

export default BathroomForm;

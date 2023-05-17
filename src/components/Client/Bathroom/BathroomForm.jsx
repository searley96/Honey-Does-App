import * as React from "react";
import { useState } from "react";
import "./BathroomForm.css";

import {
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
} from "@mui/material";

function BathroomForm() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  // Bathtub Type section
  const [isOtherChecked, setIsOtherChecked] = useState(false);
  const [otherInputValue, setOtherInputValue] = useState("");

  // Event handler for 'Other' checkbox
  const handleBathtubCheckboxChange = (event) => {
    setIsOtherChecked(event.target.checked);
  };

  // Event handler for 'Other' input
  const handleBathtubInputChange = (event) => {
    setOtherInputValue(event.target.value);
    console.log("other tub info:", event.target.value);
  };

  //conditional rendering to show number of mirrors when 'yes' is clicked on clean mirror
  const [mirror, setMirror] = useState("yes");
  const [showMirrorCount, setMirrorCount] = useState(false);

  //conditional rendering to show more questions when 'cabinets underneath' is selected for sink type
  const [sinkType, setSinkType] = useState("pedistal");
  const [showCabinetsOption, setShowCabinetsOption] = useState(false);

  //condtional rendering to show more questions when 'yes' selected for cabinet clean
  const [cleanCabinets, setCleanCabinets] = useState("yes");
  const [showCleanCabinets, setShowCleanCabinets] = useState(false);

  //conditional rendering to show rug question when 'yes' is selected for sweep and mop floors
  const [cleanFloors, setCleanFloors] = useState("yes");
  const [showCleanRugs, setShowCleanRugs] = useState(false);

  // Trash Instructions section
  const [isYesChecked, setIsYesChecked] = useState(false);
  const [trashInputValue, setTrashInputValue] = useState("");

  // Event handler for 'Yes' radio button
  const handleTrashCheckboxChange = (event) => {
    setIsYesChecked(event.target.checked);
  };

  // Event handler for trash input
  const handleTrashInputChange = (event) => {
    setTrashInputValue(event.target.value);
    console.log("trash instructions:", event.target.value);
  };

  return (
    <>
      <h1>Bathroom</h1>

      <FormControl>
        <FormLabel id="bathroom-type">Bathroom Type</FormLabel>
        <RadioGroup
          row
          aria-labelledby="bathroom-type"
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

        <FormGroup>
          <FormLabel id="bathroom-tub-type">
            Does this bathroom have any of the following? <br />
            Check all that apply.
          </FormLabel>
          <FormControlLabel
            control={<Checkbox />}
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
            control={<Checkbox onChange={handleBathtubCheckboxChange} />}
            label="Other"
          />
          {isOtherChecked && (
            <input
              type="text"
              placeholder="Please specify."
              value={otherInputValue}
              onChange={handleBathtubInputChange}
            />
          )}
        </FormGroup>

        <FormLabel id="mirror-type">Clean Mirror?</FormLabel>
        <RadioGroup
          row
          aria-labelledby="mirror-type"
          name="mirror-type-group"
          onChange={(event) => {
            setMirror(event.target.value);
            setMirrorCount(event.target.value === "yes");
          }}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {showMirrorCount && (
          <>
            <FormLabel id="mirror-count">How many mirrors?</FormLabel>
            <RadioGroup
              row
              aria-labelledby="mirror-count"
              defaultValue="1"
              name="mirror-count-group"
            >
              <FormControlLabel value="1" control={<Radio />} label="1" />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
              <FormControlLabel value="4" control={<Radio />} label="4" />
            </RadioGroup>
          </>
        )}

        <FormLabel id="sink-clean">Clean sinks/counters?</FormLabel>
        <RadioGroup row aria-labelledby="sink-clean" name="sink-clean-group">
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        <FormLabel id="granite-tops">
          Do you have granite counter tops?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="granite-tops"
          name="granite-tops-group"
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        <FormLabel id="sink-type">Sink type?</FormLabel>
        <RadioGroup
          row
          aria-labelledby="sink-type"
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
            <FormLabel id="cab-clean">
              If it has cabinets, do you want the fronts cleaned?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="cab-clean"
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
            <FormLabel id="cab-clean-type">
              If yes, how do you want them cleaned?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="cab-clean-type"
              name="cab-clean-type-group"
            >
              <FormControlLabel
                value="spot"
                control={<Radio />}
                label="Spot clean"
              />
              <FormControlLabel
                value="full"
                control={<Radio />}
                label="Full wipe down"
              />
              <FormLabel id="polish-cab">
                If wood cabinets, do you want us to use Orange Glo polish?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="polish-cab"
                name="polish-cab-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </RadioGroup>
          </>
        )}

        <FormLabel id="toilet-type">
          Do you want us to clean the toilet?
        </FormLabel>
        <RadioGroup row aria-labelledby="toilet-type" name="toilet-type-group">
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>

        <FormLabel id="trash">Do you want us to take out the trash?</FormLabel>
        <RadioGroup row aria-labelledby="trash" name="trash-group">
        <FormControlLabel
          control={<Radio onChange={handleTrashCheckboxChange} />}
          label="Yes"
          value="yes"
        />
        <FormControlLabel control={<Radio />} label="No" value="no" />
        </RadioGroup>
        {isYesChecked && (
          <input
            type="text"
            placeholder="Removal instructions."
            value={trashInputValue}
            onChange={handleTrashInputChange}
          />
         
        )}

        <FormLabel id="floors">
          Do you want us to sweep and mop the floors?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="floors"
          name="floors-group"
          onChange={(event) => {
            setCleanFloors(event.target.value);
            setShowCleanRugs(event.target.value === "yes");
          }}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {showCleanRugs && (
          <>
            <FormLabel id="floors-rugs">
              Do you have accent rugs that need to be moved/shaken off
              beforehand?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="floors-rugs"
              name="floors-rugs-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </>
        )}
      </FormControl>
    </>
  );
}

export default BathroomForm;

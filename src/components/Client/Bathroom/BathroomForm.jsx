import BathroomType from "./BathroomType";
import MirrorGroup from "./MirrorGroup";
import SinkGroup from "./SinkGroup";
import ToiletGroup from "./ToiletGroup";
import TrashForm from "./TrashForm";
import BathroomFloors from "./BathroomFloors";
import BathtubShowerGroup from "./BathtubShowerGroup";
import { Button, Stack, FormGroup } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function BathroomForm() {

  const dispatch = useDispatch();
  const jobId = useSelector(store => store.user.form_job_id);
  const bathroom = useSelector(store => store.clientBathroomReducer);
  const history = useHistory();

  const [err, setError] = useState();

  // state for checkboxes
  const [regularChecked, setRegularChecked] = useState(false);
  const [ceramicPorcelainChecked, setCeramicPorcelainChecked] = useState(false);
  const [walkInChecked, setWalkInChecked] = useState(false);
  const [specialShowerChecked, setSpecialShowerChecked] = useState(false);
  const [jacuzziChecked, setJacuzziChecked] = useState(false);

  function addBathroom(event) {
    event.preventDefault()
    dispatch({ type: 'ADD_BATHROOM', payload: { bathroom, jobId, order: 1 } });
  }
  function submitHandler(event) {
    event.preventDefault();
    dispatch({ type: 'ADD_BATHROOM', payload: { bathroom, jobId, order: 1 } })
    history.push('/kitchenForm') //add page component 
  }

  return (
    <>
      <h1>Bathroom Form</h1>

        <BathroomType />

        <BathtubShowerGroup />

        <MirrorGroup />

        <SinkGroup />
        <ToiletGroup />
        <TrashForm />
        <BathroomFloors />
        <Stack
          spacing={1}
          direction="row"
          sx={{ mt: "40px", display: "flex", justifyContent: "space-between" }}
        >
          <Button variant="outlined" onClick={addBathroom}>
            <AddIcon sx={{ mx: "5px" }} fontSize="small" /> Add Another Bathroom
          </Button>
          <Button variant="contained" onClick={submitHandler} >
            <DoneIcon sx={{ mx: "5px" }} fontSize="small" /> Done With Bathroom
            Forms
          </Button>
        </Stack>
      
    </>
  );
}

export default BathroomForm;

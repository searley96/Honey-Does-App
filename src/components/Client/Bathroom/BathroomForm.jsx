import BathroomType from "./BathroomType";
import MirrorGroup from "./MirrorGroup";
import SinkGroup from "./SinkGroup";
import ToiletGroup from "./ToiletGroup";
import TrashForm from "./TrashForm";
import BathroomFloors from "./BathroomFloors";
import BathtubShowerGroup from "./BathtubShowerGroup";
import { Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch, useSelector } from "react-redux";
import React from 'react';

function BathroomForm() {

  const dispatch = useDispatch();
  const jobId = useSelector(store => store.jobidReducer);
  const bathroom = useSelector(store => store.clientBathroomReducer);

   function addBathroom() {
     //dispatch({ type: 'SET_JOB_ID', payload: jobId });
     dispatch({ type: 'ADD_BATHROOM', payload: {bathroom, jobId } });
  }
  function submitHandler() {
    dispatch({ type: 'ADD_BATHROOM', payload: bathroom })
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

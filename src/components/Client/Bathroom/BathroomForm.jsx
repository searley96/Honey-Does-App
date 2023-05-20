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
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function BathroomForm() {

  const dispatch = useDispatch();
  const jobId = useSelector(store => store.user.form_job_id);
  const formList = useSelector(store => store.formList);
  const bathroom = useSelector(store => store.clientBathroomReducer);
  const history = useHistory();

  const [err, setError] = useState();

  // state for checkboxes
  const [regularChecked, setRegularChecked] = useState(false);
  const [ceramicPorcelainChecked, setCeramicPorcelainChecked] = useState(false);
  const [walkInChecked, setWalkInChecked] = useState(false);
  const [specialShowerChecked, setSpecialShowerChecked] = useState(false);
  const [jacuzziChecked, setJacuzziChecked] = useState(false);

  useEffect(() => {
    // dispatch to the room saga to:
    //  -make a request to the server to gather all forms with job_id === user.form_job_id
    //  -update the jobList reducer
    //  -result of this specific dispatch will be to initialize formList = []
    dispatch({type: 'FETCH_FORM_LIST'})
  }, [])

  function addBathroom(event) {
    // dispatch to room.saga that triggers post request to form.router ('/bathroom/)
    const order = formList.length;
    console.log('inside bathroom form', formList)
    dispatch({ type: 'ADD_BATHROOM', payload: { bathroom, jobId, order } });
  }
  function submitHandler(event) {
    // dispatch to room.saga that triggers post request to form.router ('/bathroom/)
    dispatch({ type: 'ADD_BATHROOM', payload: { bathroom, jobId, order } })
    history.push('/kitchenForm') // directs user to the kitchen form 
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

import BathroomType from "./BathroomType";
import MirrorGroup from "./MirrorGroup";
import SinkGroup from "./SinkGroup";
import ToiletGroup from "./ToiletGroup";
import TrashForm from "./TrashForm";
import BathroomFloors from "./BathroomFloors";
import BathtubShowerGroup from "./BathtubShowerGroup";
import { Button, ButtonGroup, Stack, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch, useSelector  } from "react-redux";
import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function BathroomForm() {

  const dispatch = useDispatch();
  const history = useHistory();
  const jobId = useSelector(store => store.jobidReducer);
  const bathroomForm = useSelector(store => store.clientBathroomReducer)

    useEffect(() => {
        dispatch({type: 'JOB_ID', payload: jobId})
    }, [])

    const submitHandler = (event) => {
      event.preventDefault();
      dispatch ( {type: 'ADD_BATHROOM', payload: bathroomForm} )
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
        <Button variant="outlined" onClick={e => dispatch ({ type: 'ADD_BATHROOM', payload: bathroomForm})}>
          <AddIcon sx={{ mx: "5px" }}  fontSize="small" /> Add Another Bathroom
        </Button>
        <Button variant="contained"  onClick={submitHandler} >
          <DoneIcon sx={{ mx: "5px" }}fontSize="small" /> Done With Bathroom
          Forms
        </Button>
      </Stack>
    </>
  );
}

export default BathroomForm;

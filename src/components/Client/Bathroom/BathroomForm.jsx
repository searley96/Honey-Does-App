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
import { useDispatch } from "react-redux";

function BathroomForm() {

  const dispatch = useDispatch();

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
        <Button variant="outlined">
          <AddIcon sx={{ mx: "5px" }}  fontSize="small" /> Add Another Bathroom
        </Button>
        <Button variant="contained">
          <DoneIcon sx={{ mx: "5px" }} fontSize="small" /> Done With Bathroom
          Forms
        </Button>
      </Stack>
    </>
  );
}

export default BathroomForm;

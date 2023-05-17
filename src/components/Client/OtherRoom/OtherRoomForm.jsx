import { useHistory } from "react-router-dom";
import OtherRoom from "./OtherRoom";

function OtherRoomForm() {
    console.log('Inside OtherRoomForm()')
    const history = useHistory();

    // this function is called when the Next button is clicked
    const submitHandler = (event) => {
        event.preventDefault(); // do i even need this here?? 
        history.push('/whateverTheNameofThePriceEstimateResultPageIs');
    }
    
    return (
        <>
            <OtherRoom />
        </>
    )
}

export default OtherRoomForm;
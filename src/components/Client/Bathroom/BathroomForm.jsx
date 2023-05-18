import BathroomType from "./BathroomType"
import MirrorGroup from "./MirrorGroup";
import SinkGroup from "./SinkGroup";
import ToiletGroup from "./ToiletGroup";
import TrashForm from "./TrashForm";
import BathroomFloors from "./BathroomFloors";
import BathtubShowerGroup from "./BathtubShowerGroup";

function BathroomForm() {
    return (
        <>
        <BathroomType />
        <BathtubShowerGroup />
        <MirrorGroup />
        <SinkGroup />
        <ToiletGroup />
        <TrashForm />
        <BathroomFloors />
        </>
    );
}

export default BathroomForm;
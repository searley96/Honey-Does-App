import BathroomType from "./BathroomType"
import MirrorGroup from "./MirrorGroup";
import SinkGroup from "./SinkGroup";
import ToiletGroup from "./ToiletGroup";
import TrashForm from "./TrashForm";
import BathroomFloors from "./BathroomFloors";

function BathroomForm() {
    return (
        <>
        <BathroomType />
        <MirrorGroup />
        <SinkGroup />
        <ToiletGroup />
        <TrashForm />
        <BathroomFloors />
        </>
    );
}

export default BathroomForm;
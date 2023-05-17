import BathroomType from "./BathroomType"
import MirrorGroup from "./MirrorGroup";
import SinkGroup from "./SinkGroup";
import ToiletGroup from "./ToiletGroup";
import TrashForm from "./TrashForm";

function BathroomForm() {
    return (
        <>
        <BathroomType />
        <MirrorGroup />
        <SinkGroup />
        <ToiletGroup />
        <TrashForm />
        </>
    );
}

export default BathroomForm;
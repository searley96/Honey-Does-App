import BathroomType from "./BathroomType"
import MirrorGroup from "./MirrorGroup";
import SinkGroup from "./SinkGroup";
import ToiletGroup from "./ToiletGroup";

function BathroomForm() {
    return (
        <>
        <BathroomType />
        <MirrorGroup />
        <SinkGroup />
        <ToiletGroup />
        </>
    );
}

export default BathroomForm;
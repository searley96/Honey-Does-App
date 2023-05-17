import CabinetGroup from './CabinetGroup';
import StoveGroup from './StoveGroup';
import ApplianceGroup from './ApplianceGroup';
import MicrowaveGroup from './MicrowaveGroup';
import CountersSinksGroup from './CountersSinksGroup';
import KitchenFloors from './KitchenFloors';

function KitchenForm() {

    return (

        <>

            <CabinetGroup />
            <ApplianceGroup />
            <MicrowaveGroup />
            <StoveGroup />
            <CountersSinksGroup />
            <KitchenFloors />
            
        </>
    );

   
     
}

export default KitchenForm;
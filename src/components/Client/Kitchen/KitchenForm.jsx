import CabinetGroup from './CabinetGroup';
import StoveGroup from './StoveGroup';
import ApplianceGroup from './ApplianceGroup';
import MicrowaveGroup from './MicrowaveGroup';
import CountersSinksGroup from './CountersSinksGroup';

function KitchenForm() {

    return (

        <>

            <CabinetGroup />
            <ApplianceGroup />
            <MicrowaveGroup />
            <StoveGroup />
            <CountersSinksGroup />
            
        </>
    );

   
     
}

export default KitchenForm;
function calcKitchen(calcType, constants, form){
    let time = 0;
    
        console.log('inside calcKitchen()');
        if(calcType === 'low'){
            if(form.wipe_cabinets){
                time += constants.K_COUNTERS_SINKS_CABINETS_BACKSPLASH_LOW;
            }
            if(form.wipe_appliances){
                time += constants.K_APPLIANCE_FRONTS_LOW;
            }
    
            if(form.clean_microwave){
                time += constants.K_MICROWAVE_LOW;
            }
    
            if(form.clean_stove_top){
                time += constants.K_STOVE_OVEN_LOW;
            }
            if(form.sweep_mop_floor){
                time += constants.K_SWEEP_MOP_LOW;
            }
                
            time += constants.K_MARGIN_LOW;
    
            console.log('after calcBathroom, expected totalTime is 20:', time)
            
        }
        else{
            if(form.wipe_cabinets){
                time += constants.K_COUNTERS_SINKS_CABINETS_BACKSPLASH_HIGH;
            }
            if(form.wipe_appliances){
                time += constants.K_APPLIANCE_FRONTS_HIGH;
            }
    
            if(form.clean_microwave){
                time += constants.K_MICROWAVE_HIGH;
            }
    
            if(form.clean_stove_top){
                time += constants.K_STOVE_OVEN_HIGH;
            }
            if(form.sweep_mop_floor){
                time += constants.K_SWEEP_MOP_HIGH;
            }
                
            time += constants.K_MARGIN_HIGH;
    
            console.log('after calcBathroom, expected totalTime is 52:', time)
            
        }
        return time;
    }
    
    module.exports = calcKitchen;
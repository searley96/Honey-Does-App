function calcKitchen(calcType, constants, form){
    let time = 0;
    if(calcType === 'low'){
        time += constants.GLASS_LOW;
        time += constants.WIPE_LOW;
        time += constants.DUST_LOW;
        // console.log('low expected 45:', time);
    }
    
    if(calcType === 'high'){
        time += constants.GLASS_HIGH;
        time += constants.WIPE_HIGH;
        time += constants.DUST_HIGH;
        // console.log('high expected 145:', time);
    }

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
    
            
        }
        return time;
    }
    
    module.exports = calcKitchen;
function calcBathroom(calcType, constants, form){
let time = 0;

let counter = 0;
    if(form.regular_type != ''){
        counter++;
    }
    if(form.ceramic_porcelain_type != ''){
        counter++;
    }
    if(form.walk_in_type != ''){
        counter++;
    }
    if(form.specialty_type != ''){
        counter++;
    }
    if(form.jacuzzi_type != '' && form.clean_jacuzzi == true){
        counter++;
    }
    if(form.other_type != ''){
        counter++;
    }
    console.log('inside calcBathroom counter', counter);
    if(calcType === 'low'){
        if(form.clean_mirror){
            time += constants.RR_MIRRORS_LOW;
        }
        if(form.clean_sink_counter){
            time += constants.RR_SINKS_COUNTERS_CABINETS_LOW;
        }
        time += (constants.RR_TUB_SHOWER_LOW * counter);

        if(form.clean_toilet){
            time += constants.RR_TOILET_LOW;
        }

        if(form.take_out_trash){
            time += constants.RR_TRASH_LOW;
        }
        if(form.sweep_mop_floor){
            time += constants.RR_SWEEP_MOP_LOW;
        }
            
        time += constants.RR_MARGIN_LOW;

        console.log('after calcBathroom, expected totalTime is 24:', time)
        
    }
    else{
        if(form.clean_mirror){
            time += constants.RR_MIRRORS_HIGH;
        }
        if(form.clean_sink_counter){
            time += constants.RR_SINKS_COUNTERS_CABINETS_HIGH;
        }
        time += (constants.RR_TUB_SHOWER_HIGH * counter);

        if(form.clean_toilet){
            time += constants.RR_TOILET_HIGH;
        }

        if(form.take_out_trash){
            time += constants.RR_TRASH_HIGH;
        }
        if(form.sweep_mop_floor){
            time += constants.RR_SWEEP_MOP_HIGH;
        }
        
        time += constants.RR_MARGIN_HIGH;
        console.log('after calcBathroom, expected totalTime is 87:', time)
    }
    return time;
}

module.exports = calcBathroom;
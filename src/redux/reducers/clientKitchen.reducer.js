const clientKitchenReducer = (state =
    {
        job_id: '',
        room_type: '',
        wipe_cabinets: 'yes',
        cabinet_spot_full_clean: '',
        cabinet_orange_glo: '',
        wipe_appliances: 'yes',
        wipe_fridge: 'yes',
        fridge_stainless_steel: '',
        wipe_dishwasher: 'yes',
        dishwasher_stainless_steel: '',
        wipe_deep_freezer: '',
        clean_microwave: 'yes',
        clean_stove_top: 'yes',
        type_of_stove: '',
        clean_hood_vent: '',
        hood_vent_special_instructions: '',
        back_splash: '',
        clean_stove_front: '',
        stove_stainless_steel: '',
        wipe_counters_sink: 'yes',
        granite_counter_tops: '',
        sweep_mop_floor: 'yes',
        shake_rugs: '',
        hardwood_floors: '',
        specialty_flooring: '',
        specialty_flooring_instructions: '',
        mop_location: ''

    }, action) => {
    switch (action.type) {
        case 'JOB_ID':
            return { ...state, job_id: action.payload };
        case 'SET_ROOM_TYPE':
            return { ...state, room_type: action.payload };
        case 'SET_WIPE_CABINETS':
            return { ...state, wipe_cabinets: action.payload };
        case 'SET_CABINET_SPOT_FULL_CLEAN':
            return { ...state, cabinet_spot_full_clean: action.payload };
        case 'SET_CABINET_ORANGE_GLO':
            return { ...state, cabinet_orange_glo: action.payload };
        case 'SET_WIPE_APPLIANCES':
            return { ...state, wipe_appliances: action.payload };
        case 'SET_WIPE_FRIDGE':
            return { ...state, wipe_fridge: action.payload };
        case 'SET_FRIDGE_SS':
            return { ...state, fridge_stainless_steel: action.payload };
        case 'SET_WIPE_DISHWASHER':
            return { ...state, wipe_dishwasher: action.payload };
        case 'SET_DISHWASHER_SS':
            return { ...state, dishwasher_stainless_steel: action.payload };
        case 'SET_WIPE_DEEP_FREEZER':
            return { ...state, wipe_deep_freezer: action.payload };
        case 'SET_MICROWAVE':
            return { ...state, clean_microwave: action.payload };
        case 'SET_STOVE_TOP':
            return { ...state, clean_stove_top: action.payload };
        case 'SET_STOVE_TYPE':
            return { ...state, type_of_stove: action.payload };
        case 'SET_HOOD_VENT':
            return { ...state, clean_hood_vent: action.payload };
        case 'SET_HOOD_VENT_INSTRUCTIONS':
            return { ...state, hood_vent_special_instructions: action.payload };
        case 'SET_BACK_SPLASH':
            return { ...state, back_splash: action.payload };
        case 'SET_STOVE_FRONT':
            return { ...state, clean_stove_front: action.payload };
        case 'SET_STOVE_SS':
            return { ...state, stove_stainless_steel: action.payload };
        case 'SET_COUNTERS_SINK':
            return { ...state, wipe_counters_sink: action.payload };
        case 'SET_GRANITE_COUNTERS':
            return { ...state, granite_counter_tops: action.payload };
        case 'SET_SWEEP_MOP_FLOORS':
            return { ...state, sweep_mop_floor: action.payload };
        case 'SET_SHAKE_RUGS':
            return { ...state, shake_rugs: action.payload };
        case 'SET_HARDWOOD_FLOORS':
            return { ...state, hardwood_floors: action.payload };
        case 'SET_SPECIALTY_FLOORING':
            return { ...state, specialty_flooring: action.payload };
        case 'SET_SPECIALTY_FLOORING_INSTRUCTIONS':
            return { ...state, specialty_flooring_instructions: action.payload };
        case 'SET_MOP_LOCATION':
            return { ...state, mop_location: action.payload };
            case 'CLEAR_KITCHEN':
            return { job_id: '',
            room_type: '',
            wipe_cabinets: 'yes',
            cabinet_spot_full_clean: '',
            cabinet_orange_glo: '',
            wipe_appliances: 'yes',
            wipe_fridge: 'yes',
            fridge_stainless_steel: '',
            wipe_dishwasher: 'yes',
            dishwasher_stainless_steel: '',
            wipe_deep_freezer: '',
            clean_microwave: 'yes',
            clean_stove_top: 'yes',
            type_of_stove: '',
            clean_hood_vent: '',
            hood_vent_special_instructions: '',
            back_splash: '',
            clean_stove_front: '',
            stove_stainless_steel: '',
            wipe_counters_sink: 'yes',
            granite_counter_tops: '',
            sweep_mop_floor: 'yes',
            shake_rugs: '',
            hardwood_floors: '',
            specialty_flooring: '',
            specialty_flooring_instructions: '',
            mop_location: '' };
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default clientKitchenReducer;
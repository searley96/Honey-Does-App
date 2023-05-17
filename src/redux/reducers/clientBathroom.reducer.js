const clientBathroomReducer = (state = {
    job_id: '',
    room_type: '',
    bathroom_type: '',
    bath_shower_type: 'yes',
    threshold_type: '',
    clean_jacuzzi: 'yes',
    clean_mirror: 'yes',
    number_mirrors_clean: '',
    clean_sink_counter: 'yes',
    granite_counter_tops: 'yes',
    sink_type: '',
    clean_front_cabinets: 'yes',
    cabinet_spot_full_clean: '',
    cabinet_orange_glo: 'yes',
    clean_toilet: 'yes',
    take_out_trash: 'yes',
    take_out_trash_instructions: '',
    sweep_mop_floor:'yes',
    shake_rugs: 'yes'
}, action) => {
    switch (action.type) {
        case 'JOB_ID':
            return { ...state, job_id: action.payload };
        case 'SET_ROOM_TYPE':
            return { ...state, room_type: action.payload };
        case 'SET_BATHROOM_TYPE':
            return { ...state, bathroom_type: action.payload };
        case 'SET_BATH_SHOWER_TYPE':
            return { ...state, bath_shower_type: action.payload };
        case 'SET_THRESHOLD_TYPE':
            return { ...state, threshold_type: action.payload };
        case 'SET_CLEAN_JACUZZI':
            return { ...state, clean_jacuzzi: action.payload };
        case 'SET_CLEAN_MIRROR':
            return { ...state, clean_mirror: action.payload };
        case 'SET_NUMBER_MIRRORS_CLEAN':
            return { ...state, number_mirrors_clean: action.payload };
        case 'SET_CLEAN_SINK_COUNTER':
            return { ...state, clean_sink_counter: action.payload };
        case 'SET_GRANITE_COUNTER_TOPS':
            return { ...state, granite_counter_tops: action.payload };
        case 'SET_SINK_TYPE':
            return { ...state, sink_type: action.payload };
        case 'SET_CLEAN_FRONT_CABINETS':
            return { ...state, clean_front_cabinets: action.payload };
        case 'SET_CABINET_SPOT_FULL_CLEAN':
            return { ...state, cabinet_spot_full_clean: action.payload };
        case 'SET_CABINET_ORANGE_GLO':
            return { ...state, cabinet_orange_glo: action.payload };
        case 'SET_CLEAN_TOILET':
            return { ...state, clean_toilet: action.payload };
        case 'SET_TAKE_OUT_TRASH':
            return { ...state, take_out_trash: action.payload };
        case 'SET_TAKE_OUT_TRASH_INSTRUCTIONS':
            return { ...state, take_out_trash_instructions: action.payload };
        case 'SET_SWEEP_MOP_FLOOR':
            return { ...state, sweep_mop_floor: action.payload };
        case 'SET_SHAKE_RUGS':
            return { ...state, shake_rugs: action.payload };
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user

export default clientBathroomReducer;
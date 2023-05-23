const clientBathroomReducer = (state = {
    order: null,
    form_type: 'bathroom',
    bathroom_type: 'Full Bath',
    regular_type: '',
    ceramic_porcelain_type: '',
    walk_in_type: '',
    specialty_type: '',
    jacuzzi_type: '',
    other_type: '',
    clean_jacuzzi: true,
    clean_mirror: true,
    number_mirrors_clean: 0,
    clean_sink_counter: true,
    granite_counter_tops: null,
    sink_type: '',
    clean_front_cabinets: null,
    cabinet_spot_full_clean: '',
    cabinet_orange_glo: null,
    clean_toilet: true,
    take_out_trash: true,
    take_out_trash_instructions: '',
    sweep_mop_floor: true,
    shake_rugs: null
}, action) => {
    switch (action.type) {
        case 'SET_ORDER':
            return { ...state, order: action.payload };
        case 'SET_BATHROOM_TYPE':
            return { ...state, bathroom_type: action.payload };
        case 'SET_REGULAR_TYPE':
            return { ...state, regular_type: action.payload };
        case 'SET_CERAMIC_PORCELAIN_TYPE':
            return { ...state, ceramic_porcelain_type: action.payload };
        case 'SET_WALK_IN_TYPE':
            return { ...state, walk_in_type: action.payload };
        case 'SET_SPECIALTY_TYPE':
            return { ...state, specialty_type: action.payload };
        case 'SET_JACUZZI_TYPE':
            return { ...state, jacuzzi_type: action.payload };
        case 'SET_OTHER_TYPE':
            return { ...state, other_type: action.payload };
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
        case 'CLEAR_ROOM':
            return {
                order: null,
                form_type: 'bathroom',
                bathroom_type: '',
                regular_type: '',
                ceramic_porcelain_type: '',
                walk_in_type: '',
                specialty_type: '',
                jacuzzi_type: '',
                other_type: '',
                clean_jacuzzi: true,
                clean_mirror: true,
                number_mirrors_clean: 0,
                clean_sink_counter: true,
                granite_counter_tops: null,
                sink_type: '',
                clean_front_cabinets: null,
                cabinet_spot_full_clean: '',
                cabinet_orange_glo: null,
                clean_toilet: true,
                take_out_trash: true,
                take_out_trash_instructions: '',
                sweep_mop_floor: true,
                shake_rugs: null
            }
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user

export default clientBathroomReducer;
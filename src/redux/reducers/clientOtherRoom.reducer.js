const clientOtherRoomReducer = (state = {
    job_id: '',
    room_type: '',
    floor_type: '',
    wipe_surfaces: 'yes',
    clean_floor: 'yes',
    sq_ft: ''
}, action) => {
    switch (action.type) {
        case 'JOB_ID':
            return { ...state, job_id: action.payload };
        case 'SET_ROOM_TYPE':
            return { ...state, room_type: action.payload };
        case 'SET_SQ_FT':
            return { ...state, sq_ft: action.payload };
        case 'SET_WIPE_SURFACES':
            return { ...state, wipe_surfaces: action.payload };
        case 'SET_CLEAN_FLOOR':
            return { ...state, clean_floor: action.payload };
        case 'CLEAR_OTHER_ROOM_FORM':
            return {job_id: '',
            room_type: '',
            floor_type: '',
            wipe_surfaces: 'yes',
            clean_floor: 'yes',
            sq_ft: ''};
        default:
            return state;
    }
};

export default clientOtherRoomReducer;
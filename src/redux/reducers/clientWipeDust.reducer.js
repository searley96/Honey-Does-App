const clientWipeDustReducer = (state = {
	job_id: '',
	wipe_clean_glass: 'yes',
	glass_door: '',
	glass_door_number: '',
	inside_glass_door: '',
	outside_glass_door: '',
	glass_door_location: '',
	other_mirrors: '',
	other_mirrors_number: '',
	other_mirrors_location: '',
	dust: 'yes',
	ceiling_lines_wall_lines_baseboards: '',
	ceiling_fixtures: '',
	swiffer_feather: '',
	window_blinds: '',
	window_ledges: '',
	window_sills: '',
	picture_frames_wall_decor: '',
	tops_decor_items: '',
	pick_up_get_under: '',
	electronics: '',
	dust_other: '',
	dust_other_instructions: '',
	dust_bed_living_furniture: '',
	bed_living_furniture_duster: ''
}, action) => {
    switch(action.type) {
        case 'JOB_ID':
            return {...state, job_id: action.payload};
        case 'WIPE_CLEAN_GLASS':
            return {...state, wipe_clean_glass: action.payload};
        case 'GLASS_DOOR':
            return {...state, glass_door: action.payload};
        case 'GLASS_DOOR_NUMBER':
            return {...state, glass_door_number: action.payload};
        case 'INSIDE_GLASS_DOOR':
            return {...state, inside_glass_door: action.payload};
        case 'OUTSIDE_GLASS_DOOR':
            return {...state, outside_glass_door: action.payload};
        case 'GLASS_DOOR_LOCATION':
            return {...state, glass_door_location: action.payload};
        case 'OTHER_MIRRORS':
            return {...state, other_mirrors: action.payload};
        case 'OTHER_MIRRORS_NUMBER':
            return {...state, other_mirrors_number: action.payload};
        case 'OTHER_MIRRORS_LOCATION':
            return {...state, other_mirrors_location: action.payload};
        case 'DUST':
            return {...state, dust: action.payload};
        case 'CEILING_LINES_WALL_LINES_BASEBOARDS':
            return {...state, ceiling_lines_wall_lines_baseboards: action.payload};
        case 'CEILING_FIXTURES':
            return {...state, ceiling_fixtures: action.payload};
        case 'SWIFFER_FEATHER':
            return {...state, swiffer_feather: action.payload};
        case 'WINDOW_BLINDS':
            return {...state, window_blinds: action.payload};
        case 'WINDOW_LEDGES':
            return {...state, window_ledges: action.payload};
        case 'WINDOW_SILLS':
            return {...state, window_sills: action.payload};
        case 'PICTURE_FRAMES_WALL_DECOR':
            return {...state, picture_frames_wall_decor: action.payload};
        case 'TOPS_DECOR_ITEMS':
            return {...state, tops_decor_items: action.payload};
        case 'PICK_UP_GET_UNDER':
            return {...state, pick_up_get_under: action.payload};
        case 'ELECTRONICS':
            return {...state, electronics: action.payload};
        case 'DUST_OTHER':
            return {...state, dust_other: action.payload};
        case 'DUST_OTHER_INSTRUCTIONS':
            return {...state, dust_other_instructions: action.payload};
        case 'DUST_BED_LIVING_FURNITURE':
            return {...state, dust_bed_living_furniture: action.payload};
        case 'BED_LIVING_FURNITURE_DUSTER':
            return {...state, bed_living_furniture_duster: action.payload};
    }
};

export default clientWipeDustReducer;
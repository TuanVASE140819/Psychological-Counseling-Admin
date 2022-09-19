const stateDefault = {
    arrConsultants: [],
    chiTietConsultants: {}
}


export const ConsultantsReducer = (state = stateDefault, action) => {

    switch (action.type) {


        case 'GET_LIST_CONSULTANTS': {
            state.arrConsultants = action.arrConsultants;
            return { ...state }
        }
        case 'CHI_TIET_CONSULTANTS': {
            state.chiTietConsultants = action.chiTietConsultants;
            return { ...state }
        }


        default: return state;
    }
}
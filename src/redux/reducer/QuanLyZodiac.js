const stateDefault = {
    arrZodiac: [


    ]
}

export const QuanLyZodiac = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_DANH_SACH_ZODIAC': {
            state.arrZodiac = action.arrZodiac;
            return { ...state };
        }

        default: return state;
    }
}
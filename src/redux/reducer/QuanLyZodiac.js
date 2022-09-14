const stateDefault = {
    arrZodiac: [],
    chiTietZodiac: {},
    arrHouses: []
}

export const QuanLyZodiac = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_DANH_SACH_ZODIAC': {
            state.arrZodiac = action.arrZodiac;
            return { ...state };
        }

        case 'CHI_TIET_ZODIAC': {
            state.chiTietZodiac = action.chiTietZodiac;
            return { ...state }
        }
        case 'LAY_DANH_SACH_HOUSES': {
            state.arrHouses = action.arrHouses;
            return { ...state };
        }

        default: return state;
    }
}
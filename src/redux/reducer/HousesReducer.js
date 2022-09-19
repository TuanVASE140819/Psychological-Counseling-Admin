const stateDefault = {
    arrHouses: [],
    chiTietHouses: {}
  }
  
  export const HousesReducer = (state = stateDefault, action) => {
    switch (action.type) {
      case 'GET_LIST_HOUSES': {
        state.arrHouses = action.arrHouses
        return { ...state }
      }
      case 'CHI_TIET_HOUSES': {
        state.chiTietHouses = action.chiTietHouses
        return { ...state }
      }
  
      default:
        return state
    }
  }
  
const stateDefault = {
  arrPlanet: [],
  chiTietPlanet: {}
}

export const PlanetsReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'GET_LIST_PLANETS': {
      state.arrPlanet = action.arrPlanet
      return { ...state }
    }
    case 'CHI_TIET_PLANETS': {
      state.chiTietPlanet = action.chiTietPlanet
      return { ...state }
    }

    default:
      return state
  }
}

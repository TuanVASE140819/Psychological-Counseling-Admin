const stateDefault = {
    arrPlanets: [],
    chiTietPlanets: {}
  }
  
  export const PlanetsReducer = (state = stateDefault, action) => {
    switch (action.type) {
      case 'GET_LIST_PLANETS': {
        state.arrPlanets = action.arrPlanets
        return { ...state }
      }
      case 'CHI_TIET_PLANETS': {
        state.chiTietPlanets = action.chiTietPlanets
        return { ...state }
      }
  
      default:
        return state
    }
  }
  
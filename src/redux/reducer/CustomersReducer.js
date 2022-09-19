const stateDefault = {
  arrCustomers: [],
  chiTietCustomers: {}
}

export const CustomersReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'GET_LIST_CUSTOMERS': {
      state.arrCustomers = action.arrCustomers
      return { ...state }
    }
    case 'CHI_TIET_CUSTOMERS': {
      state.chiTietCustomers = action.chiTietCustomers
      return { ...state }
    }

    default:
      return state
  }
}

import axios from 'axios'
import { http } from '../../services/baseServices'
import swal from 'sweetalert'

export const GetCustomersAction = () => {
  return async dispatch => {
    try {
      let result = await http.get('/Customers/Getallcustomer')
      const action = {
        type: 'GET_LIST_CUSTOMERS',
        arrCustomer: result.data.data
      }
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
  }
}

export const ChiTietCustomersAction = id => {
  return async dispatch => {
    try {
      let result = await http.get('/Customers/getbyid?id=' + id)
      const action = {
        type: 'CHI_TIET_CUSTOMERS',
        ChiTietCustomers: result.data.data
      }
      dispatch(action)
      console.log(result.data.data)
    } catch (error) {
      console.log(error)
    }
  }
}
export const EditCustomersAction = id => {
  return async dispatch => {
    try {
      let result = await axios({
        url:
          'http://www.psychologicalcounselingv1.somee.com/api/Customers/update',
        method: 'PUT',
        data: id
      })

      const action = GetCustomersAction()
      dispatch(action)
      swal('Thành công!', 'You clicked the button!', 'success')
    } catch (error) {
      console.log(error)
    }
  }
}

export const DeleteCustomersAction = id => {
  return async dispatch => {
    try {
      let result = await http.delete('/Customers/' + id)
      const action = GetCustomersAction()
      dispatch(action)
      console.log(result)
      swal('Thành công!', 'You clicked the button!', 'success')
    } catch (error) {
      console.log(error)
    }
  }
}

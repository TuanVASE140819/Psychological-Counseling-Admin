import axios from 'axios'
import { http } from '../../services/baseServices'
import swal from 'sweetalert'

export const GetHousesAction = () => {
  return async dispatch => {
    try {
      let result = await http.get('/Houses/Getallhouses')
      const action = {
        type: 'GET_LIST_HOUSES',
        arrHouses: result.data.data
      }
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
  }
}

export const ChiTietHousesAction = id => {
  return async dispatch => {
    try {
      let result = await http.get('/Houses/getbyid?id=' + id)
      const action = {
        type: 'CHI_TIET_HOUSES',
        chiTietHouses: result.data.data
      }
      dispatch(action)
      console.log(result.data.data)
    } catch (error) {
      console.log(error)
    }
  }
}
export const EditHousesAction = id => {
  return async dispatch => {
    try {
      let result = await axios({
        url:
          'http://www.psychologicalcounselingv1.somee.com/api/Houses/update',
        method: 'PUT',
        data: id
      })

      const action = GetHousesAction()
      dispatch(action)
      swal('Thành công !', ' ', 'success')
    } catch (error) {
      console.log(error)
    }
  }
}

export const DeleteHousesAction = id => {
  return async dispatch => {
    try {
      let result = await http.delete('/Houses/' + id)
      const action = GetHousesAction()
      dispatch(action)
      console.log(result)
      swal('Thành công !', ' ', 'success')
    } catch (error) {
      console.log(error)
    }
  }
}

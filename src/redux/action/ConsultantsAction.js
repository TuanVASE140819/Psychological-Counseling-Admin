import axios from 'axios'
import { http } from '../../services/baseServices'
import swal from 'sweetalert'

export const GetConsultantsAction = () => {
  return async dispatch => {
    try {
      let result = await http.get('/Consultants/Getallconsultant')
      const action = {
        type: 'GET_LIST_CONSULTANTS',
        arrConsultants: result.data.data
      }
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
  }
}

export const ChiTietConsultantsAction = id => {
  return async dispatch => {
    try {
      let result = await http.get('/Consultants/getbyid?id=' + id)
      const action = {
        type: 'CHI_TIET_CONSULTANTS',
        chiTietConsultants: result.data.data
      }
      dispatch(action)
      console.log(result.data.data)
    } catch (error) {
      console.log(error)
    }
  }
}
export const EditConsultantsAction = id => {
  return async dispatch => {
    try {
      let result = await axios({
        url:
          'http://www.psychologicalcounselingv1.somee.com/api/Consultants/update',
        method: 'PUT',
        data: id
      })

      const action = GetConsultantsAction()
      dispatch(action)
      swal('Thành công !', ' ', 'success')
    } catch (error) {
      console.log(error)
    }
  }
}

export const DeleteConsultantsAction = id => {
  return async dispatch => {
    try {
      let result = await http.delete('/Consultants/' + id)
      const action = GetConsultantsAction()
      dispatch(action)
      console.log(result)
      swal('Thành công !', ' ', 'success')
    } catch (error) {
      console.log(error)
    }
  }
}
export const CreateConsultantsAction = upload => {
  return async dispatch => {
    try {
      let result = await axios({
        url: 'http://www.psychologicalcounselingv1.somee.com/api/Consultants/create',
        method: "POST",
        data: upload
      })
      console.log(result);
      const action = GetConsultantsAction()
      dispatch(action)
      swal('Thành công !', ' ', 'success')
    } catch (error) {
      console.log(error)
    }
  }
}
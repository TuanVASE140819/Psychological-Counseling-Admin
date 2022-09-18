import axios from 'axios'
import { http } from '../../services/baseServices'
import swal from 'sweetalert'

export const GetPlanetsAction = () => {
  return async dispatch => {
    try {
      let result = await http.get('/Planets/Getallplanets')
      const action = {
        type: 'GET_LIST_PLANETS',
        arrPlanets: result.data.data
      }
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
  }
}

export const ChiTietPlanetsAction = id => {
  return async dispatch => {
    try {
      let result = await http.get('/Planets/getbyid?id=' + id)
      const action = {
        type: 'CHI_TIET_PLANETS',
        chiTietPlanets: result.data.data
      }
      dispatch(action)
      console.log(result.data.data)
    } catch (error) {
      console.log(error)
    }
  }
}
export const EditPlanetsAction = id => {
  return async dispatch => {
    try {
      let result = await axios({
        url:
          'http://www.psychologicalcounselingv1.somee.com/api/Consultants/update',
        method: 'PUT',
        data: id
      })

      const action = GetPlanetsAction()
      dispatch(action)
      swal('Thành công !', ' ', 'success')
    } catch (error) {
      console.log(error)
    }
  }
}

export const DeletePlanetsAction = id => {
  return async dispatch => {
    try {
      let result = await http.delete('/Planets/' + id)
      const action = GetPlanetsAction()
      dispatch(action)
      console.log(result)
      swal('Thành công !', ' ', 'success')
    } catch (error) {
      console.log(error)
    }
  }
}

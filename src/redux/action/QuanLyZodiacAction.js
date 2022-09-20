import axios from 'axios'
import { http } from '../../services/baseServices'
import swal from 'sweetalert'

export const QuanLyZodiacAction = () => {
  return async dispatch => {
    try {
      let result = await http.get('/Zodiacs/Getallzodiacs')
      const action = {
        type: 'LAY_DANH_SACH_ZODIAC',
        arrZodiac: result.data.data
      }
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
  }
}

export const DetailZodiacAction = id => {
  return async dispatch => {
    try {
      let result = await http.get('/Zodiacs/getbyid?id=' + id)
      const action = {
        type: 'CHI_TIET_ZODIAC',
        chiTietZodiac: result.data.data
      }
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
  }
}
export const EditZodiacAction = formValue => {
  return async dispatch => {
    try {
      let result = await http.put('Zodiacs/update', formValue)

      const action = QuanLyZodiacAction()
      dispatch(action)
      swal('Thành công !', ' ', 'success')
    } catch (error) {
      console.log(error)
    }
  }
}
export const LayDanhSachHousesAction = () => {
  return async dispatch => {
    try {
      let result = await http.get('/Houses/Getallhouses');
      const action = {
        type: 'LAY_DANH_SACH_HOUSES',
        arrHouses: result.data.data,
      }
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
  }
}

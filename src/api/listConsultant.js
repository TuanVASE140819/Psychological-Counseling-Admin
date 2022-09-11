
import axios from 'axios';


export const listConsultant = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://old-stuff-exchange.azurewebsites.net/api/v1.0/users?pageNumber=1&pageSize=40',
                method: 'GET',
                headers: {
                    // ['Authorization']: 'Bearer ' + localStorage.getItem('loginadmin'),
                }
            })
            const action = {
                type: 'LAY_DANH_SACH_USER',
                arrUser: result.data.data,
            }
            dispatch(action)
        } catch (error) {
            console.log(error.data);
        }
    }
  }
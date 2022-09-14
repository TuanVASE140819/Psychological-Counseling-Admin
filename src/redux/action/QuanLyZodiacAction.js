import axios from "axios"


export const QuanLyZodiacAction = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://www.psychologicalcounselingv1.somee.com/api/Zodiacs',
                method: 'GET'
            })
            const action = {
                type: 'LAY_DANH_SACH_ZODIAC',
                arrZodiac: result.data
            }
            dispatch(action);
        } catch (error) {
            console.log(error);
        }
    }
}


export const DetailZodiacAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'http://www.psychologicalcounselingv1.somee.com/api/Zodiacs/' + id,
                method: 'GET'
            })
            const action = {
                type: 'CHI_TIET_ZODIAC',
                chiTietZodiac: result.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}
export const EditZodiacAction = (id, formValue) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'http://www.psychologicalcounselingv1.somee.com/api/Zodiacs/' + id, formValue,
                method: 'PUT'
            })

            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
}
export const LayDanhSachHousesAction = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://www.psychologicalcounselingv1.somee.com/api/Houses',
                method: 'GET'
            })
            const action = {
                type: 'LAY_DANH_SACH_HOUSES',
                arrHouses: result.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}
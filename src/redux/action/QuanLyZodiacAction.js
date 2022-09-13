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
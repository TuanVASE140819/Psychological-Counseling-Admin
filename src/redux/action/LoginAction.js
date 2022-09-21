import axios from "axios";
import { history } from "../../App";
import { http } from "../../services/baseServices"



export const LoginAction = (email, password) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `http://www.psychologicalcounselingv1.somee.com/api/FirebaseServices/loginadmin?email=${email}&password=${password}`,
                method: 'POST',

            })
            console.log(result.data.jwttoken);

            localStorage.setItem('LOGIN_ADMIN', result.data.jwttoken)
            history.push("/consultant");

        } catch (error) {
            console.log(error);
        }
    }
}
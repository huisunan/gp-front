import {CHANGE_LOGIN, RECORD_USERINFO, SET_TOKEN} from "./mutation-types";
import {userLogin} from "../api";
import {removeStore} from "../utils/storage";

export default {
//设置token
  loginAction({commit}, params) {
    return new Promise((resolve, reject) => {
      userLogin(params).then(response => {
        if (response.success) {
          commit(SET_TOKEN, response.result.token)
          commit(RECORD_USERINFO, {info: response.result})
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }

}


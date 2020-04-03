import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import {getStore, removeStore} from "../utils/storage";
import {CHANGE_LOGIN, RECORD_USERINFO, SET_TOKEN} from "./mutation-types";
Vue.use(Vuex)

const state = {
  login: false,
  userInfo: null,
  cartList: [],
  showMoveImg: false,
  elLeft: 0,
  elTop: 0,
  moveImgUrl: null,
  cartPositionT: 0,
  cartPositionL: 0,
  receiveInCart: false,
  showCart: false,
  token:null
}

export default ()=>{
  if (getToken()!=null &&  getUserInfo()!=null){
    state.login = true
  }

  return new Vuex.Store({
    state,
    actions,
    mutations
  })
}

export const getToken = function () {
  let token = state.token
  if(token == null){
    token = getStore('token')
    if (token!=null){
      state.token = token
    }
  }
  return token
}

export const getUserInfo = function () {
  let userInfo = state.userInfo
  if(userInfo == null){
    userInfo = getStore('userInfo')
    if (userInfo != null){
      userInfo = JSON.parse(userInfo)
      state.userInfo = userInfo
    }
  }
  return userInfo
}

export const expireAction =  function() {
  removeStore('token')
  removeStore('userInfo')
  state.token = null
  state.userInfo = null
  state.login = null
}

import Vue from 'vue'
import request from "./config/http.js"
import params from "./config/params.js"

const url1 = '/activityfilm/art/activity/test';

const apis = {
  logon(data) {
    return request({
      url: url1,
      method: 'post',
      jsonString:true,
      data
    })
  }
}


export default apis
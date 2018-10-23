import Vue from 'vue'


var native = {

}


export default {
  install() {
    Vue.prototype.$native = native;
  },
  native
}

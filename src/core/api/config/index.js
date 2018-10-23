import Vue from 'vue'
import test from "@/core/api/test.serve"

const apis={
	test,
}
export default {
  install() {
    Vue.prototype.$apis = apis
  }
}

import Vue from 'vue'
import Router from 'vue-router'
import global from '@/core/global/global'
// import native from '@/core/native/index'
var param = global.global.getParam();


Vue.use(Router)

import test_routers from "./test_routers"
var projects = [
  test_routers
]

var routes = (branches) => {
  var merge = [];
  branches.map(function(item) {
    merge.push.apply(merge, item);
  })
  return merge;
}
var router = new Router({
  routes: routes(projects)
})

router.beforeEach((to, from, next) => {
  console.log(to.path)
  next();
})
export default router;

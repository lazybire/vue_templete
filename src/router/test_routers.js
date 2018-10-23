export default [{
    path: '/culture',
    name: 'culture',
    component: resolve => require(['@/components/home'], resolve),
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          title: '首页'
        },
        component: resolve => require(['@/components/culture/index'], resolve),
      },

      {
        path: 'list',
        name: 'list',
        meta: {
          title: '我是列表页'
        },
        component: resolve => require(['@/components/culture/list'], resolve),

      }
     

    ]
  },
]

import index from './index.vue'
import richEditor from './richEditor/index.vue'
import demo2 from './demo2/index.vue'

export default [
  {
    path: '/',
    component: index,
    children: [
      {
        path: '/richEditor',
        name: 'richEditor',
        component: richEditor
      },
      {
        path: '/demo2',
        name: 'demo2',
        component: demo2
      }
    ]
  }
]

import editor from './components/editor/index'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import './style/index.scss'

const dmui = {}

const install = function (Vue, opts = {}) {
  Vue.use(iview)
  Object.keys(dmui).forEach((key) => {
    Vue.component(key, dmui[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = Object.assign(dmui, {
  install
})

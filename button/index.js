import Button from './src/component.vue'

const install = Vue => {
  Vue.component('button-component', Button)
}

export default {
  install,
}

export { Button }

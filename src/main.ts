import './assets/main.css'

import { createApp, h, provide } from 'vue'
import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { getApolloClient } from './utils/apolloClient'

createApp({
  setup() {
    provide(DefaultApolloClient, getApolloClient())
  },
  render: () => h(App),
}).mount('#app')

import type { AppConfig, Plugin } from 'vue'

const errorHandler: AppConfig['errorHandler'] = (err) => {
  console.log(err)
}

export default {
  install(app) {
    app.config.errorHandler = errorHandler
  },
} as Plugin

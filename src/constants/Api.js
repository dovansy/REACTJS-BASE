import axios from 'axios'
import Cookie from 'js-cookie'
const Reactotron = process.env.NODE_ENV !== 'production' && require('reactotron-react-js').default

function createAxios() {
  var axiosInstant = axios.create()
  axiosInstant.defaults.baseURL = 'http://150.95.114.185:8888/'
  axiosInstant.defaults.timeout = 20000
  axiosInstant.defaults.headers = { 'Content-Type': 'application/json' }
  axiosInstant.defaults.headers = { 'access-control-allow-origin': '*' }

  axiosInstant.interceptors.request.use(
    async (config) => {
      config.headers.token = Cookie.get('SESSION_ID')
      return config
    },
    (error) => Promise.reject(error)
  )

  axiosInstant.interceptors.response.use(
    (response) => {
      // log via ReactOtron
      if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        Reactotron.apisauce(response)
      } else {
        // production code
      }

      if (response.data.code === 403) {
        Cookie.remove('SESSION_ID')
        window.location.reload()
      } else if (response.data.status !== 1)
        setTimeout(() => {
          alert(response.data.msg)
        }, 300)
      return response
    },
    (error) => {}
  )
  return axiosInstant
}

export const getAxios = createAxios()

/* Support function */
function handleResult(api) {
  return api.then((res) => {
    if (res.data.status !== 1) {
      return Promise.reject(res.data)
    }
    return Promise.resolve(res.data)
  })
}

export const requestHomeData = (deviceID = '') => {
  return handleResult(getAxios.get(`api/Service/GetHomeScreen?deviceID=${deviceID}`))
}

export const requestGetUserInfo = () => {
  return handleResult(getAxios.get(`users/getUserInfo`))
}

export const requestLogin = (payload) => {
  return handleResult(
    getAxios.post(`users/login`, {
      USERNAME: payload.USERNAME,
      PASS: payload.PASS,
    })
  )
}

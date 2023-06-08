let BASE_URL = ''
const TIMEOUT = 10000

switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = '/api'
    break
  case 'production':
    BASE_URL = '/api'
    break
  case 'test':
    BASE_URL = '/api'
    break
}

export { BASE_URL, TIMEOUT }

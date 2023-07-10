let BASE_URL = ''
const TIMEOUT = 30000

switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = 'http://codercba.com:5000'
    break
  case 'production':
    BASE_URL = 'http://codercba.com:5000'
    break
  case 'test':
    BASE_URL = 'http://codercba.com:5000'
    break
}

export { BASE_URL, TIMEOUT }

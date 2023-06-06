let BASE_URL = 'https://dev.to'
const TIMEOUT = 5000

switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = 'https://dev.to'
    break
  case 'production':
    BASE_URL = 'https://dev.to'
    break
  case 'test':
    BASE_URL = 'https://dev.to'
    break
}

export { BASE_URL, TIMEOUT }

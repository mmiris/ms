import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
const dateFormater = 'YYYY-MM-DD HH:mm:ss'

const dateFormat = (utcString: string, formater = dateFormater) => {
  return dayjs.utc(utcString).format(formater)
}

export default dateFormat

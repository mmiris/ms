import service from '..'
import { EApis } from './types'

const categoryCountService = () => {
  return service.get({
    url: EApis.categoryCount
  })
}

const categorySaleService = () => {
  return service.get(
    {
      url: EApis.categorySale
    },
    undefined,
    false
  )
}

const categoryFavorService = () => {
  return service.get(
    {
      url: EApis.categoryFavor
    },
    undefined,
    false
  )
}

const addressSaleService = () => {
  return service.get(
    {
      url: EApis.addressSale
    },
    undefined,
    false
  )
}

export { categoryCountService, categorySaleService, categoryFavorService, addressSaleService }

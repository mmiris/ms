import coordinateData from './coordinate-data'

interface IMapData {
  name: string
  value: number[] | number
}

const convertData = (mapData: IMapData[]) => {
  const res: IMapData[] = []

  mapData.forEach((item) => {
    const coordinate = coordinateData[item.name]
    if (coordinate) {
      res.push({
        name: item.name,
        value: coordinate.concat(item.value)
      })
    }
  })

  return res
}

export default convertData

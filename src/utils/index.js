const mapSortDataCollection = arr => {
  const findGenre = arr.find(item => item.Category === 'Genre')
  return arr
    .map(item => {
      if (item.Category === 'Recommended') {
        item.order = 1
      }
      if (item.Category === 'New') {
        item.order = 2
        item.genre = findGenre
      }
      if (item.Category === 'Top') {
        item.order = 3
      }
      if (item.Category === 'Genre') {
        item.order = 4
      }
      if (item.Category === 'Completed') {
        item.order = 5
      }
      return item
    })
    .sort((a, b) => (a.order > b.order ? 1 : b.order > a.order ? -1 : 0))
}
const sortArray = (arr, field) => {
  return arr.sort((a, b) =>
    a[field] > b[field] ? 1 : b[field] > a[field] ? -1 : 0
  )
}
module.exports = { mapSortDataCollection, sortArray }

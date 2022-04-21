export const toBase64 = str =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export function sortObjectByField(a, field, sortMode) {
  if (sortMode === 'asc') return a.sort(sortFunction1)
  if (sortMode === 'desc') return a.sort(sortFunction2)
  return a.sort(sortFunction1)

  function sortFunction1(a, b) {
    if (a[field] === b[field]) return 0
    return a[field] < b[field] ? -1 : 1
  }

  function sortFunction2(a, b) {
    if (a[field] === b[field]) return 0
    return a[field] > b[field] ? -1 : 1
  }
}

export const filterObjectArray = (data, filter) => {
  let filteredData = data
  for (const q in filter) {
    if (data[0][q]) {
      filteredData = filteredData.filter(card => card[q] === filter[q])
    }
  }

  return filteredData
}

export const filterObject = (filter, obj, propName) => {
  const values = filter.map(v => v.value)
  if (values.includes(obj[propName]) || values.includes('any')) {
    return true
  }
}

export const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}

/* eslint-disable no-useless-escape */
export const toolTypes = {
  '{': 'status',
  '[': 'ability',
  '<': 'tool'
}

export const hasCode = text => {
  return text.includes('{') || text.includes('[') || text.includes('<')
}

export const getCodesFromText = text => {
  return [
    ...(text.match(/\{(.*?)\}/g) || []),
    ...(text.match(/\[(.*?)\]/g) || []),
    ...(text.match(/\<(.*?)\>/g) || [])
  ]
}

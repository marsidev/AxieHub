const createOgImage = ({ title, description, url }) => {
  if (!title || !description || !url) return ''

  const data = {
    bg: 'black',
    h: '627',
    w: '1200',
    'a.tp': 'textbox',
    'a.ox': 'center',
    'a.oy': 'bottom',
    'a.x': '598',
    'a.y': '191',
    'a.w': '956',
    'a.h': '68',
    'a.fill': 'white',
    'a.ta': 'left',
    'a.fs': '60',
    'a.lh': '1',
    'a.fw': '900',
    'a.ff': 'Poppins',
    'a.fontStyle': 'normal',
    'a.maxHeight': '120',
    'b.tp': 'textbox',
    'b.x': '115',
    'b.y': '219',
    'b.w': '960',
    'b.h': '122',
    'b.fill': 'white',
    'b.ta': 'left',
    'b.fs': '50',
    'b.lh': '1',
    'b.fw': '400',
    'b.ff': 'Inter',
    'b.fontStyle': 'normal',
    'b.ox': 'left',
    'b.oy': 'top',
    'b.maxHeight': '250',
    'c.tp': 'textbox',
    'c.oy': 'bottom',
    'c.x': '115',
    'c.y': '568',
    'c.w': '960',
    'c.h': '45',
    'c.fill': 'white',
    'c.ta': 'left',
    'c.fs': '40',
    'c.lh': '1',
    'c.fw': '400',
    'c.ff': 'Inter',
    'c.fontStyle': 'normal',
    'c.ox': 'left',
    'c.maxHeight': '40',
    'a.t': title,
    'b.t': description,
    'c.t': url
  }

  const params = new URLSearchParams(data).toString()
  return `https://img.bruzu.com?${params}`
}

export default createOgImage

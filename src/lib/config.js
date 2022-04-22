export const siteTitle = 'AxieHub'

export const siteUrl = 'https://axiehub.vercel.app'

export const siteDescription = 'AxieHub is a fan site where you can find the best tools related to Axie Infinity. Initially created for Origin Education Challenge!'

export const siteKeywords =
  'axie hub, axiehub, axie.hub, axiehub.vercel, axiehub vercel, axie infinity, axie tool, axie tools, play to earn, play2earn, p2e, crypto gaming, sky mavis, ronin, origin, axie infinity origin, origin cards, cards explorer, axie infinity cards, axie infinity cards explorer, origin education challenge'

export const ogImageUrl = `https://img.bruzu.com/?bg=black&h=627&w=1200&a.tp=textbox&a.ox=center&a.oy=bottom&a.x=598&a.y=191&a.w=956&a.h=68&a.fill=white&a.ta=left&a.fs=60&a.lh=1&a.fw=900&a.ff=Poppins&a.fontStyle=normal&a.maxHeight=120&b.tp=textbox&b.x=115&b.y=219&b.w=960&b.h=122&b.fill=white&b.ta=left&b.fs=50&b.lh=1&b.fw=400&b.ff=Inter&b.fontStyle=normal&b.ox=left&b.oy=top&b.maxHeight=250&c.tp=textbox&c.oy=bottom&c.x=115&c.y=568&c.w=960&c.h=45&c.fill=white&c.ta=left&c.fs=40&c.lh=1&c.fw=400&c.ff=Inter&c.fontStyle=normal&c.ox=left&c.maxHeight=40&a.t=${encodeURI(siteTitle)}&b.t=${encodeURI(siteDescription)}&c.t=${encodeURI(siteUrl)}`

export const server =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5900'
    : 'https://axiehub.vercel.app'
